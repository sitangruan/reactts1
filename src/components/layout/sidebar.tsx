import { SidebarProps } from "../../common/interfaces";
import { NavLink } from "react-router-dom";
import classes from './sidebar.module.css';

export const Sidebar: React.FC<SidebarProps> = ({ links }: SidebarProps) => {
  const getNavLinkClasses = ({ isActive }: { isActive: boolean }) => isActive ? [classes.selectedLink, classes.link].join(' ') : classes.link;
  const linkRows = [];
  for (let i = 0; i < links.length; i++) {
    linkRows.push(<NavLink key={i} className={getNavLinkClasses} to={links[i].Route}>{links[i].DisplayName}</NavLink>)
  }
  
  return <nav className={classes.sidebarContainer}>
    {linkRows}
  </nav>
};