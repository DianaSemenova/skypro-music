import styled from "styled-components";

export const bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;

export const barContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

// .bar__player-progress {
//   width: 100%;
//   height: 5px;
//   background: #2e2e2e;
// }

export const barPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
export const barPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const barVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const playerControls = styled.div `
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;




export const playerTrackPlay = styled.div `
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

// .track-play__contain {
//   width: auto;
//   display: -ms-grid;
//   display: grid;
//   -ms-grid-columns: auto 1fr;
//   grid-template-columns: auto 1fr;
//   grid-template-areas: "image author" "image album";
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
// }

// .track-play__image {
//   width: 51px;
//   height: 51px;
//   background-color: #313131;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
//   -webkit-box-pack: center;
//   -ms-flex-pack: center;
//   justify-content: center;
//   margin-right: 12px;
//   -ms-grid-row: 1;
//   -ms-grid-row-span: 2;
//   -ms-grid-column: 1;
//   grid-area: image;
// }

// .track-play__svg {
//   width: 18px;
//   height: 17px;
//   fill: transparent;
//   stroke: #4e4e4e;
// }

// .track-play__author {
//   -ms-grid-row: 1;
//   -ms-grid-column: 2;
//   grid-area: author;
//   min-width: 49px;
// }

// .track-play__author-link {
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #ffffff;
//   white-space: nowrap;
// }

// .track-play__album {
//   -ms-grid-row: 2;
//   -ms-grid-column: 2;
//   grid-area: album;
//   min-width: 49px;
// }

// .track-play__album-link {
//   font-style: normal;
//   font-weight: 400;
//   font-size: 13px;
//   line-height: 24px;
//   color: #ffffff;
// }

// .track-play__like-dis {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//   -ms-flex-direction: row;
//   flex-direction: row;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
//   margin-left: 26%;
// }

// .track-play__like,
// .track-play__dislike {
//   padding: 5px;
// }

// .track-play__like-svg {
//   width: 14px;
//   height: 12px;
//   fill: transparent;
//   stroke: #696969;
// }

// .track-play__dislike {
//   margin-left: 28.5px;
// }

// .track-play__dislike-svg {
//   width: 14.34px;
//   height: 13px;
//   fill: transparent;
//   stroke: #696969;
// }

// .volume__content {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//   -ms-flex-direction: row;
//   flex-direction: row;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
//   -webkit-box-pack: end;
//   -ms-flex-pack: end;
//   justify-content: end;
// }

// .volume__image {
//   width: 13px;
//   height: 18px;
//   margin-right: 17px;
// }

// .volume__svg {
//   width: 13px;
//   height: 18px;
//   fill: transparent;
// }

// .volume__progress {
//   width: 109px;
// }

// .volume__progress-line {
//   width: 109px;
// }

// ._btn {
//   cursor: pointer;
// }

// ._btn-text:hover {
//   border-color: #d9b6ff;
//   color: #d9b6ff;
//   cursor: pointer;
// }

// ._btn-icon:hover svg {
//   fill: transparent;
//   stroke: #acacac;
//   cursor: pointer;
// }

// ._btn-text:active {
//   border-color: #ad61ff;
//   color: #ad61ff;
//   cursor: pointer;
// }

// ._btn-icon:active svg {
//   fill: transparent;
//   stroke: #ffffff;
//   cursor: pointer;
// }

// ._btn-icon:active .track-play__like-svg,
// ._btn-icon:active .track-play__dislike-svg {
//   fill: #696969;
//   stroke: #ffffff;
//   cursor: pointer;
// }
