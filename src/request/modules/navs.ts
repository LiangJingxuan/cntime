import $http from "../config";

import { navsEnum } from "../enum"

/** 
 * 导航模块
 */
export default {
  // 导航列表查询
  [navsEnum.GET_NAVS_LIST]() {
    return $http.get(`${navsEnum.GET_NAVS_LIST}`)
  },
}