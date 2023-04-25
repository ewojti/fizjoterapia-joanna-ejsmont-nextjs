import dynamic from "next/dynamic";
import Head from "next/head";
const Navbar = dynamic(() => import("@/components/Navbar"));
const Header = dynamic(() => import("@/components/Header"));
const AboutMe = dynamic(() => import("@/components/AboutMe"))
const Abilities = dynamic(() => import("@/components/Abilities"));
const Separator = dynamic(() => import("@/components/Separator"));
const BlogRecent = dynamic(() => import("@/components/BlogRecent"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
import "@/styles/variable.module.scss";
import { getPosts } from "@/services";

export default function Home({ posts }) {

  return (
    <div className="app__home">
      <Head>
        <title>Fizjoterapia Joanna Ejsmont - Sokółka</title>
        <meta
          name="description"
          content="Gabinet fizjoterapi w Sokółce prowadzony przez mgr.Joanna Ejsmont. Fizjoterapia ortopedyczna, neurologiczna, kobiet w trakcie i po ciąży oraz dzieci."
        />
        <meta
          name="keywords"
          content="Fizjoterapia, Rehabilitacja, terapia manualna, fizjoterapia w ciąży, Sokółka, Joanna Ejsmont"
        ></meta>
        <meta
          property="og:image"
          content="https://drive.google.com/file/d/1Ua6x5bo2LtG5q9Ase2ySgjMyK6eS734x/view?usp=sharing"
        />
        <meta name="author" content="Joanna Ejsmont" />
      </Head>
      <Navbar />
      <Header />
      <Abilities />
      <AboutMe />
      <Separator />
      <BlogRecent posts={posts} />
      <Contact />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
