import React from "react";

export default function BlogDetail({ blog }) {
  console.log(blog);
  return (
    <div className="container mx-auto my-16 p-9">
      <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
        <div className="card w-100 glass">
          <figure>
            <img src={blog?.img} alt="Post Banner" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{blog?.title}</h2>
            <p>{blog?.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
