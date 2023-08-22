import axios from "axios";

export default class PostService{
    static async getAll(page: number) {
        const response = await axios.get(`https://api.hnpwa.com/v0/news/${page}.json`);
        return response.data;
    }

    static async getByID(id: string) {
        const response = await axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);
        return response.data;
    }
}