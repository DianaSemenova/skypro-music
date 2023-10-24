// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "../../pages/main/main.style";
import { NavMenu } from "../NavMenu/NavMenu";
import { Sidebar } from "../Sidebar/Sidebar";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import { getTracksAll } from "../../api/Api";
import { setAllTracks } from "../../store/slices/tracksSlice";
import { currentTrackSelector } from "../../store/selectors/tracks";
import CenterBlockSearch from "../CenterBlockSearch/CenterBlockSearch";

export default function Layout({ isLoading }) {
  const dispatch = useDispatch();
  const [loadingTracksError, setLoadingTracksError] = useState(null);
  const currentTrack = useSelector(currentTrackSelector);

  useEffect(() => {
    getTracksAll()
      .then((track) => {
        dispatch(setAllTracks(track));
      })
      .catch((error) => {
        setLoadingTracksError(error.message);
      });
  }, []);

  return (
    <div className="App">
      <S.wrapper>
        <S.container>
          <S.main>
            <NavMenu />
            <S.MainCenterBlock>
              <CenterBlockSearch />

              <Outlet />
              
            </S.MainCenterBlock>
            <Sidebar
              isLoading={isLoading}
              loadingTracksError={loadingTracksError}
            />
          </S.main>
          {currentTrack && (
            <AudioPlayer isLoading={isLoading} currentTrack={currentTrack} />
          )}
          <footer className="footer" />
        </S.container>
      </S.wrapper>
    </div>
  );
}
