import axios from "axios";

export async function getAll(page: number) {
    const response = await axios.get(`https://api.hnpwa.com/v0/news/${page}.json`);
    return response.data;
}

export async function getByID(id: string) {
        const response = await axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);
        return response.data;
    }
