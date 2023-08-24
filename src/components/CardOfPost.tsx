import { Card, CardText } from '../styles/style'
import { FC } from "react";
import { CardOfPostProps } from "../types/type";
import { useNavigate } from "react-router-dom";
import {formatTime} from "../utils/utils";

const CardOfPost:FC<CardOfPostProps> = ({title, points, user, time, index, id}) => {

    let navigate = useNavigate();
    const formattedTime = formatTime(time);

    function handleClick() {
        navigate(`/posts/${id}`);
    }

    return (
        <Card onClick={handleClick}>
            <h4>{index + 1}. {title}</h4>
            { points? (<CardText>Points: {points}</CardText>) : (<CardText>Points: -</CardText>) }
            { user? (<CardText>By user: {user}</CardText>) : (<CardText>By user: -</CardText>) }
            <CardText>Date of publish: {formattedTime}</CardText>
        </Card>
    );
};

export default CardOfPost;