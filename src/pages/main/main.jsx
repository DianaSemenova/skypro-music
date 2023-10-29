import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TrackList } from "../../components/TrackList/TrackList";
import {
  setCurrentTrack,
  setAllTracks,
  setCurrentPage,
} from "../../store/slices/tracksSlice";
import { useGetTracksAllQuery } from "../../servicesQuery/tracks";
import {
  allTracksSelector,
  shuffledAllTracksSelector,
  shuffledSelector,
} from "../../store/selectors/tracks";

export function Main({ isLoading }) {
  const dispatch = useDispatch();
  const shuffled = useSelector(shuffledSelector);
  const tracks = useSelector(allTracksSelector);
  const shuffledAllTracks = useSelector(shuffledAllTracksSelector);
  const arrayTracksAll = shuffled ? shuffledAllTracks : tracks;
  const { data, isError } = useGetTracksAllQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setAllTracks(data));
      dispatch(setCurrentPage("Main"));
    }
  }, [data]);

  const handleCurrentTrack = (track) => {
    const indexCurrentTrack = arrayTracksAll.indexOf(track);
    dispatch(setCurrentTrack({ track, indexCurrentTrack }));
    console.log(track);
    console.log("indexCurrentTrack: ", indexCurrentTrack);
  };

  return (
    <TrackList
      isLoading={isLoading}
      tracks={tracks}
      handleCurrentTrack={handleCurrentTrack}
      error={isError}
    />
  );
}
