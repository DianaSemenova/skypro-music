/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { AppRoutes } from "./components/routes/routes";
import { UserContext } from "./components/Context/Context";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  return (
    <UserContext.Provider value={{ user }}>
      <AppRoutes user={user} setUser={setUser} />
    </UserContext.Provider>
  );
}

export default App;
