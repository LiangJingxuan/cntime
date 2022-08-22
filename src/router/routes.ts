import { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    // redirect: "/",
    name: "home",
    component: import("../views/home/index.vue"),
    children: []
  },
  {
    path: "/news",
    name: "news",
    component: import("../views/news/index.vue")
  }
]

export default routes