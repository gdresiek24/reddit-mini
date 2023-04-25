import React from "react";
import { Link } from "react-router-dom";
import './SubredditsMenu.css';

const SubredditsMenu = ({ onSubredditClick, currentFeed }) => {
    const popularSubreddits = [
        "AskReddit",
        "worldnews",
        "videos",
        "pics",
        "todayilearned",
        "science",
        "gaming",
        "movies",
        "aww",
        "Music",
    ];

    return(
        <div className="subredditsMenu">
            <h3><strong>Subreddits</strong></h3>
            <ul>
                {popularSubreddits.map((subreddit) => (
                    <li key={subreddit}>
                        <Link to='/' onClick={() => onSubredditClick(subreddit)}>
                            <button className={currentFeed === `r/${subreddit}` ? 'active' : ''} >
                                {subreddit}
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SubredditsMenu;