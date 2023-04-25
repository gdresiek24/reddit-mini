import React from "react";
import './Comment.css';

const Comment = ({comment}) => {
    return (
        <div className="Comment">
            <div className="Comment-header">
                <p className="Comment-author">{comment.author}</p>
                <p className="Comment-score">Score: {comment.score}</p>
            </div>
            
            <div className="Comment-body">
                <p>
                    {comment.body}
                </p>
            </div>           
        </div>
    );
};

export default Comment;