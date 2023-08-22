import { Card, CardP } from '../styles/style'
import { FC } from "react";
import { CardOfPostProps } from "../types/type";
import { useNavigate } from "react-router-dom";

const CardOfPost:FC<CardOfPostProps> = ({title, points, user, time, index, id}) => {

    let navigate = useNavigate();
    const formattedTime = new Date(time * 1000).toLocaleString();

    function handleClick() {
        navigate(`/posts/${id}`);
    }

    return (
        <Card onClick={handleClick}>
            <h4>{index + 1}. {title}</h4>
            {
                points? (<CardP>Points: {points}</CardP>) : (<CardP>Points: -</CardP>)
            }
            {
                user? (<CardP>By user: {user}</CardP>) : (<CardP>By user: -</CardP>)
            }
            <CardP>Date of publish: {formattedTime}</CardP>
        </Card>
    );
};

export default CardOfPost;