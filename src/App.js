/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppRoutes } from "./components/routes/routes";
import { UserContext } from "./components/Context/Context";
import { store } from "./store/store";
import {
  shuffledSelector,
  currentPlaylistSelector,
  shuffledAllTracksSelector,
} from "./store/selectors/tracks";
import { setCurrentTrack } from "./store/slices/tracksSlice";

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [isLoading, setLoading] = useState(true);

  const shuffled = useSelector(shuffledSelector);
  const currentPlaylist = useSelector(currentPlaylistSelector);
  const shuffledAllTracks = useSelector(shuffledAllTracksSelector);
  const arrayTracksAll = shuffled ? shuffledAllTracks : currentPlaylist;

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setLoading(false);
        console.log("isLoading", isLoading);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/auth";
  };

  const handleCurrentTrack = (track) => {
    if (track) {
      const indexCurrentTrack = arrayTracksAll.indexOf(track);
      dispatch(setCurrentTrack({ track, indexCurrentTrack }));
      console.log(track);
      console.log("indexCurrentTrack: ", indexCurrentTrack);
    }
  };

  return (
    <UserContext.Provider value={{ user, handleLogout }}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes
            user={user}
            setUser={setUser}
            isLoading={isLoading}
            handleCurrentTrack={handleCurrentTrack}
          />
        </BrowserRouter>
      </Provider>
    </UserContext.Provider>
  );
}

export default App;
