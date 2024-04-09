import { create } from "zustand";

interface MainSidebar {
    Open : boolean;
    setIsOpen : (isOpen : boolean) => void
    Nav : boolean;
    setIsNav : (isNav : boolean) => void
}

export const useSidebar = create<MainSidebar>((set) => ({
    Open : false,
    Nav : false,
    setIsOpen : (isOpen) => set(() => ({Open : isOpen})),
    setIsNav : (isNav : boolean) => set(() => ({Nav : isNav}))
}))