import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogDetail from "../components/BlogDetail";
import Loader from "../components/Loader";
import Layout from "../layout/Layout";
import { postDetail } from "../utils/posts";

export default function DetailPage() {
  const { postId } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    (async () => {
      setBlog(await postDetail(postId));
    })();
  }, [postId]);
  return (
    <Layout>
      {blog === null ? <Loader /> : <BlogDetail blog={blog?.postDetails} />}
    </Layout>
  );
}
