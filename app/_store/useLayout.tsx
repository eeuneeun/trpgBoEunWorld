import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Common Layout Info
type TCommonLayoutInfo = {
  isSnbOpen: boolean;
  isModalOpen: boolean;
  toggleOpen: (target: string, newState: boolean) => void;
  clearLayout: () => void;
};
const useLayoutStore = create(
  persist<TCommonLayoutInfo>(
    (set) => ({
      isSnbOpen: false,
      isModalOpen: false,
      toggleOpen: (target, newState) => set({ [`${target}`]: newState }),
      clearLayout: () => set({ isSnbOpen: false, isModalOpen: false }),
    }),
    {
      // name of the item in the storage (must be unique)
      name: "Commonlayout",
      storage: createJSONStorage(() => sessionStorage),
      // (optional) by default, 'localStorage' is used
    }
  )
);

export default useLayoutStore;
