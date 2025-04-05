import { create } from "zustand"
interface State {
    activeId: number;
    setActiveId: (activeId: number) => void;
}

//настройка библиотеки zustand
export const useCategoryStore = create<State>((set) => ({
    activeId: 1,
    setActiveId: (activeId: number) => set({activeId})
}))