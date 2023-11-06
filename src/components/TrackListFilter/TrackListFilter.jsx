import { useState } from "react";
import uniq from "lodash/uniq";
import * as S from "./TrackListFilter.style";
import { TrackListFilterCategory } from "../TrackListFilterCategory/TrackListFilterCategory";

export function TrackListFilter({ tracks }) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("");
  return (
    <S.centerblockFilter>
      <S.filterTitle>Искать по:</S.filterTitle>
      <TrackListFilterCategory
        nameCategory="исполнителю"
        content={uniq(tracks.map((track) => track.author)).map(
          (author) => (
            <S.filterItem key={author}>{author}</S.filterItem>
          )
        )}
        isActiveCategory={activeCategoryFilter}
        setActiveCategory={setActiveCategoryFilter}
      />
      <TrackListFilterCategory
        nameCategory="году выпуска"
        isActiveCategory={activeCategoryFilter}
        setActiveCategory={setActiveCategoryFilter}
        content={["По умолчанию", "Сначала новые", "Сначала старые"].map(
          (item) => (
            <S.filterItem key={item}>{item}</S.filterItem>
          )
        )}
      />
      <TrackListFilterCategory
        nameCategory="жанру"
        isActiveCategory={activeCategoryFilter}
        setActiveCategory={setActiveCategoryFilter}
        content={uniq(tracks.map((track) => track.genre)).map(
          (genre) => (
            <S.filterItem
              key={genre}
              onClick={() => {               
                console.log("genre filter: ", genre);
              }}
            >
              {genre}
            </S.filterItem>
          )
        )}
      />
    </S.centerblockFilter>
  );
}
