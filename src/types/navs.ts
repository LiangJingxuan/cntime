import { navs } from "../request"
import { navsEnum } from "../request/enum"

interface navsInt {
  typeId: number
  typeName: string
}

// 推荐导航
export class navsData {
  list: Array<navsInt> = []
}
export const getNavs = async (data: navsData) => {
  const list = localStorage.getItem("optNavs")
  if (list) {
    data.list = JSON.parse(list)
    return
  }
  const res = await navs[navsEnum.GET_NAVS_LIST]()
  const opt = res.data.filter((item: navsInt, index: number) => index < 10)
  const cut = res.data.filter((item: navsInt, index: number) => index >= 10)
  data.list = opt
  localStorage.setItem("cutNavs", JSON.stringify(cut))
  localStorage.setItem("optNavs", JSON.stringify(opt))
}

// 全部导航
export class navsAllData {
  optList: Array<navsInt> = []
  cutList: Array<navsInt> = []
}
export const getStoreNavs = (data: navsAllData) => {
  const opt = localStorage.getItem("optNavs")
  const cut = localStorage.getItem("cutNavs")
  data.optList = JSON.parse(opt || "[]")
  data.cutList = JSON.parse(cut || "[]")
  
}