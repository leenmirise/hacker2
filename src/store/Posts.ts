import { makeAutoObservable, runInAction } from "mobx";
import { DataOfFetchProps } from "../types/type";
import {getAll} from "../api/PostService";

class Posts{
    allPosts: DataOfFetchProps[] = [];
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchPosts() : Promise<void> {
        this.allPosts = [];
        runInAction(()=>{
            this.isLoading = true;
        })
        for(let i = 1; i <=4; i++){
            let posts = await getAll(i);
            runInAction(()=>{
                this.allPosts.push(...posts);
            })
        }
        runInAction(() => {
            this.allPosts.sort((a: DataOfFetchProps, b: DataOfFetchProps) => b.time - a.time);
            this.allPosts = this.allPosts.slice(0, 100);
        })
        runInAction(()=>{
            this.isLoading = false;
        })
    }
}

export default new Posts()