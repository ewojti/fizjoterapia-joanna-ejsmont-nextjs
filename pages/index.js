import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Abilities from "@/components/Abilities";
import Separator from "@/components/Separator";
import Blog from "@/components/BlogRecent";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import "@/styles/variable.module.scss";
import { getPosts } from "@/services";
import Head from "next/head";

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Fizjoterapia Joanna Ejsmont - Sokółka</title>
      </Head>
      <Navbar />
      <Header />
      <Abilities />
      <AboutMe />
      <Separator />
      <Blog posts={posts} />
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
