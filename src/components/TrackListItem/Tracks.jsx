import { useSelector } from "react-redux";
import { useEffect } from "react";
import * as S from "./Tracks.style";
import {
  currentTrackSelector,
  isPlayingSelector,
} from "../../store/selectors/tracks";
import {
  useSetLikeMutation,
  useSetDislikeMutation,
} from "../../servicesQuery/tracks";
// import { AudioPlayerIcons } from "../AudioPlayerIcons/AudioPlayerIcons";

export function Tracks({ track, isLiked, isLoading }) {
  const currentTrack = useSelector(currentTrackSelector);
  const isPlaying = useSelector(isPlayingSelector);
  const [setLike] = useSetLikeMutation();
  const [setDislike] = useSetDislikeMutation();
  // const toggleLike = isLiked ? setDislike : setLike;

  useEffect(() => {
    console.log("isLiked", isLiked);
  }, [isLiked]);

  const handleLikeClick = () => {
    if (isLiked) {
      setDislike({ id: track.id });
    } else {
      setLike({ id: track.id });
    }
  };

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
            {/* <AudioPlayerIcons
            alt="like"
            click={handleLikeClick}
            isActive={isLiked}
          /> */}

            <S.trackTimeSvg
              alt="like"
              onClick={(e) => {
                e.stopPropagation();
                handleLikeClick();
              }}
            >
              {isLiked ? (
                <use xlinkHref="img/icon/sprite.svg#icon-like" fill="#B672FF" />
              ) : (
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              )}
            </S.trackTimeSvg>

            <S.trackTimeText> {track.duration_in_seconds}</S.trackTimeText>
          </S.trackTime>
        )}
      </S.playlistTrack>
  );
}
