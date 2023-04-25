import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import SubredditsMenu from './components/SubredditsMenu/SubredditsMenu';
import PostPage from './components/PostPage/PostPage';
import './App.css';

function App() {
  const [currentFeed, setCurrentFeed] = useState('r/popular');
  const [subreddit, setSubreddit] = useState('');

  const handleSubredditClick = (subreddit) => {
    setCurrentFeed(`r/${subreddit}`);
  }

  //POPULAR / NEW BUTTONS
  const handlePopularClick = () => {
    setCurrentFeed('r/popular');
};

const handleNewClick = () => {
    setCurrentFeed('new');
};

//extracts the subreddit from a post you click on
//cant use currentFeed because posts from 'new' feed have different subreddits
const handlePostClick = (permalink) => {
  const subredditRegex = /\/r\/(\w+)\//;
  const matches = permalink.match(subredditRegex);
  if (matches) {
    setSubreddit(matches[1]);
    setCurrentFeed(`r/${matches[1]}`)
  }
};

const handleSearch = (term) => {
  setCurrentFeed(`search/.json?q=${term}`);
  setSubreddit('');
};


  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} handlePopularClick={handlePopularClick} handleSubredditClick={handleSubredditClick} currentFeed={currentFeed}/>
        <main>
          <div className="feedButtons">
            <Link to='/' onClick={handlePopularClick}>
              <button className={currentFeed === 'r/popular' ? 'active' : ''}>Best</button>
            </Link>
            <Link to='/' onClick={handleNewClick}>
              <button className={currentFeed === 'new' ? 'active' : ''}>New</button>
            </Link>
              
          </div>
          <SubredditsMenu onSubredditClick={handleSubredditClick} currentFeed={currentFeed}/>
          <Routes>
            <Route path='/' element={<Feed currentFeed={currentFeed} handleClick={handlePostClick} />} />
            <Route path='/posts/:id' element={<PostPage subreddit={subreddit} />} />
          </Routes>
        </main>
      </div>
    </Router>
    
  );
}

export default App;
