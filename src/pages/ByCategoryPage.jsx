import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogList from "../components/BlogList";
import Loader from "../components/Loader";
import Layout from "../layout/Layout";
import { postByCategoryId } from "../utils/posts";

export default function ByCategoryPage() {
  const { categoryId } = useParams();
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    (async () => {
      setBlogs((prevData) => null);
      setBlogs(await postByCategoryId(categoryId));
    })();
  }, [categoryId]);
  return (
    <Layout>{blogs === null ? <Loader /> : <BlogList blogs={blogs} />}</Layout>
  );
}
