import { Link } from "react-router-dom";

export function SidebarItems(props) {
  return (
    <div className="sidebar__item">
      <Link className="sidebar__link" href={props.item.link}>
        <img
          className="sidebar__img"
          src={props.item.img}
          alt="day's playlist"
        />
      </Link>
    </div>
  );
}
