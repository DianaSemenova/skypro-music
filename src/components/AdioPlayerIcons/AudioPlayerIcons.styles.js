import styled, { css } from "styled-components";

const icons = {
  prev: css`
    margin-right: 23px;
  `,
  play: css`
    margin-right: 23px;
  `,
  next: css`
    margin-right: 28px;
    fill: #a53939;
  `,
  repeat: css`
    margin-right: 24px;
  `,
  shuffle: css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  `,
};

const playerBtnMixin = (alt) => {
    const styles = icons[alt];
    return styles;
  }
  
  export const playerBtn = styled.div`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
          
    ${(props) => };        
  `



// .player__btn-prev,
// .player__btn-play,
// .player__btn-next,
// .player__btn-repeat,
// .player__btn-shuffle {
//   padding: 5px;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
// }

// .player__btn-prev {
//   margin-right: 23px;
// }

// .player__btn-prev-svg {
//   width: 15px;
//   height: 14px;
// }

// .player__btn-play {
//   margin-right: 23px;
// }

// .player__btn-play-svg {
//   width: 22px;
//   height: 20px;
//   fill: #d9d9d9;
// }

// .player__btn-next {
//   margin-right: 28px;
//   fill: #a53939;
// }

// .player__btn-next-svg {
//   width: 15px;
//   height: 14px;
//   fill: inherit;
//   stroke: #d9d9d9;
// }

// .player__btn-repeat {
//   margin-right: 24px;
// }

// .player__btn-repeat-svg {
//   width: 18px;
//   height: 12px;
//   fill: transparent;
//   stroke: #696969;
// }

// .player__btn-shuffle {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
// }

// .player__btn-shuffle-svg {
//   width: 19px;
//   height: 12px;
//   fill: transparent;
//   stroke: #696969;
// }
