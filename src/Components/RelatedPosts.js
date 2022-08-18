import React from 'react'
import "./relatedposts.css";

const RelatedPosts = () => {
  return (
    <div className='related-posts-section w-[100%] my-7'>
        <h3 className="relates-post-title text-[25px] text-center font-[600]">Related Posts</h3>
        <div className="related-posts">
            <div className="post-box-1 flex justify-around">
                <div className="post">
                    <img src="https://www.shoutmeloud.com/wp-content/uploads/2020/12/Earn-Money-Blogging-431x230.jpg" alt="" className="post-img" />
                    <p className="post-title">How To Make Money Blogging (The Practical Guide for 2022)</p>
                </div>
                <div className="post">
                    <img src="https://www.shoutmeloud.com/wp-content/uploads/2022/06/Blog_niche_Brain_2-431x230.gif" alt="" className="post-img" />
                    <p className="post-title">How To Pick A Profitable Blog Niche (Correct way in 2022)</p>
                </div>
            </div>
            <div className="post-box-1 flex justify-around">
                <div className="post">
                    <img src="https://www.shoutmeloud.com/wp-content/uploads/2020/05/blog-431x230.jpg" alt="" className="post-img" />
                    <p className="post-title">How To Start A Blog in 2022 [Blogging Guide For Beginners]</p>
                </div>
                <div className="post">
                    <img src="https://www.shoutmeloud.com/wp-content/uploads/2010/07/Increase-Organic-traffic-431x230.jpg" alt="" className="post-img" />
                    <p className="post-title">7 Actionable Steps To Increase Organic Traffic To Your Blog (Expert picks)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RelatedPosts