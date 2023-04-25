import React from "react";
import Image from "next/image";

const getContentFragment = (index, text, obj, type) => {
  let modifiedText = text;

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }

    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }

    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }
  }

  switch (type) {
    case "heading-one":
      return (
        <h1 key={index} className="app__heading-h1-blog">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h1>
      );
    case "heading-two":
      return (
        <h2 key={index} className="app__heading-h2-blog">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="p__lato blog_text">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </p>
      );
    case "heading-three":
      return (
        <h3 key={index} className="app__heading-h3-blog">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h3>
      );
    case "heading-four":
      return (
        <h4 key={index} className="app__heading-h4-blog">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h4>
      );
    case "image":
      return (
        <div className="app__blogPage-post-img" key={index}>
          <Image
            loader={() => obj.src}
            src={obj.src}
            alt={obj.title}
            sizes="(min-width: 300px) 100vw,
              33vw"
            fill
          />
        </div>
      );
    default:
      return modifiedText;
  }
};

export default function Content({ post }) {
  return (
    <div>
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemindex) =>
          getContentFragment(itemindex, item.text, item)
        );

        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
    </div>
  );
}
