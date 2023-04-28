import React from "react";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";

const BlogHead = () => {
  return (
    <div className="app__blogHead">
      <div className="app__blogHead-title">
        <div
          className="app__blogHead-title-logo"
        >
          <Link href="/">
            <Image
              src={images.logo_footer}
              alt="Logo fizjoterapia Joanna Ejsmont"
            ></Image>
          </Link>
        </div>
        <hr className="horizontal-line"></hr>
        <Link href="/blog">
          <h2 className="app__heading-h1">BLOG</h2>
        </Link>
      </div>
      <div className="app__blogHead-author">
        <div className="app__blogHead-author-img">
          <Image src={images.blog} alt="" />
        </div>
        <div className="app__blogHead-author-name">
          <h2>Joanna Ejsmont</h2>
          <p>
            Magister Fizjoterapii
            <br />
            Uniwersytet Medyczny w Białymstoku 2018
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHead;
