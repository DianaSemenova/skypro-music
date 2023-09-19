import { useState, useEffect } from "react";
import "./App.css";
import * as S from './App.styles'
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { TrackList } from "./components/TrackList/TrackList";


function App() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 5000);

      return () => clearTimeout(timer);
    }

    console.log(isLoading);
  }, [isLoading]);

  return (
    <div className="App">
      <S.wrapper>
        <S.container>
          <S.main>
            <NavMenu />
            <TrackList isLoading={isLoading} />
            <Sidebar isLoading={isLoading} />
          </S.main>
          <AudioPlayer isLoading={isLoading} />
          <footer className="footer" />
        </S.container>
      </S.wrapper>
    </div>
  );
}

export default App;
