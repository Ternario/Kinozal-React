export default class MoviesData {
    constructor() {
        this._apiBase = "https://api.themoviedb.org/3";
        this._apiKey = "?api_key=f78065abe3763cb2694006821dbaca97";
    }

    async getDiscoverItems(url, page, releaseYear, sortBy, genres) {

        const path = `${this._apiBase}${url}${this._apiKey}&page=${page}${releaseYear}&sort_by=${sortBy}${genres}`;

        const res = await fetch(path);

        if (!res.ok) {
            throw new Error(`Could not Fetch ${path}, status ${res.status}`);
        };

        return await res.json();
    };

    async getItems(url) {
        const path = `${this._apiBase}${url}${this._apiKey}`
        const res = await fetch(path);

        if (!res.ok) {
            throw new Error(`Could not Fetch ${path}, status ${res.status}`);
        };

        return await res.json();
    }

    getGenresList = async (type) => {
        const res = await this.getItems(`/genre/${type}/list`);

        return res.genres.map(this._transformGenres);
    }

    getNewMovies = async () => {
        const res = await this.getItems("/movie/upcoming");

        const dataArray = res.results.map((item) => {

            const newDate = item.release_date.split("", 4).join("");

            return newDate >= 2021 ? this._transformItem(item) : null;
        });

        return dataArray.filter((item) => {
            return item !== null;
        });
    };

    // getTopMovies = async () => {
    //     const res = await this.getItems("/movie/top_rated");

    //     return res.results.map(this._transformItem);
    // };

    discoverMovie = async (page, releaseYear, sortBy, genre) => {

        const res = await this.getDiscoverItems(`/discover/movie`, page,`&primary_release_year=${releaseYear}`, sortBy, genre);

        return res.results.map(this._transformItem);
    };

    discoverTv = async (page, releaseYear, sortBy, genre) => {

        const res = await this.getDiscoverItems(`/discover/tv`, page,`&first_air_date_year=${releaseYear}`, sortBy, genre);

        return res.results.map(this._transformItem);
    };

    getItemById = async (type, id) => {
        const res = await this.getItems(`/${type}/${id}`);

        return this._transformItemId(res);
    };

    getItemMovieById = async (type, id) => {
        const res = await this.getItems(`/${type}/${id}/videos`);
        // if type === tv ?

        return res.results.map(this._transformVideoItemId);
    };

    _transformGenres(item) {
        return {
            id: item.id,
            name: item.name,
            checked: false
        };
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