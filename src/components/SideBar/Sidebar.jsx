import React from "react";
import style from "./sidebar.module.scss";
import LogoMenu from '../images/Vector.svg'
import Logout from "../images/Vector.png";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <header className={style.header}>
      <div className={style.Sidebar}>
        <div className={style.SidbarWrapper}>
          <ul className={style.navigation}>
            <li className={style.navigationItemLogo}>
              <img src={LogoMenu} className={style.LogoMenu} />
            </li>
            <SidebarItem link="/" icon="home" />
            <SidebarItem link="/statistics" icon="gitter" />
            <SidebarItem link="/dashboard" icon="database" />
            <SidebarItem link="/sms" icon="mail" />
            <SidebarItem link="/notification" icon="bell" />
            <SidebarItem link="/setting" icon="cog" />
            <li className={style.navigationItemLogout}>
              <img src={Logout} className={style.LogoMenu} />
            </li>
          </ul>
        </div>
      </div>
      <div className={style.smSidebar}>
        <div className={style.smSidebarWrapper}>
          <ul className={style.smNavigation}>
            <SidebarItem link="/dashboard" icon="database" />
            <SidebarItem link="/sms" icon="mail" />
            <SidebarItem link="/" icon="home" />
            <SidebarItem link="/notification" icon="bell" />
            <SidebarItem link="/setting" icon="cog" />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
