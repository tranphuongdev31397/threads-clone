import { SVGS } from "@/public/assets/imagePaths";

export const sidebarLinks = [
  {
    imgURL: SVGS.home,
    route: "/",
    label: "Home",
  },
  {
    imgURL: SVGS.search,
    route: "/search",
    label: "Search",
  },
  {
    imgURL: SVGS.heart,
    route: "/activity",
    label: "Activity",
  },
  {
    imgURL: SVGS.create,
    route: "/create-thread",
    label: "Create Thread",
  },
  {
    imgURL: SVGS.community,
    route: "/communities",
    label: "Communities",
  },
  {
    imgURL: SVGS.user,
    route: "/profile",
    label: "Profile",
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];
