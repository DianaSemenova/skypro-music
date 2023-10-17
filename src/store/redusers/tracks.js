import {
  SET_ALL_TRACKS,
  SET_IS_PLAYING,
  SET_CURRENT_TRACK,
} from "../actions/types/tracks";

const initialState = {
  allTracks: [],
  currentTrack: null,
  isPlaying: false,
};

export default function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_TRACKS: {
      const { allTracks } = action.payload;

      return {
        ...state,
        allTracks,
      };
    }

    case SET_CURRENT_TRACK: {
      const { track } = action.payload;

      return {
        ...state,
        currentTrack: track,
      };
    }

    case SET_IS_PLAYING: {
      const isPlaying = action.payload;

      return {
        ...state,
        isPlaying,
      };
    }

    default:
      return state;
  }
}
