import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Abilities from "@/components/Abilities";
import Separator from "@/components/Separator";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import "@/styles/variable.module.scss";
import { getPosts } from "@/services";

export default function Home({posts}) {
  return (
    <>
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
