import NavigationLink from "../modals/NavigationLink";

export interface SidebarProps {
  links: Array<NavigationLink>;
}

export interface InnerBodyProps {
  routes: Array<NavigationLink>;
};