export default class MoviesData {
    constructor() {
        this._apiBase = "https://api.themoviedb.org/3";
        this._apiKey = "?api_key=f78065abe3763cb2694006821dbaca97";
    }

    async getResource(url, sortBy) {

        const res = await fetch(`${this._apiBase}${url}${this._apiKey}${sortBy}`);

        if (!res.ok) {
            throw new Error(`Could not Fetch ${this._apiBase}${url}${this._apiKey}${sortBy}, status ${res.status}`);
        };

        return await res.json();
    }



    getNewMovies = async () => {
        const res = await this.getResource("/movie/upcoming", "&page=1");

        const dataArray = res.results.map((item) => {

            const newDate = item.release_date.split("", 4).join("");

            const year = Number(newDate);

            return year >= 2021 ? this._transformItem(item) : null;
        });

        return dataArray.filter((item) => {
            return item !== null;
        });
    };

    getTopMovies = async () => {
        const res = await this.getResource("/movie/top_rated", "&page=1");

        return res.results.map(this._transformItem);
    };

    getMovies = async () => {
        const res = await this.getResource("/discover/movie", "&page=1");

        return res.results.map(this._transformItem);
    };

    getSerials = async () => {
        const res = await this.getResource("/discover/tv", "&page=1");

        return res.results.map(this._transformItem);
    };

    getItemById = async (id) => {
        const res = await this.getResource(`/movie/${id}`, "");
        console.log(res)

        return this._transformItemId(res)
    };
    
    // getItemById = async (id) => {
    //     const res = await this.getResource(`/movie/${id}`, "");
    //     console.log(res)

    //     return this._transformItemId(res)
    // };

    _transformItem(item) {
        return {
            poster: item.poster_path || item.backdrop_path,
            title: item.title || item.name,
            id: item.id,
            rating: item.vote_average,
            date: item.release_date || item.first_air_date
        };
    };

    _transformItemId(item) {
        return {
            title: item.title || item.name,
            date: item.release_date || item.last_air_date,
            poster: item.poster_path || item.backdrop_path,
            tagline: item.tagline,
            genres: item.genres,
            rating: item.vote_average,
            overview: item.overview,
            status: item.status,
            runtime: item.runtime
        };
    };
};