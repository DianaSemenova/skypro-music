// import {
//   SET_ALL_TRACKS,
//   SET_IS_PLAYING,
//   SET_CURRENT_TRACK,
//   SET_NEXT_TRACK,
//   SET_PREV_TRACK,
//   TOGGLE_SHUFFLE_TRACKS,
// } from "../actions/types/tracks";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTracks: [],
  currentTrack: null,
  indexCurrentTrack: null,
  isPlaying: false,
  shuffled: false,
  shuffledAllTracks: [],
};

const getShuffledAllTracks = (array) => {
  const arrayTracks = new Array(...array);
  //  const arrayTracks = array.slice();
  return arrayTracks.sort(() => Math.random() - 0.5);
};

// export default function tracksReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_ALL_TRACKS: {
//       const { allTracks } = action.payload;

//       return {
//         ...state,
//         allTracks,
//       };
//     }

//     case SET_IS_PLAYING: {
//       const isPlaying = action.payload;

//       return {
//         ...state,
//         isPlaying,
//       };
//     }

//     case SET_CURRENT_TRACK: {
//       const { track, indexCurrentTrack } = action.payload;

//       return {
//         ...state,
//         currentTrack: track,
//         indexCurrentTrack,
//       };
//     }

//     case SET_NEXT_TRACK: {
//       const { trackNext, indexNextTrack } = action.payload;

//       return {
//         ...state,
//         currentTrack: trackNext,
//         indexCurrentTrack: indexNextTrack,
//       };
//     }

//     case SET_PREV_TRACK: {
//       const { trackPrev, indexPrevTrack } = action.payload;

//       return {
//         ...state,
//         currentTrack: trackPrev,
//         indexCurrentTrack: indexPrevTrack,
//       };
//     }

//     case TOGGLE_SHUFFLE_TRACKS: {
//       const { shuffled } = action.payload;
//       if (shuffled) {
//         console.log("Shuffled", getShuffledAllTracks(state.allTracks));
//       }

//       return {
//         ...state,
//         shuffled,
//         shuffledAllTracks: shuffled && getShuffledAllTracks(state.allTracks),
//       };
//     }

//     default:
//       return state;
//   }
// }

export const trackSlice = createSlice({
  name: "tracksReducer",
  initialState,
  reducers: {
    setAllTracks: (state, action) => {
      state.allTracks = action.payload;
    },

    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },

    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
      state.indexCurrentTrack = action.payload;
    },

    setNextTrack: (state, action) => {
      state.currentTrack = action.payload;
      state.indexCurrentTrack = action.payload;
    },

    setPrevTrack: (state, action) => {
      state.currentTrack = action.payload;
      state.indexCurrentTrack = action.payload;
    },

    toggleShuffleTracks: (state, action) => {
      // const { shuffled } = action.payload;
      state.shuffled = action.payload;
      if (state.shuffled) {
        console.log("Shuffled", getShuffledAllTracks(state.allTracks));
      }
      state.shuffledAllTracks =
        state.shuffled && getShuffledAllTracks(state.allTracks);
    },
  },
});

export const {
  setAllTracks,
  setCurrentTrack,
  setNextTrack,
  setPrevTrack,
  setIsPlaying,
  toggleShuffleTracks,
} = trackSlice.actions;

export default trackSlice.reducer;
