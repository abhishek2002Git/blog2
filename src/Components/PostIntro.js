import React from "react";
import "./postintro.css";

const PostIntro = () => {
  return (
    <div className="w-[88%] leading-8 mt-5 text-black text-[15.3px]">
      <p className="text-p">
        WordPress categories and tags help you to structure your blog. They also
        play a vital role in the SEO of your website. Whenever I talk about the
        SEO of a WordPress site, I always follow one simple rule:
      </p>

      <ul className="list">
        <li>
          Keep low-quality pages out of the search index Keep low-quality pages
          out of the search index Keep low-quality pages out of the search
          index.
        </li>
        <li>Keep low-quality pages out of the search index.</li>
        <li>Keep low-quality pages out of the search index.</li>
      </ul>

      <p className="text-p">
        Today, I will be talking about WordPress categories and SEO.
      </p>
      <p className="text-p">I’ll also answer the question of:</p>
      <ul className="list">
        <li>Should we keep categories as no-index or do-index?</li>
      </ul>
      <p className="text-p">
        WordPress categories and tags are the two most important aspects from
        the user experience point of view.
      </p>
      <p className="text-p">
        For example, most of the related posts plugins use categories and tags
        to show related posts. If your categories are not well structured,
        related posts will show irrelevant articles, and it will have a negative
        effect on the bounce rate of your WordPress blog.
      </p>
    </div>
  );
};

export default PostIntro;
