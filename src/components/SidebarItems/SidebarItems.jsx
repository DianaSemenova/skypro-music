import { BrowserRouter } from "react-router-dom";
import * as S from "./SidebarItems.style";
import { SkeletonSidebar } from "../TrackListItem/Tracks.style";

export function SidebarItems(props) {
  return (
    <S.sidebarItem>
      {props.item.loading ? (
        <BrowserRouter>
          <S.sidebarLink href={props.item.link}>
            <S.sidebarImg src={props.item.img} alt="day's playlist" />
          </S.sidebarLink>
        </BrowserRouter>
      ) : (
        <SkeletonSidebar> </SkeletonSidebar>
      )}
    </S.sidebarItem>
  );
}
