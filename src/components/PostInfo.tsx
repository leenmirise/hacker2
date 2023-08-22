import { PostInfoProps } from "../types/type";
import { FC } from "react";
import { Card, CardP } from "../styles/style";

const PostInfo: FC<PostInfoProps> = ({url,
                                         time,
                                         user,
                                         comments_count,
                                         title}) => {

    const formattedTime = new Date(time * 1000).toLocaleString();

    return (
        <Card>
            <h4>{title}</h4>
            <a href={url}>{url}</a>
            {
                user? (<CardP>By user: {user}</CardP>):(<CardP>By user: -</CardP>)
            }
            <CardP>Date of publish: {formattedTime}</CardP>
            <CardP>Comments count: {comments_count}</CardP>
        </Card>
    );
};

export default PostInfo;