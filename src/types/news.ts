import { news } from "../request"
import { newsEnum } from "../request/enum"

interface newsPay {
  typeId: number
  page: number
}

interface newsDetailsPay {
  newsId: string
}

export interface newsInt {
  title: string
  source: string
  newsId: string
  postTime: string
  imgList: string
}
export interface newsDetailsInt {
  content: string
  ptime: string
  source: string
  title: string
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

// 查询新闻详情
export class newsDetailsData {
  content: string = ""
  ptime: string = ""
  source: string = ""
  title: string = ""
}
export const getNewsDetails = async (data: newsDetailsInt, payload: newsDetailsPay) => {
  const res = await news[newsEnum.GET_NEWS_DETAILS](payload)
  const { content, images, ptime, source, title } = res.data
  let html = content

  // 图片处理  
  if (images.length) {
    const _list = content.split("资料图")
    const list = _list.map((item: string, index: number) => {
      if (!images[index]) return
      return item + `<img src=${images[index].imgSrc} />`
    })
    html = list.join("")
  }
  data.content = html
  data.title = title
  data.ptime = ptime
  data.source = source
}