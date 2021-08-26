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

        const path = `${this._apiBase}${url}${this._apiKey}`;

        const res = await fetch(path);

        if (!res.ok) {
            throw new Error(`Could not Fetch ${path}, status ${res.status}`);
        };

        return await res.json();
    };

    async searchItem(name, page) {

        const path = `${this._apiBase}/search/multi${this._apiKey}&page=${page}&query=${name}&sort_by=popularity.desc`

        const res = await fetch(path);

        if (!res.ok) {
            throw new Error(`Could not Fetch ${path}, status ${res.status}`);
        };

        return await res.json();
    };

    getGenresList = async (type) => {
        const res = await this.getItems(`/genre/${type}/list`);

        return res.genres.map(this._transformGenres);
    };

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

    discoverMovie = async (page, releaseYear, sortBy, genre) => {

        const res = await this.getDiscoverItems(`/discover/movie`, page, `&primary_release_year=${releaseYear}`, sortBy, genre);

        const itemResults = res.results.map(this._transformItem);

        return this._transformItemResults(res, itemResults);
    };

    discoverTv = async (page, releaseYear, sortBy, genre) => {

        const res = await this.getDiscoverItems(`/discover/tv`, page, `&first_air_date_year=${releaseYear}`, sortBy, genre);

        const itemResults = res.results.map(this._transformItem);

        return this._transformItemResults(res, itemResults);
    };

    getItemById = async (type, id) => {
        const res = await this.getItems(`/${type}/${id}`);

        return this._transformItemResultsId(res);
    };

    getPersonById = async (id) => {
        const res = await this.getItems(`/person/${id}`);
        const resList = await this.getItems(`/person/${id}/combined_credits`);

        const castList = resList.cast.map(this._transformItem);
        const crewList = resList.crew.map(this._transformItem);

        const list = {
            castList,
            crewList
        };

        return this._transformPersonId(res, list);
    };

    getItemMovieById = async (type, id) => {
        const res = await this.getItems(`/${type}/${id}/videos`);

        return res.results.map(this._transformVideoItemId);
    };

    searchMultiple = async (name, page) => {
        const res = await this.searchItem(name, page);

        const itemResults = res.results.map(this._transformI);

        return this._transformItemResults(res, itemResults);
    };

    _transformGenres(item) {
        return {
            id: item.id,
            name: item.name,
            checked: false
        };
    };

    _transformItemResults(item, itemResults) {
        return {
            totalPages: item.total_pages,
            totalResults: item.total_results,
            results: itemResults
        };
    };

    _transformItem(item) {
        return {
            poster: item.poster_path || item.backdrop_path,
            title: item.title || item.name,
            id: item.id,
            itemsType: item.media_type,
            rating: item.vote_average,
            date: item.release_date || item.first_air_date
        };
    };

    _transformItemResultsId(item) {
        return {
            title: item.title || item.name,
            date: item.release_date || item.last_air_date,
            poster: item.poster_path || item.backdrop_path,
            tagline: item.tagline,
            country: item.origin_country,
            createdBy: item.created_by,
            genres: item.genres,
            rating: item.vote_average,
            likesCount: item.vote_count,
            overview: item.overview,
            status: item.status,
            numberOfSeasons: item.number_of_seasons,
            numberOfSpisodes: item.number_of_episodes,
            runtime: item.runtime || item.episode_run_time
        };
    };

    _transformPersonId(item, itemVideo) {
        return {
            itemPerson: {
                id: item.id,
                profilePath: item.profile_path,
                name: item.name,
                birthday: item.birthday,
                deathday: item.deathday,
                placeOfBirth: item.place_of_birth,
                popularity: item.popularity,
                biography: item.biography,
                imdbId: item.imdb_id,
            },
            itemVideo: itemVideo
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