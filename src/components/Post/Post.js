import React from "react";
import './Post.css'
const Post = ({ post }) => {
    const { title, author, subreddit, url, media, post_hint, created_utc, num_comments} = post;
    const date = new Date(created_utc * 1000).toLocaleDateString();


    return (
        <div className="post">
            <span className="subreddit"><strong>r/{subreddit}  </strong></span>
            <span className="author">• posted by: <strong>{author}</strong> - {date}</span>
            <h2>{title}</h2>
            <p>{post.selftext}</p>
            {post_hint === "image" && <img src={url} alt={title} width='80%' />}
            {media && media.reddit_video &&
                makeVideo(media.reddit_video.fallback_url)}                
            <p className="commentsNumber">{num_comments} comments</p>
        </div>
    );
};

function makeVideo(src) {
    return (
      <video controls width="80%" >
        <source src={src}></source>
      </video>
    );
  }

export default Post;