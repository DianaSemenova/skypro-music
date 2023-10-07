/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState, useEffect } from "react";
import * as S from "./AudioPlayer.styles";
import { SkeletonPlayBar } from "../TrackListItem/Tracks.style";
import { AudioPlayerIcons } from "../AdioPlayerIcons/AudioPlayerIcons";
import { AudioVolume } from "../AudioVolume/AudioVolume";

export function AudioPlayer({ isLoading, currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  console.log(audioRef);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const togglePlay = isPlaying ? handleStop : handleStart;

  useEffect(() => {
    handleStart();
  }, [currentTrack]);

  return (
    <S.bar>
      <audio src={currentTrack.track_file} ref={audioRef} />
      <S.barContent>
        <S.barPlayerProgress />
        <S.barPlayerBlock>
          <S.barPlayer>
            <S.playerControls>
              <AudioPlayerIcons
                alt="prev"
                click={() => {
                  alert("Еще не реализовано");
                }}
              />
              <AudioPlayerIcons
                alt={isPlaying ? "pause" : "play"}
                click={togglePlay}
              />
              <AudioPlayerIcons
                alt="next"
                click={() => {
                  alert("Еще не реализовано");
                }}
              />
              <AudioPlayerIcons alt="repeat" />
              <AudioPlayerIcons
                alt="shuffle"
                click={() => {
                  alert("Еще не реализовано");
                }}
              />
            </S.playerControls>
            <S.playerTrackPlay>
              <S.trackPlayContain>
                <S.trackPlayImage>
                  <S.trackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.trackPlaySvg>
                </S.trackPlayImage>

                {isLoading ? (
                  <S.trackPlayAuthor>
                    <S.trackPlayAuthorLink href="http://">
                      {currentTrack.name}
                    </S.trackPlayAuthorLink>
                  </S.trackPlayAuthor>
                ) : (
                  <SkeletonPlayBar> </SkeletonPlayBar>
                )}

                {isLoading ? (
                  <S.trackPlayAlbum>
                    <S.trackPlayAlbumLink href="http://">
                      {currentTrack.author}
                    </S.trackPlayAlbumLink>
                  </S.trackPlayAlbum>
                ) : (
                  <SkeletonPlayBar> </SkeletonPlayBar>
                )}
              </S.trackPlayContain>
              <S.trackPlayLikeDis>
                <S.trackPlayLike>
                  <S.trackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.trackPlayLikeSvg>
                </S.trackPlayLike>
                <S.trackPlayDislike>
                  <S.trackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </S.trackPlayDislikeSvg>
                </S.trackPlayDislike>
              </S.trackPlayLikeDis>
            </S.playerTrackPlay>
          </S.barPlayer>
          <AudioVolume />
        </S.barPlayerBlock>
      </S.barContent>
    </S.bar>
  );
}
