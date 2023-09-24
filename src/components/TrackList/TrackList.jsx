import * as S from "./TrackList.style";
import { Tracks } from "../TrackListItem/Tracks";
import { TrackListTitle } from "../TracklistTitle/TrackListTitle";
import { TrackListFilter } from "../TrackListFilter/TrackListFilter";

export function TrackList({ isLoading }) {
  return (
    <S.mainCenterblock>
      <S.centerblockSearch>
        <S.searchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </S.searchSvg>
        <S.searchText type="search" placeholder="Поиск" name="search" />
      </S.centerblockSearch>
      <S.centerblockH2 className="centerblock__h2">Треки</S.centerblockH2>
      <TrackListFilter />
      <S.centerblockContent>
        <TrackListTitle />
        <Tracks isLoading={isLoading} />
      </S.centerblockContent>
    </S.mainCenterblock>
  );
}
