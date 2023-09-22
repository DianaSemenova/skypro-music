import { SidebarItems } from "../SidebarItems/SidebarItems";
import * as S from "./Sidebar.style";

export function Sidebar({ isLoading }) {
  return (
    <S.mainSidebar>
      <S.sidebarPersonal>
        <S.sidebarPersonalName>Sergey.Ivanov</S.sidebarPersonalName>
        <S.sidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.sidebarIcon>
      </S.sidebarPersonal>
      <S.sidebarBlock>
        <S.sidebarList>
          <SidebarItems
            item={{ link: "#", img: "img/playlist01.png", loading: isLoading }}
          />
          <SidebarItems
            item={{ link: "#", img: "img/playlist02.png", loading: isLoading }}
          />
          <SidebarItems
            item={{ link: "#", img: "img/playlist03.png", loading: isLoading }}
          />
        </S.sidebarList>
      </S.sidebarBlock>
    </S.mainSidebar>
  );
}
