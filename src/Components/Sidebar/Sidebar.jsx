import React from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          alt="background_image"
        />
        <Avatar className="sidebar__avatar" src='https://magnificent-dolphin-599305.netlify.app/IMG_20220422_202835_312%20(1).jpg' />
        <h2>Chayan Panda</h2>
        <h4>Chayanpanda@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">98287</p>
        </div>
        <div className="sidebar__stat">
          <p>Viewes on post</p>
          <p className="sidebar__statNumber">927598</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('Reactjs')}
        {recentItem('WebDesign')}
        {recentItem('SoftwareEngineering')}
        {recentItem('TypeScript')}
        {recentItem('BlockChain Development')}
      </div>
    </div>
  );
}

export default Sidebar;
