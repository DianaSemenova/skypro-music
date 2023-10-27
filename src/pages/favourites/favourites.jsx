import { useEffect } from "react";
import * as S from "../main/main.style";
import { useGetFavouriteTracksAllQuery } from "../../servicesQuery/api";

export function Favourites() {
  const { data } = useGetFavouriteTracksAllQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
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
