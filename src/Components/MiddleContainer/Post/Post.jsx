import React, { forwardRef } from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import InputOptions from '../InputOptions/InputOptions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}> {name[0]} </Avatar>
        <div className="post__info">
          <h2> {name} </h2> 
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOptions Icon={RepeatIcon} title="Repost" color="gray" />
        <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
