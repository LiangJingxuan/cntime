import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes"

const router = createRouter({
  history: createWebHashHistory(),

  routes
})

router.beforeEach((to, from, next) => {
  // 新闻详情页返回列表更新设置
  const paths = ["/", "/news"]
  from.path === "/news-details" && paths.indexOf(to.path) !== -1
    ? to.meta.isBack = true
    : to.meta.isBack = false
  next()
})

export default router