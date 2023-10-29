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
  const authID = localStorage.getItem("userID");
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
          <S.contentPlaylist>
            {tracks &&
              tracks.map((track) => (
                <S.playlistItem
                  key={track.id}
                  onClick={() => handleCurrentTrack(track)}
                >
                  <Tracks
                    isLoading={isLoading}
                    track={track}
                    isLiked={
                      title === "Мои треки"
                        ? true
                        : track.stared_user?.find((user) => user.id === authID)
                    }
                  />
                </S.playlistItem>
              ))}
          </S.contentPlaylist>
        )}
      </S.centerblockContent>
    </>
  );
}
