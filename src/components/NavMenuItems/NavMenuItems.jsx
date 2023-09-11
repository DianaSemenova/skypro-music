import "./NavMenuItems.css";
import { Link } from "react-router-dom";

export function NavMenuItems(props) {
  return (
    <li className="menu__item">
      <Link href={props.item.link} className="menu__link">
        {props.item.text}
      </Link>
    </li>
  );
}
