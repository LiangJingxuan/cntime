import $http from "../config"
import { newsEnum } from "../enum"

/** 
 * 新闻模块
 */
export default {
  // 新闻列表查询
  [newsEnum.GET_NEWS_LIST](params: any) {
    return $http.get(`${newsEnum.GET_NEWS_LIST}`, { params })
  },
  // 新闻详情查询
  [newsEnum.GET_NEWS_DETAILS](params: any) {
    return $http.get(`${newsEnum.GET_NEWS_DETAILS}`, { params })
  }

}