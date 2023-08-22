import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import PostInfo from "../components/PostInfo";
import PostComments from "../components/PostComments";
import Post from "../store/Post";
import { Line } from "../styles/style";

const PostPage = () => {
    const params = useParams();

    const fetchData = async () => {
        await Post.fetchPost(params.id);
        console.log(Post.allPost)
    }

    useEffect(() => {

        fetchData();
        console.log(Post.allPost)
        const interval = setInterval(() => {
            fetchData();
        }, 60000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <Navbar/>
            <div>
                {!Post.isLoading ? (
                    Post.allPost && Object.keys(Post.allPost).length ? (
                        <PostInfo
                            url={Post.allPost.url}
                            time={Post.allPost.time}
                            user={Post.allPost.user}
                            comments_count={Post.allPost.comments_count}
                            title={Post.allPost.title}
                        />
                    ) : 'No post found'
                ) : 'Loading...'}
            </div>
            <Line/>
            {Post.allPost && Object.keys(Post.allPost).length? (Post.allPost.comments.map(comment=>(
                <PostComments
                    key={comment.id}
                    content={comment.content}
                    user={comment.user}
                    comments={comment.comments}
                    id = {comment.id}
                    level={0}
                />
            ))):
                ('No post found')}
        </div>
    );
};

export default PostPage;