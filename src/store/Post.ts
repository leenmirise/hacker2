import { Item } from "../types/type";
import { makeAutoObservable, runInAction } from "mobx";
import {getByID} from "../api/PostService";

class Post{
    allPost: Item;

    constructor() {
        makeAutoObservable(this);
    }

    fetchPost(id: string) : Promise<void> {
        return getByID(id)
            .then(post => {
                runInAction(() => {
                    this.allPost = post;
                });
            });
    }
}

export default new Post()