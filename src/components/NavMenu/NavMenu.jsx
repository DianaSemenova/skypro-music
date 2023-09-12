import "./NavMenu.css";
import { NavMenuItems } from "../NavMenuItems/NavMenuItems";
import { useState } from "react";

export function NavMenu() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      {visible && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <NavMenuItems item={{ link: "#", text: "Главное" }} />
            <NavMenuItems item={{ link: "#", text: "Мой плейлист" }} />
            <NavMenuItems item={{ link: "../signin.html", text: "Войти" }} />
          </ul>
        </div>
      )}
    </nav>
  );
}
