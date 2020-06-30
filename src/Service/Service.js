export default class MoviesData {

    async getResource() {
        const url = "https://raw.githubusercontent.com/Ternario/Kinozal-React/master/src/data.json";
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error (`Could not Fetch ${url}, status ${res.status}`)
        }

        return await res.json()
    };

    async getAll() {
        const res = await this.getResource();
        return res.map(this._transformMovies)
    }

    async getMovies() {
        const res = await this.getResource();
        const serial = res.filter((item) => {
            return item.type === "Movie"
        })

        return serial.map(this._transformMovies)
    }

    async getSerials() {
        const res = await this.getResource();
        const serial = res.filter((item) => {
            return item.type === "Serial"
        })

        return serial.map(this._transformMovies)
    }

    _transformMovies(item) {
        return {
            poster: item.poster,
            title: item.title
        }
    }
}