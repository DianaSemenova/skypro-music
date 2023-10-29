import * as S from "./TrackList.style";
import { Tracks } from "../TrackListItem/Tracks";
import { TrackListTitle } from "../TracklistTitle/TrackListTitle";
import { TrackListFilter } from "../TrackListFilter/TrackListFilter";

export function TrackList({
  title,
  error,
  isLoading,
  tracks,
  handleCurrentTrack,
}) {
  return (
    <>
      <S.centerblockH2 className="centerblock__h2">
        {title || "Треки"}
      </S.centerblockH2>
      <TrackListFilter />
      <S.centerblockContent>
        <TrackListTitle />
        {error ? (
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
