import React from "react";
import Link from "next/link";
import { nanoid } from "nanoid";

const BlogRecent = ({ posts }) => {
  return (
    <div id="blog" className="app__blog section__padding">
      <div className="app__blog-title">
        <h1 className="app__heading-h1">Mój Blog</h1>
        <h3 className="app__blog-title-last-posts app__heading-h3">
          Ostatnio dodane posty...
        </h3>
      </div>
      <div className="app__blog-posts">
        {posts.map(post => (
          <div className="app__blog-post" key={nanoid()}>
            <div className="app__blog-post-head">
              <span className="overlay"></span>
              <div className="app__blog-post-date">
                <p>{post.node.date}</p>
              </div>
              <div className="app__blog-post-title">
                <h3 className="app__heading-h3">{post.node.title}</h3>
              </div>
            </div>
            <div className="app__blog-post-text">
              <p>{post.node.excerpt}</p>
              <Link
                href={`/blog/${post.node.slug}`}
                className="app__blog-post-btn"
              >
                Czytaj cały post
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link href="/blog" className="app__blog-button-link">
        <button className="app__blog-button p__cormorant">
          Odwiedź blog
        </button>
      </Link>
    </div>
  );
};

export default BlogRecent;

