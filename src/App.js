import "./App.css";
import { useState, useEffect } from "react";
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { TrackList } from "./components/TrackList/TrackList";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 10000);

      
      return () => clearTimeout(timer); 
    }
  }, [loading]);


  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <NavMenu />
            <TrackList />
            <Sidebar />
          </main>
          <AudioPlayer />
          <footer className="footer" />
        </div>
      </div>
    </div>
  );
}

export default App;
