import axios from "axios";
// 创建axios实例
const service = axios.create({
  baseURL: "https://www.mxnzp.com/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset-utf-8"
  }
})
// 请求拦截
service.interceptors.request.use((config) => {
  const app_id = "ylnmzqrottjqmhja"
  const app_secret = "QUdMdmliN21Xd2xoZzRRUWYxOWVRUT09"
  const type = config.method === "get" ? "params" : "data"
  config[type] = {
    app_id,
    app_secret,
    ...config[type]
  }
  return config
})
// 响应拦截
service.interceptors.response.use((res) => {
  const code: number = res.data.code
  if (!code) return Promise.reject(res.data)
  return res.data
}, (err) => {
  console.log(err);
})

export default service