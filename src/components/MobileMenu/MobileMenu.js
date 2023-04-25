import React, { useState} from "react";
import { Link } from "react-router-dom";
import './MobileMenu.css';
import menu from '../../media/menu.png';

const MobileMenu = ({ handleSubredditClick, currentFeed}) => {
    const [showDropdown, setShowDropdown] = useState(false); 

    const popularSubreddits = [
        'AskReddit',
        'worldnews',
        'videos',
        'pics',
        'todayilearned',
        'science',
        'gaming',
        'movies',
        'aww',
        'Music',
    ];
    const subredditList = popularSubreddits.map((subreddit) => (
        <li key={subreddit}>
            <Link to='/' onClick={() => handleButtonClick(subreddit)}>
                <button className={currentFeed === `r/${subreddit}` ? 'mobileButton active' : 'mobileButton'}>
                    {subreddit}
                </button>
            </Link>
        </li>
    ));

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    }

    const handleButtonClick = (subreddit) => {
        handleSubredditClick(subreddit);
        setShowDropdown(false);
    }

    return (
        <div className="mobileMenu">
            <div className="menuButtonContainer">
                <button className="menuButton" onClick={handleDropdownClick} >
                    <img src={menu} alt='dropdown' width='32px' height='32px'  />
                </button>
            </div>
            {showDropdown && (
                <div className="Dropdown">
                    <ul>
                        {subredditList}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;