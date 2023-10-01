import { useState, useEffect } from "react";
import * as S from "./Tracks.style";
import { getTracksAll } from "../../Api";

export function Tracks({ isLoading }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getTracksAll().then((track) => {
      console.log(track);
      setTracks(track);
    });
  }, []);

  console.log(tracks);

  const trackItems = tracks.map((track) => (
    <S.playlistItem key={track.id}>
      <S.playlistTrack>
        <S.trackTitle>
          <S.trackTitleImage>
            <S.trackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.trackTitleSvg>
          </S.trackTitleImage>

          {isLoading ? (
            <div className="track__title-text">
              <S.trackTitleLink href="http://">
                {track.name}
                {track.remix ? (
                  <S.trackTitleSpan>({track.remix})</S.trackTitleSpan>
                ) : (
                  ""
                )}
              </S.trackTitleLink>
            </div>
          ) : (
            <S.Skeleton> </S.Skeleton>
          )}
        </S.trackTitle>

        {isLoading ? (
          <S.trackAuthor>
            <S.trackAuthorLink href="http://">{track.author}</S.trackAuthorLink>
          </S.trackAuthor>
        ) : (
          <S.Skeleton> </S.Skeleton>
        )}

        {isLoading ? (
          <S.trackAlbum>
            <S.trackAlbumLink href="http://">{track.album}</S.trackAlbumLink>
          </S.trackAlbum>
        ) : (
          <S.skeletonAlbum> </S.skeletonAlbum>
        )}

        <div className="track__time">
          <S.trackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.trackTimeSvg>
          <S.trackTimeText> {track.duration_in_seconds}</S.trackTimeText>
        </div>
      </S.playlistTrack>
    </S.playlistItem>
  ));

  return <S.contentPlaylist>{trackItems}</S.contentPlaylist>;
}
