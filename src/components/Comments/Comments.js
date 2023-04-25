import React, { useState, useEffect} from "react";
import axios from "axios";
import Comment from "../Comment/Comment";

const Comments = (props) => {
    const [comments, setComments] = useState();
    const {subreddit, postId} = props;
    useEffect(() => {
        axios
            .get(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`)
            .then((response) => {
                const comments = response.data[1].data.children.map(
                    (comment) => comment.data
                );
                setComments([ ...comments]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [subreddit, postId]);

    console.log(comments);

    return(
        <div className="Comments">
            {comments? (
                <div>
                    <h3>Comments:</h3>
                    {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
                </div>
                ) : (
                 <h3>Comments Loading...</h3>
                )
            }
        </div>
    );    
}

export default Comments;


