import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import * as S from "../main/main.style";
import { useGetFavouriteTracksAllQuery } from "../../servicesQuery/tracks";
import {
  setFavouriteTracksAll,
  setCurrentPage,
} from "../../store/slices/tracksSlice";
import { TrackList } from "../../components/TrackList/TrackList";
import { favouritesTracksSelector } from "../../store/selectors/tracks";

export function Favourites() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetFavouriteTracksAllQuery();
  const favouritesTracks = useSelector(favouritesTracksSelector);

  useEffect(() => {
    if (data) {
      console.log("favouritesTracks", data);
      dispatch(setFavouriteTracksAll(data));
      dispatch(setCurrentPage("Favourites"));
    }
  }, [data]);

  return (
    <TrackList
      title="Мои треки"
      tracks={favouritesTracks}
      error={error}
      isLoading={isLoading}
      isFavorites
    />
  );
}
