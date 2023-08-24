import Navbar from "../components/Navbar";
import CardOfPost from "../components/CardOfPost";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Posts from "../store/Posts";

const PostsPage = observer(() => {

    useEffect(() => {
        Posts.fetchPosts();
        const interval = setInterval(() => {
            Posts.fetchPosts();
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Navbar/>
            {Posts.isLoading === false ? (
                Posts.allPosts.map((post, index) =>
                    <CardOfPost
                        title={post.title}
                        points={post.points}
                        user={post.user}
                        time={post.time}
                        index={index}
                        id={post.id}
                        key = {post.id}
                    />
                )
            ):(
                <p>Loading...</p>
            )}
        </div>
    );
});

export default PostsPage;