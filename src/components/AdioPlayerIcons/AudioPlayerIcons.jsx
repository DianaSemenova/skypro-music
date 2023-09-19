import * as S from "./AudioPlayerIcons.styles"

export function AudioPlayerIcons (props) {
    return (
        <S.playerBtnMixin $style={props.alt}>
        <svg className="player__btn-prev-svg" alt={props.alt}>
          <use xlinkHref={`img/icon/sprite.svg#icon-${props.alt}`}/>
        </svg>
      </S.playerBtnMixin>
    )
}