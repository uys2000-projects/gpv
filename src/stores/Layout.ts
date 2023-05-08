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
  actions: {
    SetUserHeader(): void {
      this.Menu.Left = {
        Text: "User",
        Route: "/app/user",
      };
      this.Menu.Right = {
        Text: "0 Words",
        Route: "/app/bought",
      };
    },
    SetDefaultHeader(): void {
      this.Menu.Left = {
        Text: "Login",
        Route: "/login",
      };
      this.Menu.Right = {
        Text: "Pricing",
        Route: "/pricing",
      };
    },
    ChangeHeaderButton(side: "Right" | "Left", button: HeaderButton): void {},
  },
  getters: {
    LeftButton: (state) => state.Menu.Left,
    RightButton: (state) => state.Menu.Right,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot));
}
