import { Icons } from "./SidebarLink";
import { Icon } from "react-feather";

export type SidebarLinkProps = {
  label: string;
  icon: keyof typeof Icons;
  link: string;
};
