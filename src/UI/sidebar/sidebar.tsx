import React, { ReactElement } from "react";
import clsx from "clsx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<IProps> = ({ children }) => {
  const [sidebarStatus, setSidebarStatus] = React.useState<Boolean>(true);

  function switchSidebar() {
    setSidebarStatus(!sidebarStatus);
  }

  function SidebarSwitcher(): ReactElement {
    if (sidebarStatus) {
      return <IoIosArrowBack onClick={switchSidebar} />;
    } else {
      return <IoIosArrowForward onClick={switchSidebar} />;
    }
  }

  return (
    <aside
      className={clsx([sidebarStatus ? "sidebar__open" : "sidebar__closed"])}
    >
      {children}
      <SidebarSwitcher />
    </aside>
  );
};

export default Sidebar;
