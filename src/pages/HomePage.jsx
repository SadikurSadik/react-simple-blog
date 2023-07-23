import React, { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import Loader from "../components/Loader";
import Layout from "../layout/Layout";
import { latestPosts } from "../utils/posts";

export default function HomePage() {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    (async () => {
      setBlogs(await latestPosts());
    })();
  }, []);
  return (
    <Layout>{blogs === null ? <Loader /> : <BlogList blogs={blogs} />}</Layout>
  );
}
