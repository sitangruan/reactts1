/**
 * This the central place for all interface definitions.
 */

import { ReactNode } from "react";
import NavigationLink from "../modals/NavigationLink";

export interface SidebarProps {
  links: Array<NavigationLink>;
}

export interface InnerBodyProps {
  routes: Array<NavigationLink>;
};

export interface LoadingMaskProps {
  visible: boolean;
  showSpinner?: boolean;
  isMaskTransparent?: boolean;
}

export interface LoadingMaskServiceProps {
  children: ReactNode;
}

export interface AddTodoModalProps {
  onCloseModal(): void;
}