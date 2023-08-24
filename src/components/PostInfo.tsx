import { PostInfoProps } from "../types/type";
import { FC } from "react";
import { Card, CardText } from "../styles/style";
import {formatTime} from "../utils/utils";

const PostInfo: FC<PostInfoProps> = ({url, time, user, comments_count, title}) => {

    const formattedTime = formatTime(time);

    return (
        <Card>
            <h4>{title}</h4>
            <a href={url}>{url}</a>
            { user? (<CardText>By user: {user}</CardText>):(<CardText>By user: -</CardText>) }
            <CardText>Date of publish: {formattedTime}</CardText>
            <CardText>Comments count: {comments_count}</CardText>
        </Card>
    );
};

export default PostInfo;