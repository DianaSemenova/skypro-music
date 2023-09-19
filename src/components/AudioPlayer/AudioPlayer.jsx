import * as S from "./AudioPlayer.styles";
import { AudioPlayerIcons } from "../AdioPlayerIcons/AudioPlayerIcons";

export function AudioPlayer({ isLoading }) {
  return (
    <S.bar>
      <S.barContent>
        <div className="bar__player-progress" />
        <S.barPlayerBlock>
          <S.barPlayer>
            <S.playerControls>
              <AudioPlayerIcons alt="prev"/>
              <AudioPlayerIcons alt="play"/>
              <AudioPlayerIcons alt="next"/>
              <AudioPlayerIcons alt="repeat"/>
              <AudioPlayerIcons alt="shuffle"/>
            </S.playerControls>
            <S.playerTrackPlay>
              <div className="track-play__contain">
                <div className="track-play__image">
                  <svg className="track-play__svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>

                {isLoading ? (
                  <div className="track-play__author">
                    <a className="track-play__author-link" href="http://">
                      Ты та...
                    </a>
                  </div>
                ) : (
                  <div className="skeleton"> </div>
                )}
                
                {isLoading ? (
                  <div className="track-play__album">
                    <a className="track-play__album-link" href="http://">
                      Баста
                    </a>
                  </div>
                ) : (
                  <div className="skeleton"> </div>
                )}
              </div>
              <div className="track-play__like-dis">
                <div className="track-play__like _btn-icon">
                  <svg className="track-play__like-svg" alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                </div>
                <div className="track-play__dislike _btn-icon">
                  <svg className="track-play__dislike-svg" alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </svg>
                </div>
              </div>
            </S.playerTrackPlay>
          </S.barPlayer>
          <S.barVolumeBlock>
            <div className="volume__content">
              <div className="volume__image">
                <svg className="volume__svg" alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </svg>
              </div>
              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </S.barVolumeBlock>
        </S.barPlayerBlock>
      </S.barContent>
    </S.bar>
  );
}
