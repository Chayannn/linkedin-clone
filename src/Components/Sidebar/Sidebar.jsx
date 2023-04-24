import React from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Sidebar() {
  const user = useSelector(selectUser);
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
          src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
          alt="background_image"
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {' '}
          {user.email[0]}
        </Avatar>
        <h2> {user.displayName} </h2>
        <h4> {user.email} </h4>
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
