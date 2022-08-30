import { news } from "../request"
import { newsEnum } from "../request/enum"

interface newsPay {
  typeId: number
  page: number
}

export interface newsInt {
  title: string
  source: string
  newsId: string
  postTime: string
  imgList: string
}

// 查询新闻列表
export class newsData {
  list: Array<newsInt> = []
}
export const getNewsList = async (data: newsData, payload: newsPay, callback: Function, catchError: Function) => {
  try {
    const res = await news[newsEnum.GET_NEWS_LIST](payload)
    data.list = data.list.concat(res.data)
  } catch (error) {
    catchError()
  }
  callback()
}