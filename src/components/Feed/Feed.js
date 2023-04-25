import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Post from "../Post/Post";
import './Feed.css';

const Feed = (props) => {
    const [posts, setPosts] = useState([]);
    const { currentFeed, handleClick } = props;
    useEffect(() => {
        const fetchData = async () => {
            let apiUrl = `https://www.reddit.com/${currentFeed}.json`;

            if(currentFeed.startsWith('search')) {
                apiUrl = `https://www.reddit.com/${currentFeed}`;
            }

            const response = await axios.get(apiUrl);
            setPosts(response.data.data.children);
        };

        fetchData();
    }, [currentFeed]);


    return (
        
        <div className='feed'>            
            {posts.map(post => (
                <Link className="postLink" to={`/posts/${post.data.id}`} key={post.data.id} onClick={() => handleClick(post.data.permalink)} >
                    <Post key={post.data.id} post={post.data} />
                </Link>
                
            ))}
        </div>
    );
};

export default Feed;