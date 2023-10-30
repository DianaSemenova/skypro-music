/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppRoutes } from "./components/routes/routes";
import { UserContext } from "./components/Context/Context";
import { store } from "./store/store";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [isLoading, setLoading] = useState(true);

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

  return (
    <UserContext.Provider value={{ user, handleLogout }}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes
            user={user}
            setUser={setUser}
            isLoading={isLoading}
          />
        </BrowserRouter>
      </Provider>
    </UserContext.Provider>
  );
}

export default App;
