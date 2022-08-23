import { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: import("../views/home/index.vue"),
    meta: {
      title: "新闻",
      i: true,
      enum: 0,
    },
    children: []
  },
  {
    path: "/nCoV",
    name: "nCoV",
    component: import("../views/nCoV/index.vue"),
    meta: {
      title: "抗疫",
      i: true,
      enum: 1,
    },
  },
  {
    path: "/tools",
    name: "tools",
    component: import("../views/tools/index.vue"),
    meta: {
      title: "工具",
      i: true,
      enum: 2,
    },
  }
]

export default routes