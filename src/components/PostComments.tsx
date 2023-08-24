import { PostCommentsProps } from "../types/type";
import { FC, useState } from "react";
import { Button, Comments } from "../styles/style";

const PostComments: FC<PostCommentsProps> = ({ user, content, comments, level  }) => {

    const [show, setShow] = useState(false);

    const showComments = () => {
        setShow((prevState) => !prevState)
    }

    return (
        <Comments style={{ paddingLeft: level * 5 }}>
            <h4>{user}</h4>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {level === 1 && comments.length ?
                <Button onClick={showComments}>Show more</Button>
            : null}
            {show || level > 1 ?
                (comments ? (
                    comments.map((comment) => (
                        <PostComments
                            key={comment.id}
                            content={comment.content}
                            user={comment.user}
                            comments={comment.comments}
                            level={level + 1}
                        />
                    ))
                ) : null)
                : null}
        </Comments>
    );
};

export default PostComments;