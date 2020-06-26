export default class MoviesData {

    async getResource(url) {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error (`Could not Fetch ${url}, status ${res.status}`)
        }

        return await res.json()
    };

    async getAllMovies() {
        const res = await this.getResource("https://raw.githubusercontent.com/Ternario/Kinozal-React/master/src/data.json");
        return res.map(this._transformMovies)
    }

    _transformMovies(movie) {
        return {
            poster: movie.poster,
            title: movie.title
        }
    }
}