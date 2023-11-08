import { useState } from "react";
import uniq from "lodash/uniq";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./TrackListFilter.style";
import { TrackListFilterCategory } from "../TrackListFilterCategory/TrackListFilterCategory";
import { setFilterPlaylist } from "../../store/slices/tracksSlice";
import { filtersPlaylistSelector } from "../../store/selectors/tracks";

export function TrackListFilter({ tracks, currentPage }) {
  const dispatch = useDispatch();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("");
  const selectedFiltersPlaylist = useSelector(filtersPlaylistSelector);
 
  return (
    <S.centerblockFilter>
      <S.filterDiv>
        <S.filterTitle>Искать по:</S.filterTitle>
        <TrackListFilterCategory
          nameCategory="исполнителю"
          content={uniq(tracks.map((track) => track.author)).map((author) => (
            <S.filterItem key={author}>{author}</S.filterItem>
          ))}
          isActiveCategory={activeCategoryFilter}
          setActiveCategory={setActiveCategoryFilter}
        />
        {currentPage !== "Category" &&
        <TrackListFilterCategory
          nameCategory="жанру"
          isActiveCategory={activeCategoryFilter}
          setActiveCategory={setActiveCategoryFilter}
          content={uniq(tracks.map((track) => track.genre)).map((genre) => (
            <S.filterItem
              key={genre}
              onClick={() => {
                console.log("genre filter: ", genre);
              }}
            >
              {genre}
            </S.filterItem>
          ))}
        />}
      </S.filterDiv>

      <S.filterDiv>
        <S.filterTitle>Сортировка:</S.filterTitle>
        <TrackListFilterCategory
          nameCategory={selectedFiltersPlaylist?.sort}
          isActiveCategory={activeCategoryFilter}
          setActiveCategory={setActiveCategoryFilter}
          content={["По умолчанию", "Сначала новые", "Сначала старые"].map(
            (item) => (
              <S.filterItem
                key={item}
                onClick={() => {
                  dispatch(setFilterPlaylist({ sort: item }));
                  console.log("year filter: ", item);
                }}
              >
                {item}
              </S.filterItem>
            )
          )}
        />
      </S.filterDiv>
    </S.centerblockFilter>
  );
}
