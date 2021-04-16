export default class MoviesData {

    async getResource() {
        const url = "https://raw.githubusercontent.com/Ternario/Kinozal-React/master/src/data.json";
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not Fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    };

    getAll = async () => {
        const res = await this.getResource();
        return res.map(this._transformItem);
    };

    getMovies = async () => {
        const res = await this.getResource();
        const serial = res.filter((item) => {
            return item.type === "Movie";
        });

        return serial.map(this._transformItem);
    };

    getSerials = async () => {
        const res = await this.getResource();
        const serial = res.filter((item) => {
            return item.type === "Serial";
        });

        return serial.map(this._transformItem);
    };

    getItemByName = async (name) => {
        const res = await this.getResource();
        const item = res.filter((item) => {
            return item.title.toLowerCase().indexOf(name.toLowerCase()) > -1;
        });

        return item.map(this._transformItem)
    }

    getItemById = async (id) => {
        const res = await this.getResource();
        const itemId = res.filter((item) => {
            return item.id === id;
        });

        return itemId.map(this._transformItemId);
    };

    _transformItem(item) {
        return {
            poster: item.poster,
            title: item.title,
            id: item.id,
            type: item.type
        };
    };

    _transformItemId(item) {
        return {
            id: item.id,
            title: item.title,
            year: item.year,
            director: item.director,
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