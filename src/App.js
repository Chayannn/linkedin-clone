import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/MiddleContainer/Feed/Feed';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import Widgets from './Components/Widgets/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
