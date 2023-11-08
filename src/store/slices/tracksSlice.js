import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTracks: [],
  currentPage: "",
  currentTrack: null,
  indexCurrentTrack: null,
  isPlaying: false,
  shuffled: false,
  shuffledAllTracks: [],
  favouritesTracks: [],
  categoryArr: [],
  currentPlaylist: [],
  FiltersPlaylist: {
    sort: "По умолчанию",
    isFiltered: false,
    filterTracksArr: [],
  },
};

const getShuffledAllTracks = (array) => {
  const arrayTracks = new Array(...array);
  return arrayTracks.sort(() => Math.random() - 0.5);
};

export const trackSlice = createSlice({
  name: "tracksReducer",
  initialState,
  reducers: {
    setAllTracks: (state, action) => {
      state.allTracks = action.payload;
    },

    setFavouriteTracksAll: (state, action) => {
      state.favouritesTracks = action.payload;
    },

    setCategoryArr: (state, action) => {
      state.categoryArr = action.payload;
    },

    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentPlaylist: (state, action) => {
      state.currentPlaylist = action.payload;
    },

    setCurrentTrack: (state, action) => {
      const { track, indexCurrentTrack } = action.payload;
      state.currentTrack = track;
      state.indexCurrentTrack = indexCurrentTrack;
    },

    setNextTrack: (state, action) => {
      const { trackNext, indexNextTrack } = action.payload;
      state.currentTrack = trackNext;
      state.indexCurrentTrack = indexNextTrack;
    },

    setPrevTrack: (state, action) => {
      const { trackPred, indexPredTrack } = action.payload;
      state.currentTrack = trackPred;
      state.indexCurrentTrack = indexPredTrack;
    },

    toggleShuffleTracks: (state, action) => {
      state.shuffled = action.payload;

      if (state.shuffled) {
        console.log("Shuffled", getShuffledAllTracks(state.currentPlaylist));
      }
      state.shuffledAllTracks =
        state.shuffled && getShuffledAllTracks(state.currentPlaylist);
    },

    setFilterPlaylist: (state, action) => {
      const { sort } = action.payload;

      if (sort) {
        state.FiltersPlaylist.sort = sort;
      }

      const getFilteredTracks = () => {
        let filterArray = [];

        if (state.currentPage === "Main") {
          filterArray = state.allTracks;
        }
        if (state.currentPage === "Favoutites") {
          filterArray = state.favouritesTracks;
        }

        if (state.currentPage === "Category") {
          filterArray = state.categoryArr;
        }

        if (state.FiltersPlaylist.sort === "Сначала новые") {
          state.FiltersPlaylist.isFiltered = true;

          filterArray = filterArray.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          );
        } else if (state.FiltersPlaylist.sort === "Сначала старые") {
          state.FiltersPlaylist.isFiltered = true;

          filterArray = filterArray.sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
          );
        } else {
          state.FiltersPlaylist.isFiltered = false;
        }

        return filterArray;
      };

      state.FiltersPlaylist.filterTracksArr = getFilteredTracks();
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
  setFavouriteTracksAll,
  setCurrentPage,
  setCurrentPlaylist,
  setCategoryArr,
  setFilterPlaylist,
} = trackSlice.actions;

export default trackSlice.reducer;
