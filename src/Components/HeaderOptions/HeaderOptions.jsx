import React from 'react';
import './HeaderOptions.css';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  console.log(avatar);
  return (
    <div className="headerOptions" onClick={onClick}>
      {Icon && <Icon className="headerOptions__icon" />}
      {avatar && (
        <Avatar className="headerOptions__icon" src={user?.photoUrl}>
          {user?.displayName[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
