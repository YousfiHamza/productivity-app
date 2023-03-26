"use client";
import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SidebarLinkProps } from "./types";

export const Icons = { Settings, User, Grid, Calendar };

const SidebarLink = ({ link, icon }: SidebarLinkProps) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link) {
    isActive = true;
  }

  const Icon = Icons[icon];
  return (
    <Link href={link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
