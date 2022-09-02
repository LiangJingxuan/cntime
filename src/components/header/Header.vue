<template>
  <van-sticky>
    <van-nav-bar @click-right="changeNavShow">
      <template #left>
        <router-link to="/">
          <img src="../../assets/img/logo.png">
        </router-link>
        <span>{{  title  }}</span>
      </template>
      <template #right>
        <van-icon name="wap-nav" />
      </template>
    </van-nav-bar>
  </van-sticky>
  <div class="header" v-if="active < 3">
    <van-tabs v-model:active="active" color="rgba(103,245,255,1)" background="none" line-width="20"
      title-active-color="#fff" title-inactive-color="rgba(255,255,255, .5)" @change="change">
      <van-tab :title="(r.meta.title as string)" v-for="r in routes" :key="r.path" />
    </van-tabs>
  </div>
  <!-- <keep-alive>
    <router-view v-if="route.meta.keepAlive" />
  </keep-alive> -->
  <!-- v-if="isRouterActive" -->
  <router-view v-slot="{ Component }" v-if="isRouterActive">
    <keep-alive>
      <component :key="route.name" :is="Component" v-if="route.meta.keepAlive"></component>
    </keep-alive>
    <component :key="route.name" :is="Component" v-if="!route.meta.keepAlive"></component>
  </router-view>
</template>

<script setup lang="ts">
import { computed, provide, nextTick, ref } from "vue"
import { useRouter, useRoute } from "vue-router"
import { path } from "../../router/enum"
import { useAppStore } from "../../store"
import { ACTION } from "../../store/enum"

// 渲染路由
const router = useRouter()
const routes = computed(() => router.getRoutes().filter(v => v.meta.i))
const active = computed(() => router.currentRoute.value.meta.enum as number)
const change = (n: number) => router.push(path[n])

// 设置导航页显示状态
const app = useAppStore()
const changeNavShow = () => app[ACTION.CHANGE_NAV_SHOW](true)

// 设置导航页标题
const route = useRoute()
const title = computed(() => {
  const t = route.query.navTitle
  return t ? t + " · 频道" : "资讯网"
})

// keeplive
const keep = computed(() => {
  console.log();

  return route.meta.keepAlive
})

// 更新页面
const isRouterActive = ref(true)
provide("reload", () => {
  isRouterActive.value = false
  nextTick(() => {
    isRouterActive.value = true
  })
})
</script>

<style scoped lang="less">
.header {
  // background: linear-gradient(176deg, rgba(76, 126, 255, 1) 0%, rgba(100, 174, 252, 1) 100%);
  background-color: #528bfe;
  color: #fff;
  padding-bottom: 50px;
  height: 70px;
}

:deep(.van-tab) {
  font-size: 17px;
}

.van-nav-bar {
  // background: none;
  background-color: #528bfe;
  color: #fff;

  .van-icon {
    font-size: 25px;
    color: #fff;
  }

  img {
    width: 110px;

  }

  span {
    border-left: 1px solid rgba(255, 255, 255, .3);
    border-width: 2px;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 18px;
    height: 15px;
    line-height: 15px;
    font-weight: bold;
  }
}
</style>