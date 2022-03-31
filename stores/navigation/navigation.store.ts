import create from "zustand";

type Page = {
  name: string;
  label: string;
  href: string;
  children?: Page[];
};

type NavigationState = {
  sideBarOpen: boolean;
  activePage: string;
  pages: Page[];
  toggleSideBar: () => void;
  setActivePage: (name: string) => void;
};

const intialState: Pick<
  NavigationState,
  "sideBarOpen" | "activePage" | "pages"
> = {
  sideBarOpen: false,
  activePage: "home",
  pages: [
    {
      name: "home",
      label: "Home",
      href: "/",
    },
  ],
};

const useNavigationStore = create<NavigationState>((set) => ({
  ...intialState,
  toggleSideBar: () => set((state) => ({ sideBarOpen: !state.sideBarOpen })),
  setActivePage: (name: string) => set(() => ({ activePage: name })),
}));

export default useNavigationStore;
