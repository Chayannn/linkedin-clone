import './Feed.css';
import InputOptions from '../InputOptions/InputOptions';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Post from '../Post/Post';
import { useEffect, useState } from 'react';
import db from '.firebase';
import { input } from '@testing-library/user-event/dist/types/event';

function Feed() {
  const [Input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
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
      name: 'Chayan Panda',
      description: 'This is a test I repeat this is a test',
      message: '',
    });
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} type="text" />
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
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Chayan"
        description="Ceo of Google"
        message="Hello chutiyas"
        photoUrl="https://lh3.googleusercontent.com/cLkyQKKyfNxKYDceid7mGs44shse8SUXwf93P70GaTwp_ptEJMOd9xbtpXyhGMH1ln0RBnVbKrx9ys63v_TFbrUKFQXhIKwkYB6JbgSMXRXiGaZqyxZRQVP0I8IwRbWyx5xOuPOYvi9-APIL5kPOVbTf4ufOngV2G6QZrNfzQboSkHSdh4NUXh4xD-y9iHKjr_f6dxTge0qcrSUG1CD_QyNSX2-HHpc9Re0_bbLwi1RQr-g5Ecft_FH9vXx0iyAGxXRf0TCfl5LhZqp96WnC8wv4CITxqBf8tIWMoN0REAOeTuH-91yuhi8nCJHRUK9b1q2CQYxaVaqfg2F4TKtYL0hwwxBvVShHUrzp2p20FJSkW6t4w8_9rHq79Ucvas1fvddhLj6HxxlTLcsT3lKvA4QGFS64y0EsCaVgp0y-Y2SxJugqbBS3J4BK9buOqXlpeOkqQisbCVSBXiPX7IHv1WuormR7CilIzH891-wBSdww0Dm__R4MsagxZibtIWZfxJNwKLzS5_hfvv4gyO1dJTt0fnCMpI0zN7BW4lhdfLFigZDvflQ_1_k2ObBrykSgNfEsi1vxeaLYOVOvQh7qorCRWb7-bXqUdbsFJnUoVdF6wDjXcdRYiCnAMK2IeVNf4bfDyfzkkK8gh0tlBz75Oj9VYUsajPWVjLt_OMfm_IJePP720D7LXz2pHa-4GZyn2F5SJ59FBZp_azC7UxQ8fdSeQ5xLF9Zkvd0cWjkwe_3KXq_P-TB6S5rn6009RTC2Urg7WHxu02A3nE3Ts4egqS9ys-DgpUY8JLJIvJzF-i5G-6VT-Zfm4pXcN80jNc7E2tFfWUTswzWXvBIhLZ46v9cwgK53TCbUG52_gmv-09ECnzJGODcLpKPqZXrh-drK84BTZfeLaATOojGljnrmsVbi1piHP8k0Zp5c82YxNcCicg=w640-h640-s-no?authuser=0"
      />
    </div>
  );
}

export default Feed;
