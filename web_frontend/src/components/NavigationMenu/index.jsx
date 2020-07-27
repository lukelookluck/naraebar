import React from 'react'
import './style.css'

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';

export default function() {
  return (
    <div className="nav-box">
      <button className="nav-item">
        <ChatIcon className="community-icon" />
      </button>
      <button className="nav-item">
        <PersonOutlineIcon className="my-bar-icon" />
      </button>
      <button className="nav-item">
        <SearchIcon className="search-icon" />
      </button>
    </div>
  )
}