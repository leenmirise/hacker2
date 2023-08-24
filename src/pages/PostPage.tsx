import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import PostInfo from "../components/PostInfo";
import PostComments from "../components/PostComments";
import Post from "../store/Post";
import { Line } from "../styles/style";

const PostPage = () => {
    const [post, setPost] = useState(Post.allPost);
    const params = useParams();

    const fetchData = async () => {
        await Post.fetchPost(params.id);
        setPost(Post.allPost);
    };

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 60000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <Navbar/>
            <div>
                {Post.allPost ? (
                    <PostInfo
                        url={Post.allPost.url}
                        time={Post.allPost.time}
                        user={Post.allPost.user}
                        comments_count={Post.allPost.comments_count}
                        title={Post.allPost.title}
                    />
                ) : 'No post found'}
            </div>
            <Line/>
            {Post.allPost && Object.keys(Post.allPost).length?
                (Post.allPost.comments.map(comment=>(
                    <PostComments
                        key={comment.id}
                        content={comment.content}
                        user={comment.user}
                        comments={comment.comments}
                        level={1}
                    />
            ))):
                ('No comments found')}
        </div>
    );
};

export default PostPage;