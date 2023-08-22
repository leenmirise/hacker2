import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PostsPage from "../pages/PostsPage";
import PostPage from "../pages/PostPage";

const AppRouter = () => {

    function NotFoundPage() {
        return (
            <>
                <Navigate to="/posts" replace />
            </>
        );
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/posts/:id" element={<PostPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>

            </BrowserRouter>
        </div>
    );
};

export default AppRouter;