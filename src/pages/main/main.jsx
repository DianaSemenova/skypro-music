import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrackList } from "../../components/TrackList/TrackList";
import { getTracksAll } from "../../api/Api";
import { setCurrentTrack, setAllTracks } from "../../store/slices/tracksSlice";

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
  const [loadingTracksError, setLoadingTracksError] = useState(null);

  const handleCurrentTrack = (track) => {
    const indexCurrentTrack = arrayTracksAll.indexOf(track);
    dispatch(setCurrentTrack({ track, indexCurrentTrack }));
    console.log(track);
    console.log("indexCurrentTrack: ", indexCurrentTrack);
  };


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
    <TrackList
      isLoading={isLoading}
      tracks={tracks}
      handleCurrentTrack={handleCurrentTrack}
      loadingTracksError={loadingTracksError}
    />
  );
}
