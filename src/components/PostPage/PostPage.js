import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import Comments from '../Comments/Comments';
import './PostPage.css';

const PostPage = (props) => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const {subreddit} = props;

  useEffect(() => {
    axios
      .get(`https://www.reddit.com/r/${subreddit}/comments/${id}.json`)
      .then((response) => {
        const post = response.data[0].data.children[0].data;
        console.log(response.data);
        setPost(post);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, subreddit]);

  
  return (
    <div className='PostPage'>
      {post ? (
        <>
          <Post post={post} />
          <Comments subreddit={subreddit} postId={ id } />
        </>
      ) : (
        <p id='loadingPost'>Loading post...</p>
      )}
    </div>
  );
};

export default PostPage;