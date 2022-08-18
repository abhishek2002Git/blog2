import React from "react";
import "./maincontent.css";

const MainContent = () => {
  return (
    <div className="w-[88%] text-[#111111] text-[15.3px] leading-8">
      <h2 className="head-h2">How to use Copyscape?</h2>
      <p className="text-p">Copyscape offers a free and premium version.</p>
      <p className="text-p">
        To start with you can try their free version and if required, you can
        always try the premium version of Copyscape.
      </p>
      <p className="text-p">
        Go to the Copyscape homepage and type your blog address and hit the GO
        button.
      </p>

      <div className="image">
        <img
          src="https://www.shoutmeloud.com/wp-content/uploads/2008/11/Copyscape.png"
          alt="image"
        />
        <p className="caption">
          This is caption, giving information about the above image
        </p>
      </div>

      <p className="text-p">
        Once you have found out which all websites/blogs are copying content
        from your site, the next task is to report it to Webhosting, blogging
        companies like (Medium, WordPress, Blogger) & also get it removed from
        Google search.
      </p>
      <p className="text-p">
        Usually, I don’t really pay much attention to anything else apart from
        getting it removed from the search engine.{" "}
      </p>
      <p className="text">
        Below mentioned guide will help you to get the post removed from the
        search engine.
      </p>
      <h3 className="head-h3">This is sub heading</h3>
      <p className="text-p">
        A lot of new Copyscape alternatives has come up in recent time. The most
        popular one is Grammarly which is available as web app, downloadable
        app, and as a chrome app. Get Grammarly now Do let us know if you are
        using Copyscape or any alternative tool to Copyscape to find people
        copying your blog content?
      </p>
    </div>
  );
};

export default MainContent;
