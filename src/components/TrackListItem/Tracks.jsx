import { useSelector } from "react-redux";
import * as S from "./Tracks.style";
import {
  currentTrackSelector,
  isPlayingSelector,
} from "../../store/selectors/tracks";
// import {
//   useSetLikeMutation,
//   useSetDislikeMutation,
// } from "../../servicesQuery/tracks";

export function Tracks({ track, isLoading }) {
  const currentTrack = useSelector(currentTrackSelector);
  const isPlaying = useSelector(isPlayingSelector);
  // const [setLike] = useSetLikeMutation();
  // const [setDislike] = useSetDislikeMutation();
  // const toggleLike = isLiked ? setDislike : setLike;

  // const trackItems = tracks.map((track) => (
  //   <S.playlistItem key={track.id} onClick={() => handleCurrentTrack(track)}>

  return (
    <S.playlistTrack>
      <S.trackTitle>
        <S.trackTitleImage>
          {currentTrack && currentTrack.id === track.id ? (
            <S.PointPlaying $playing={isPlaying} />
          ) : (
            <S.trackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.trackTitleSvg>
          )}
        </S.trackTitleImage>

        {!isLoading ? (
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
          <S.Skeleton />
        )}
      </S.trackTitle>

      {!isLoading ? (
        <S.trackAuthor>
          <S.trackAuthorLink href="http://">{track.author}</S.trackAuthorLink>
        </S.trackAuthor>
      ) : (
        <S.Skeleton />
      )}

      {!isLoading ? (
        <S.trackAlbum>
          <S.trackAlbumLink href="http://">{track.album}</S.trackAlbumLink>
        </S.trackAlbum>
      ) : (
        <S.skeletonAlbum />
      )}

      <div className="track__time">
        <S.trackLikeSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </S.trackLikeSvg>
        <S.trackTimeText> {track.duration_in_seconds}</S.trackTimeText>
      </div>
    </S.playlistTrack>
  );

  //   </S.playlistItem>
  // ));

  // return <S.contentPlaylist>{trackItems}</S.contentPlaylist>;
}
