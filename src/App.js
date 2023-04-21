import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/* {header} */}
      <Header />

      {/* {App body} */}
      <div className="app__body">
        <Sidebar />
        {/* {Feed} */}
        {/* {Widgets} */}
      </div>
    </div>
  );
}

export default App;
