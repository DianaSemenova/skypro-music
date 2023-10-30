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
import { AudioPlayerIcons } from "../AudioPlayerIcons/AudioPlayerIcons";

export function Tracks({ track, isLiked, isLoading }) {
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
      {!isLoading && (
        <S.trackTime>
          <AudioPlayerIcons
            alt="like"
            // click={() => {
            //   toggleLike(track.id);
            // }}
            isActive={isLiked}
          />

          <S.trackTimeText> {track.duration_in_seconds}</S.trackTimeText>
        </S.trackTime>
      )}
    </S.playlistTrack>
  );

  //   </S.playlistItem>
  // ));

  // return <S.contentPlaylist>{trackItems}</S.contentPlaylist>;
}
