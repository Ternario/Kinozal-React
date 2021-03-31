export default class MoviesData {

    async getResource() {
        const url = "https://raw.githubusercontent.com/Ternario/Kinozal-React/master/src/data.json";
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error (`Could not Fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    };

    getAll = async () => {
        const res = await this.getResource();
        return res.map(this._transformMovies);
    };

    getMovies = async () => {
        const res = await this.getResource();
        const serial = res.filter((item) => {
            return item.type === "Movie";
        });

        return serial.map(this._transformMovies);
    };

    getSerials = async () => {
        const res = await this.getResource();
        const serial = res.filter((item) => {
            return item.type === "Serial";
        });

        return serial.map(this._transformMovies);
    };

    getMovieById = async (id) => {
        const res = await this.getResource();
        const movieId = res.filter((item) => {
            return item.id === id;
        });

        return movieId.map(this._transformMovieId);
    };

    _transformMovies(item) {
        return {
            poster: item.poster,
            title: item.title,
            id: item.id,
            type: item.type
        };
    };

    _transformMovieId(item) {
        return {
            id: item.id,
            poster: item.poster,
            title: item.title,
            year: item.year,
            rank: item.rank,
            director: item.director,
            writer: item.writer,
            genres: item.genres
        };
    };
};