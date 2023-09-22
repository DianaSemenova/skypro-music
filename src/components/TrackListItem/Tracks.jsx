import { BrowserRouter } from "react-router-dom";
import arrTracks from "../../utils/dataTracks";
import * as S from "./Tracks.style";

export function Tracks({ isLoading }) {
  const trackItems = arrTracks.map((track) => (
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
              <BrowserRouter>
                <S.trackTitleLink href="http://">
                  {track.trackName}
                  {track.remix ? (
                    <S.trackTitleSpan>({track.remix})</S.trackTitleSpan>
                  ) : (
                    ""
                  )}
                </S.trackTitleLink>
              </BrowserRouter>
            </div>
          ) : (
            <div className="skeleton"> </div>
          )}
        </S.trackTitle>

        {isLoading ? (
          <S.trackAuthor>
            <BrowserRouter>
              <S.trackAuthorLink href="http://">
                {track.trackAuthor}
              </S.trackAuthorLink>
            </BrowserRouter>
          </S.trackAuthor>
        ) : (
          <div className="skeleton"> </div>
        )}

        {isLoading ? (
          <S.trackAlbum>
            <BrowserRouter>
              <S.trackAlbumLink href="http://">
                {track.album}
              </S.trackAlbumLink>
            </BrowserRouter>
          </S.trackAlbum>
        ) : (
          <div className="skeleton skeleton__album"> </div>
        )}

        <div className="track__time">
          <S.trackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.trackTimeSvg>
          <S.trackTimeText> {track.trackTime}</S.trackTimeText>
        </div>
      </S.playlistTrack>
    </S.playlistItem>
  ));

  return <S.contentPlaylist>{trackItems}</S.contentPlaylist>;
}
