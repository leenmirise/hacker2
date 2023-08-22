import { Item } from "../types/type";
import { makeAutoObservable, runInAction } from "mobx";
import PostService from "../API/PostService";

class Post{
    allPost: Item;
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    fetchPost(id: string) : Promise<void> {
        runInAction(()=>{
            this.isLoading = true;
        })
        return PostService.getByID(id)
            .then(post => {
                runInAction(() => {
                    this.allPost = post;
                    this.isLoading = false;
                });
            });
    }
}

export default new Post()