import React from "react";
import BlogHead from "@/components//BlogHead";
import NavigateBtn from "@/components/NavigateBtn";
import { getPosts, getPostDetails } from "@/services";
import Image from "next/image"
import Content from "@/components/Content";


const BlogPost = ({ post }) => {
  return (
    <div className="app__blogPage section__padding">
      <NavigateBtn />
      <BlogHead />
      <Image
        className="app__blogPage-post-img"
        loader={() => post.featuredImage.url}
        src={post.featuredImage.url}
        alt=""
        width={1000}
        height={400}
      />
      <h1 className="app__heading-h1-blog">{post.title}</h1>
      <h3 className="app__heading-h3-blog">{post.date}</h3>
      <h2 className="app__heading-h2-blog">{post.excerpt}</h2>
      {/* <p>{post.content}</p> */}
    </div>
  );
};

export default BlogPost;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)
  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug }}) => ({ params: {slug}})),
    fallback: false,
  };
}