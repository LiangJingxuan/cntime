import { defineStore } from 'pinia'
import { storeNames } from "./names"

export const useTestStore = defineStore(storeNames.testId, {
  state() {
    return {
      num: 1
    }
  },
  getters: {},
  actions: {},
})