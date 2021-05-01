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
        const res = await this.getResource("/discover/movie", "&vote_average.gte=10&page=1");

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
        const res = await this.getResource(`/tv/${id}`, "");
        console.log(res)

        return this._transformItemId(res)
    };

    _transformItem(item) {
        return {
            poster: item.poster_path,
            title: item.title || item.name,
            id: item.id,
            type: item.type,
            date: item.release_date || item.first_air_date
        };
    };

    _transformItemId(item) {
        return {
            id: item.id,
            title: item.name,
            year: item.last_air_date,
            writer: item.writer,
            poster: item.poster,
            genres: item.genres,
            type: item.type,
            trailer: item.trailer,
            rank: item.rank,
            likesCount: item.likes_count,
            commentsCount: item.comments_count,
            link: item.link,
            content: item.content
        };
    };
};