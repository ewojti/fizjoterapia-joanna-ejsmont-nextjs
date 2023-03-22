import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import images from "@/constants/images";

const BlogHead = () => {
  return (
    <div className="app__blogHead">
      <div className="app__bloglist-title">
        <div className="app__bloglist-title-logo">
          <Link href="/">
            <Image src={images.logo_footer} alt=""></Image>
          </Link>
        </div>
        <hr className="horizontal-line"></hr>
        <Link href='/blog-list'>
          <h1 className="app__heading-h1">BLOG</h1>
        </Link>
      </div>
      <div className="app__blogList-author">
        <div className="app__blogList-author-img">
          <Image src={images.blog} alt="" />
        </div>
        <div className="app__blogList-author-name">
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
}

export default BlogHead