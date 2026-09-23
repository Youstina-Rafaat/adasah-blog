import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/NotFound/NotFound";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    let { data } = await axios.get(`/posts.json`);
    setPosts(data.posts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home posts={posts} /> },
        { path: "home", element: <Home posts={posts} /> },
        { path: "blog", element: <Blog posts={posts} /> },
        { path: "blog/page/:pageNumber", element: <Blog posts={posts} /> },
        { path: "blog/category/:categoryName", element: <Blog posts={posts} /> },
        { path: "blog/:slug", element: <BlogDetails posts={posts} /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;