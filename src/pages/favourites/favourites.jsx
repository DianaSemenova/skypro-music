import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as S from "../main/main.style";
import { useGetFavouriteTracksAllQuery } from "../../servicesQuery/tracks";
import { setFavouriteTracksAll } from "../../store/slices/tracksSlice";

export function Favourites() {
  const dispatch = useDispatch();
  const { data } = useGetFavouriteTracksAllQuery();

  useEffect(() => {
    if (data) {
      console.log("favoritesTracks", data);
      dispatch(setFavouriteTracksAll(data));
    }
  }, [data]);

  return (
    <S.wrapper>
      <S.container>
        <S.main>
          <h1>FavouritesPages</h1>
        </S.main>
        <footer className="footer" />
      </S.container>
    </S.wrapper>
  );
}
