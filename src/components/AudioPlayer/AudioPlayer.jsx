/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./AudioPlayer.styles";
import { SkeletonPlayBar } from "../TrackListItem/Tracks.style";
import { AudioPlayerIcons } from "../AudioPlayerIcons/AudioPlayerIcons";
import { AudioVolume } from "../AudioVolume/AudioVolume";
import { BarPlayerProgress } from "../AudioPlayerProgress/AudioPlayerProgress";
import { isPlayingSelector } from "../../store/selectors/tracks";
import { setIsPlaying } from "../../store/actions/creators/tracks";

export function AudioPlayer({ isLoading, currentTrack }) {
  const isPlaying = useSelector(isPlayingSelector);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const dispatch = useDispatch();

  const handleStart = () => {
    audioRef.current.play();
    dispatch(setIsPlaying(true));
  };
  const handleStop = () => {
    audioRef.current.pause();
    dispatch(setIsPlaying(false));
  };
  const togglePlay = isPlaying ? handleStop : handleStart;

  useEffect(() => {
    handleStart();
    audioRef.current.onended = () => {
      setIsPlaying(false);
    };
  }, [currentTrack]);

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };
  const onTimeUpdate = () => {
    setTimeProgress(audioRef.current.currentTime);
  };

  const [repeatTrack, setRepeatTrack] = useState(false);

  const toggleTrackRepeat = () => {
    audioRef.current.loop = !repeatTrack;
    setRepeatTrack(!repeatTrack);
  };

  return (
    <S.bar>
      <audio
        src={currentTrack.track_file}
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
      />
      <S.barContent>
        <BarPlayerProgress
          duration={duration}
          timeProgress={timeProgress}
          audioRef={audioRef}
        />
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
              <AudioPlayerIcons
                alt="repeat"
                click={toggleTrackRepeat}
                repeatTrack={repeatTrack}
              />
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
          <AudioVolume audioRef={audioRef} />
        </S.barPlayerBlock>
      </S.barContent>
    </S.bar>
  );
}
