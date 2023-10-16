import { SET_ALL_TRACKS } from "../types/tracks";

export const setAllTracks = (allTracks) => ({
  type: SET_ALL_TRACKS,
  payload: { allTracks },
});
