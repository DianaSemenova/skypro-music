// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import * as S from "../../pages/main/main.style";
import { NavMenu } from "../NavMenu/NavMenu";
import { Sidebar } from "../Sidebar/Sidebar";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import { currentTrackSelector } from "../../store/selectors/tracks";
import CenterBlockSearch from "../CenterBlockSearch/CenterBlockSearch";
import { useGetTracksAllQuery } from "../../servicesQuery/tracks";

export default function Layout() {
  const currentTrack = useSelector(currentTrackSelector);
  const { isError, isLoading } = useGetTracksAllQuery();

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //     dispatch(setAllTracks(data));
  //     dispatch(setCurrentPage("Main"));
  //   }
  // }, [data]);

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
