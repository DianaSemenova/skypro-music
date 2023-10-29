import * as S from "./TrackList.style";
import { Tracks } from "../TrackListItem/Tracks";
import { TrackListTitle } from "../TracklistTitle/TrackListTitle";
import { TrackListFilter } from "../TrackListFilter/TrackListFilter";
import { useGetTracksAllQuery } from "../../servicesQuery/tracks";

export function TrackList({ isLoading, tracks, handleCurrentTrack }) {
  const { isError } = useGetTracksAllQuery();
  return (
    <>
      <S.centerblockH2 className="centerblock__h2">Треки</S.centerblockH2>
      <TrackListFilter />
      <S.centerblockContent>
        <TrackListTitle />
        {isError ? (
          <div>Не удалось загрузить плейлист, попробуйте позже</div>
        ) : (
          <Tracks
            isLoading={isLoading}
            tracks={tracks}
            handleCurrentTrack={handleCurrentTrack}
          />
        )}
      </S.centerblockContent>
    </>
  );
}
