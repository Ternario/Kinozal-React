export default class MoviesData {

    async getResource(path) {
        const url = "https://api.themoviedb.org/3/discover";
        const apiKey = "?api_key=f78065abe3763cb2694006821dbaca97"

        const res = await fetch(`${url}${path}${apiKey}`);

        if (!res.ok) {
            throw new Error(`Could not Fetch ${url}, status ${res.status}`);
        }
        
        return await res.json();
    };

    

    getData = async (url) => {
        const res = await this.getResource(url);
        return res.results.map(this._transformItem);
    };

    // getMovies = async () => {
    //     const res = await this.getResource();
    //     const serial = res.filter((item) => {
    //         return item.type === "Movie";
    //     });

    //     return serial.map(this._transformItem);
    // };

    // getSerials = async () => {
    //     const res = await this.getResource();
    //     const serial = res.filter((item) => {
    //         return item.type === "Serial";
    //     });

    //     return serial.map(this._transformItem);
    // };

    // getItemByName = async (name) => {
    //     const res = await this.getResource();
    //     const item = res.filter((item) => {
    //         return item.title.toLowerCase().indexOf(name.toLowerCase()) > -1;
    //     });

    //     return item.map(this._transformItem)
    // }

    // getItemById = async (id) => {
    //     const res = await this.getResource();
    //     const itemId = res.filter((item) => {
    //         return item.id === id;
    //     });

    //     return itemId.map(this._transformItemId);
    // };

    _transformItem(item) {
        return {
            poster: item.poster_path,
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