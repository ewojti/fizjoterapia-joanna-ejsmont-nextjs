import React, { useEffect } from "react";
import Link from "next/link";
import { nanoid } from "nanoid";

const BlogRecent = ({ posts }) => {
    const lastThreePosts = posts.slice(0, 3)
  return (
    <div id="blog" className="app__blogRecent section__padding">
      <div className="app__blogRecent-title">
        <h2 className="app__heading-h1">Mój Blog</h2>
        <h3 className="app__blogRecent-title-last-posts app__heading-h3">
          Ostatnio dodane posty...
        </h3>
      </div>
      <div className="app__border-section-grey"></div>
      <div className="app__blogRecent-posts">
        {lastThreePosts.map((post) => (
          <div className="app__blogRecent-post" key={nanoid()}>
            <div className="app__blogRecent-post-head">
              <span className="overlay"></span>
              <div className="app__blogRecent-post-date">
                <p>{post.node.date}</p>
              </div>
              <div className="app__blogRecent-post-title">
                <h3 className="app__heading-h3">{post.node.title}</h3>
              </div>
            </div>
            <div className="app__blogRecent-post-text">
              <p>{post.node.excerpt}</p>
              <Link
                href={`/blog/${post.node.slug}`}
                className="app__blogRecent-post-btn"
              >
                Czytaj cały post
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link href="/blog" className="app__blogRecent-button-link">
        <button className="custom__button">Odwiedź blog</button>
      </Link>
    </div>
  );
};

export default BlogRecent;

