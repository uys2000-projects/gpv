export const useLayoutStore = defineStore("LayoutStore", {
  state: () => {
    return {
      Layout: "default",
      Menu: {
        Left: { Text: "Login", Route: "/login" } as HeaderButton,
        Right: { Text: "Pricing", Route: "/pricing" } as HeaderButton,
      },
    };
  },
  actions: {},
  getters: {
    LeftButton: (state) => state.Menu.Left,
    RightButton: (state) => state.Menu.Right,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot));
}
