import './Feed.css';
import InputOptions from '../InputOptions/InputOptions';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Post from '../Post/Post';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timeStamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#378fe9" />
          <InputOptions title="Video" Icon={SmartDisplayIcon} color="#5f9b41" />
          <InputOptions title="Job" Icon={BusinessCenterIcon} color="#a872e8" />
          <InputOptions
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#e16745"
          />
        </div>
      </div>
      <FlipMove> 
        {posts.map(({ id, data: { name, message, description, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            message={message}
            description={description}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
