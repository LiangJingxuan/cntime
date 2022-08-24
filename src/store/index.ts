import { defineStore } from 'pinia'
import { APP, ACTION } from "./enum"

export const useAppStore = defineStore(APP.id, {
  state() {
    return {
      navShow: false
    }
  },
  getters: {},
  actions: {
    // 导航菜单状态控制
    [ACTION.CHANGE_ANV_SHOW](payload: boolean) {
      this.navShow = payload
    }
  },
})