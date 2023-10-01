import { useState, useEffect } from "react";
import * as S from "./main.style";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TrackList } from "../../components/TrackList/TrackList";
import { getTracksAll } from "../../Api";

export function Main() {
  const [isLoading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [clickTrack, setClickTrack] = useState(false);
  const toggleClickTrack = () => setClickTrack(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    getTracksAll().then((track) => {
      console.log(track);
      setTracks(track);
    });
  }, []);

  console.log(tracks);

  return (
    <div className="App">
      <S.wrapper>
        <S.container>
          <S.main>
            <NavMenu />
            <TrackList
              isLoading={isLoading}
              tracks={tracks}
              toggleClickTrack={toggleClickTrack}
            />
            <Sidebar isLoading={isLoading} />
          </S.main>
          {clickTrack && <AudioPlayer isLoading={isLoading} />}
          <footer className="footer" />
        </S.container>
      </S.wrapper>
    </div>
  );
}
