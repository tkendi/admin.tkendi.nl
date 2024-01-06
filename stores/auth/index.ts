import { createStore } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import { setKvValue } from "@/lib/kv/kvClient";

import { AuthStoreType } from "./index.d";
import initialState from "./states";

export const authStore = createStore<AuthStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        clearStorage: () => set({ ...initialState }),
        setTokens: ({ access, refresh }) =>
          set({ accessToken: access, refreshToken: refresh }),
      }),
      {
        name: "authStore",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    { name: "authDevTools", enabled: true },
  ),
);

authStore.subscribe(state => {
  setKvValue({ key: "accessToken", value: state.accessToken });
});
