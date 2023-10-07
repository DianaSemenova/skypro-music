import * as S from "./AudioVolume.style";

export function AudioVolume() {
  return (
    <S.barVolumeBlock>
      <S.volumeContent>
        <S.volumeImage>
          <S.volumeSvg alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </S.volumeSvg>
        </S.volumeImage>
        <S.volumeProgress>
          <S.volumeProgressLine
            $style="input"
            className="volume__progress-line _btn"
            type="range"
            name="range"
          />
        </S.volumeProgress>
      </S.volumeContent>
    </S.barVolumeBlock>
  );
}
