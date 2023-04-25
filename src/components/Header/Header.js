import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import MobileMenu from "../MobileMenu/MobileMenu";
import './header.css';
import logo from '../../media/reddit-logo.png';

const Header = ({ onSearch, handlePopularClick, handleSubredditClick, currentFeed }) => {


    return (
        <header>
            <div className="HeaderContent">
                <div className="Logo">
                    <Link  to='/' onClick={handlePopularClick}>                
                        <img src={logo}  alt='Logo'  width='60px' height='60px' /> 
                    </Link>
                </div>
                <div className="SearchBar">
                    <SearchBar onSearch={onSearch} />
                </div>
                <div className="MobileMenu">
                    <MobileMenu handleSubredditClick={handleSubredditClick} currentFeed={currentFeed} />
                </div>
            </div>
        </header>
    );
}

export default Header;
