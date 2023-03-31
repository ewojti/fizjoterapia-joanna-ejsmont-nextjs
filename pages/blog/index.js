import React, { useEffect } from "react";
import BlogHead from "@/components/BlogHead";
import Link from "next/link";
import NavigateBtn from "@/components/NavigateBtn";
import { getPosts } from "@/services";
import "aos/dist/aos.css";
import Aos from "aos";
import Head from "next/head";

const BlogList = ({ posts }) => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="app__blogList app__blogPage section__padding" id="bloglist">
      <Head>
        <title>Fizjoterapia Joanna Ejsmont - Blog</title>
      </Head>
      <NavigateBtn />
      <BlogHead />
      <div className="app__blogList-items">
        {posts.map((post) => (
          <div className="app__blogList-item" key={post.node.title}>
            <Link href={`/blog/${post.node.slug}`}>
              <h1 className="app__heading-h1-blog">{post.node.title}</h1>
              <h3 className="app__heading-h3-blog">{post.node.date}</h3>
              <p className="p__lato">{post.node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

export default BlogList;
