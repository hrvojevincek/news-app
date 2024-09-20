export type SidebarItem = {
  name: string;
  id: string;
  route: string;
};

export const sidebarItems: SidebarItem[] = [
  { name: "Home", id: "home", route: "/" },
  { name: "General", id: "general", route: "/general" },
  { name: "Business", id: "business", route: "/business" },
  { name: "Health", id: "health", route: "/health" },
  { name: "Science", id: "science", route: "/science" },
  { name: "Sports", id: "sports", route: "/sports" },
  {
    name: "Technology",
    id: "technology",
    route: "/technology",
  },
];
