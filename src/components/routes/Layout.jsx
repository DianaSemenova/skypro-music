// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../../pages/main/main.style";
import { NavMenu } from "../NavMenu/NavMenu";
import { Sidebar } from "../Sidebar/Sidebar";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import { setAllTracks } from "../../store/slices/tracksSlice";
import { currentTrackSelector } from "../../store/selectors/tracks";
import CenterBlockSearch from "../CenterBlockSearch/CenterBlockSearch";
import { useGetTracksAllQuery } from "../../servicesQuery/api";

export default function Layout({ isLoading }) {
  const dispatch = useDispatch();
  const currentTrack = useSelector(currentTrackSelector);
  const { data, isError } = useGetTracksAllQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setAllTracks(data));
    }
  }, [data]);

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
            <Sidebar isLoading={isLoading} loadingTracksError={isError} />
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
