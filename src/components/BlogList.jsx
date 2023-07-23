import React from "react";
import { Link } from "react-router-dom";

export default function BlogList(props) {
  return (
    <div>
      <div className="container mx-auto my-16 p-9">
        <div className="gitid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.blogs.length &&
            props.blogs.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/blog-detail/${item.id}`}
                  className="card w-100 blog"
                >
                  <figure>
                    <img key={index} src={item.img} alt="car!" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.short}</p>
                  </div>
                </Link>
              );
            })}
          {!props.blogs && <div></div>}
        </div>
      </div>
    </div>
  );
}
