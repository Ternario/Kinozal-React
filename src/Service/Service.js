export default class MoviesData {
    constructor() {
        this._apiBase = "https://api.themoviedb.org/3";
        this._apiKey = "?api_key=f78065abe3763cb2694006821dbaca97";
    }

    async getResource(url, sortBy) {

        const path = sortBy ? `${this._apiBase}${url}${this._apiKey}${sortBy}` : `${this._apiBase}${url}${this._apiKey}`

        const res = await fetch(path);

        if (!res.ok) {
            throw new Error(`Could not Fetch ${this._apiBase}${url}${this._apiKey}${sortBy}, status ${res.status}`);
        };

        return await res.json();
    };

    getNewMovies = async (type) => {
        const res = await this.getResource(`/${type}/upcoming`, "&page=1");

        const dataArray = res.results.map((item) => {

            const newDate = item.release_date.split("", 4).join("");

            return newDate >= 2021 ? this._transformItem(item) : null;
        });

        return dataArray.filter((item) => {
            return item !== null;
        });
    };

    getTopMovies = async (type) => {
        const res = await this.getResource(`/${type}/top_rated`, "&page=1");

        return res.results.map(this._transformItem);
    };

    getItems = async (type) => {
        const res = await this.getResource(`/discover/${type}`, "&page=1");

        return res.results.map(this._transformItem);
    };

    getItemById = async (type, id) => {
        const res = await this.getResource(`/${type}/${id}`);

        return this._transformItemId(res);
    };

    getItemMovieById = async (type, id) => {
        const res = await this.getResource(`/${type}/${id}/videos`);
        // if type === tv ?

        return res.results.map(this._transformVideoItemId);
    };
    
    _transformItem(item) {
        return {
            poster: item.poster_path || item.backdrop_path,
            title: item.title || item.name,
            id: item.id,
            rating: item.vote_average || "await",
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
            likesCount: item.vote_count,
            overview: item.overview,
            status: item.status,
            runtime: item.runtime
        };
    };

    _transformVideoItemId(item) {
        return {
            id: item.id,
            trailer: item.key,
            name: item.name
        };
    };
};