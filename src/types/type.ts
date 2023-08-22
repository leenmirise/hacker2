export interface CardOfPostProps{
    title: string;
    points: number;
    user: string;
    time: number;
    index: number;
    id: number;
}
export interface DataOfFetchProps{
    comments_count: number;
    domain: string;
    id: number;
    points: number;
    time: number;
    time_ago: string;
    title: string;
    type: string;
    url: string;
    user:string;
}

export interface Item{
    id: number;
    title: string;
    points: number | null;
    user: string | null;
    time: number;
    time_ago: string;
    content: string;
    deleted?: boolean;
    dead?: boolean;
    type: string;
    url?: string;
    domain?: string;
    comments: Item[];
    level: number;
    comments_count: number;
}

export interface PostInfoProps{
    url?: string;
    title: string;
    time: number;
    user: string | null;
    comments_count: number;
}

export interface PostCommentsProps{
    user: string | null;
    content: string;
    comments: Item[];
    id: number;
    level: number;
}