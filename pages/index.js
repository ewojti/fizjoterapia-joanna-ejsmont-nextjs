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
          content="Witaj w Gabinet Fizjoterapii Joanna Ejsmont, prowadzonym przez doświadczoną fizjoterapeutkę. Specjalizuję się w usługach fizjoterapii pacjentów neurologicznych, kobiet w ciąży oraz dzieci. Znajdziesz u mnie indywidualne podejście do każdego pacjenta oraz skuteczną rehabilitację."
        />
        <meta
          name="keywords"
          content="Fizjoterapia, Rehabilitacja, Sokółka, Joanna Ejsmont"
        ></meta>
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
