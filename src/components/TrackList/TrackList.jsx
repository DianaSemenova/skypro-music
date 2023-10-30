import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as S from "./TrackList.style";
import { Tracks } from "../TrackListItem/Tracks";
import { TrackListTitle } from "../TracklistTitle/TrackListTitle";
import { TrackListFilter } from "../TrackListFilter/TrackListFilter";
import {
  shuffledSelector,
  currentPlaylistSelector,
  shuffledAllTracksSelector,
  currentPageSelector,
  allTracksSelector,
  favouritesTracksSelector,
} from "../../store/selectors/tracks";
import {
  setCurrentTrack,
  setCurrentPlaylist,
} from "../../store/slices/tracksSlice";

export function TrackList({ title, error, isLoading, tracks }) {
  const dispatch = useDispatch();
  const shuffled = useSelector(shuffledSelector);
  const allTracks = useSelector(allTracksSelector);
  const favouritesTracks = useSelector(favouritesTracksSelector);
  const currentPlaylist = useSelector(currentPlaylistSelector);
  const shuffledAllTracks = useSelector(shuffledAllTracksSelector);
  const currentPage = useSelector(currentPageSelector);
  const arrayTracksAll = shuffled ? shuffledAllTracks : currentPlaylist;

  const authID = localStorage.getItem("userID");

  useEffect(() => {
    console.log("isLoadingTrackList", isLoading);
  }, [isLoading]);

  const handleCurrentTrack = (track) => {
    if (!shuffled) {
      if (currentPage === "Main") {
        dispatch(setCurrentPlaylist(allTracks));
      }
      if (currentPage === "Favourites") {
        dispatch(setCurrentPlaylist(favouritesTracks));
      }
    }
    const indexCurrentTrack = arrayTracksAll.indexOf(track);
    dispatch(setCurrentTrack({ track, indexCurrentTrack }));
    console.log(track);
    console.log("indexCurrentTrack: ", indexCurrentTrack);
  };

  return (
    <>
      <S.centerblockH2 className="centerblock__h2">
        {title || "Треки"}
      </S.centerblockH2>
      <TrackListFilter />
      <S.centerblockContent>
        <TrackListTitle />
        {error ? (
          <div>Не удалось загрузить плейлист, попробуйте позже</div>
        ) : (
          <S.contentPlaylist>
            {isLoading &&
              // new Array(20).fill(
              //   <Tracks key={Math.random()} isLoading={isLoading} />

              new Array(10)
                .fill()
                .map(() => <Tracks key={Math.random()} isLoading={isLoading} />)}
            {tracks &&
              tracks.map((track) => (
                <S.playlistItem
                  key={track.id}
                  onClick={() => handleCurrentTrack(track)}
                >
                  <Tracks
                    isLoading={isLoading}
                    track={track}
                    isLiked={
                      title === "Мои треки"
                        ? true
                        : track.stared_user?.find((user) => user.id === authID)
                    }
                  />
                </S.playlistItem>
              ))}
          </S.contentPlaylist>
        )}
      </S.centerblockContent>
    </>
  );
}
