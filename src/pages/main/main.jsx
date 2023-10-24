import { useDispatch, useSelector } from "react-redux";
import { TrackList } from "../../components/TrackList/TrackList";
import { setCurrentTrack } from "../../store/slices/tracksSlice";


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

  const handleCurrentTrack = (track) => {
    const indexCurrentTrack = arrayTracksAll.indexOf(track);
    dispatch(setCurrentTrack({ track, indexCurrentTrack }));
    console.log(track);
    console.log("indexCurrentTrack: ", indexCurrentTrack);
  };

  // useEffect(() => {
  //   getTracksAll()
  //     .then((track) => {
  //       dispatch(setAllTracks(track));
  //     })
  //     .catch((error) => {
  //       setLoadingTracksError(error.message);
  //     });
   
  // }, [data]);

  return (
    <TrackList
      isLoading={isLoading}
      tracks={tracks}
      handleCurrentTrack={handleCurrentTrack}
    />
  );
}
