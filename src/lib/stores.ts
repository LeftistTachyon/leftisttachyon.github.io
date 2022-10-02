import { writable } from "svelte/store";

function createHeaderHeight() {
  const { subscribe, set } = writable(0);

  return {
    subscribe,
    set,
  };
}

export const headerHeight = createHeaderHeight();
