import { BrowserRouter } from "react-router-dom";
import * as S from "./NavMenuItems.styles";

export function NavMenuItems(props) {
  return (
    <S.menuItem>
      <BrowserRouter>
        <S.menuLink href={props.item.link} className="menu__link">
          {props.item.text}
        </S.menuLink>
      </BrowserRouter>
    </S.menuItem>
  );
}
