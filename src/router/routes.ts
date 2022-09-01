import { RouteRecordRaw } from "vue-router"

const modules = import.meta.glob('../views/*/*.vue');
const routes: RouteRecordRaw[] = [
  /** 首页 */
  {
    path: "/",
    name: "home",
    // component: import("../views/home/index.vue"),
    component: modules["../views/home/index.vue"],
    meta: {
      title: "新闻",
      i: true,
      enum: 0,
    },
    children: []
  },
  /** 抗疫 */
  {
    path: "/nCoV",
    name: "nCoV",
    // component: import("../views/nCoV/index.vue"),
    component: modules["../views/nCoV/index.vue"],
    meta: {
      title: "抗疫",
      i: true,
      enum: 1,
    },
  },
  /** 工具 */
  {
    path: "/tools",
    name: "tools",
    // component: import("../views/tools/index.vue"),
    component: modules["../views/tools/index.vue"],
    meta: {
      title: "工具",
      i: true,
      enum: 2,
    },
  },
  /** 新闻 */
  // 列表
  {
    path: "/news",
    name: "news",
    // component: import("../views/news/index.vue"),
    component: modules["../views/news/index.vue"],
  },
  // 详情
  {
    path: "/news-details",
    name: "news-details",
    // component: import("../views/news/news-details.vue"),
    component: modules["../views/news/news-details.vue"],
  },
]

export default routes