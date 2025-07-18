import { ROUTES } from "@/routes.gen";
import { lunalink } from "@bearstudio/lunalink";
import type { FC, ReactNode } from "react";
import {
  MdHomeFilled,
  MdEvent,
  MdInfo,
  MdFeed,
  MdPodcasts,
  MdBadge,
  MdOutlineChildCare,
  // MdBadge,
  // MdHandshake,
  // MdLocalActivity,
} from "react-icons/md";

type MainMenuScope = "all" | "mobile" | "desktop";
type MainMenuLevel = "primary" | "secondary";

const MAIN_MENU: Array<{
  icon: FC;
  label: ReactNode;
  href: string;
  exact?: boolean;
  scope: MainMenuScope;
  level: MainMenuLevel;
}> = [
  {
    label: "Home",
    href: "/",
    exact: true,
    icon: MdHomeFilled,
    scope: "mobile",
    level: "primary",
  },
  {
    label: "Events",
    href: "/events",
    icon: MdEvent,
    scope: "all",
    level: "primary",
  },
  {
    label: "Podcasts",
    href: "/podcasts",
    icon: MdPodcasts,
    scope: "all",
    level: "primary",
  },
  {
    label: "News",
    href: "/news",
    icon: MdFeed,
    scope: "all",
    level: "primary",
  },
  {
    label: "Community members",
    href: "/people",
    icon: MdBadge,
    scope: "all",
    level: "secondary",
  },
  // {
  //   label: "Partners",
  //   href: "/partners",
  //   icon: MdHandshake,
  //   scope: "all",
  //   level: "secondary",
  // },
  // {
  //   label: "Organize an event",
  //   href: "/organize-event",
  //   icon: MdLocalActivity,
  //   scope: "all",
  //   level: "secondary",
  // },
  {
    label: "For Kids",
    href: lunalink(ROUTES.fr.events["for-kids"].__path, {}),
    icon: MdOutlineChildCare,
    scope: "all",
    level: "secondary",
  },
  {
    label: "About Fork it!",
    href: "/about",
    icon: MdInfo,
    scope: "all",
    level: "secondary",
  },
];

export function getMainMenuMobileItems(level: MainMenuLevel) {
  return MAIN_MENU.filter(
    (item) =>
      (item.scope === "all" || item.scope === "mobile") && item.level === level,
  );
}

export function getMainMenuDesktopItems(level: MainMenuLevel) {
  return MAIN_MENU.filter(
    (item) =>
      (item.scope === "all" || item.scope === "desktop") &&
      item.level === level,
  );
}

export function getMainMenuItems() {
  return MAIN_MENU;
}
