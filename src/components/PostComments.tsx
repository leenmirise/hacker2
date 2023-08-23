import { PostCommentsProps } from "../types/type";
import { FC, useState } from "react";
import { Button, Comm } from "../styles/style";

const PostComments: FC<PostCommentsProps> = ({ user, content, comments, id, level  }) => {

    const [show, setShow] = useState(false);

    const showComments = () => {
        setShow(!show);
    }

    return (
        <Comm style={{ paddingLeft: level * 5 }}>
            <h4>{user}</h4>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {level === 1 && comments.length !== 0 ?
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
                            id={comment.id}
                            level={level + 1}
                        />
                    ))
                ) : null)
                : null}
        </Comm>
    );
};

export default PostComments;