import {
  SET_ALL_TRACKS,
  SET_IS_PLAYING,
  SET_CURRENT_TRACK,
} from "../types/tracks";

export const setAllTracks = (allTracks) => ({
  type: SET_ALL_TRACKS,
  payload: { allTracks },
});

export const setIsPlaying = (isPlaying) => ({
  type: SET_IS_PLAYING,
  payload: isPlaying,
});

export const setCurrentTrack = (track, indexCurrentTrack) => ({
  type: SET_CURRENT_TRACK,
  payload: { track, indexCurrentTrack },
});


