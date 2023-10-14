import { useState } from "react";
import { AppRoutes } from "./components/routes/routes";
// import { UserContext } from "./components/Context/Context";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  // useEffect(() => {
  //   setUser(localStorage.getItem("user") ? localStorage.getItem("user") : null);
  //   console.log(localStorage.getItem("user"));

  //   const currentIsLoginMode = localStorage.getItem("isLoginMode");
  //   console.log(currentIsLoginMode);
  // }, []);

  

  // const [user, setUser] = useState(false);
  // console.log(localStorage);
  // console.log(user);

  // const handleSignIn = () => {
  //   localStorage.setItem("user", "true");
  //   const curentLocalStorage = localStorage.getItem("user");
  //   console.log(curentLocalStorage);
  //   setUser(curentLocalStorage);
  // };

  // const handleSignUp = () => {
  //   localStorage.removeItem("user");
  //   const curentLocalStorage = localStorage.getItem("user");
  //   console.log(curentLocalStorage);
  //   setUser(curentLocalStorage);
  // };

  return (
    <AppRoutes
      user={user}
      setUser={setUser}
    />
  );
}

export default App;
