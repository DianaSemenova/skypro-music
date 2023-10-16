import { SET_ALL_TRACKS } from "../actions/types/tracks";

const initialState = {
  allTracks: [],
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

    default:
      return state;
  }
}
