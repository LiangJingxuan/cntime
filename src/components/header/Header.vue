<template>
  <div class="header">
    <van-nav-bar @click-right="changeNavShow">
      <template #left>
        <img src="../../assets/img/logo.png">
        <span>资讯网</span>
      </template>
      <template #right>
        <van-icon name="wap-nav" />
      </template>
    </van-nav-bar>
    <van-tabs v-model:active="active" color="rgba(103,245,255,1)" background="none" line-width="20"
      title-active-color="#fff" title-inactive-color="rgba(255,255,255, .5)" @change="change">
      <van-tab :title="r.meta.title" v-for="r in routes" :key="r.path" />
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"
import { path } from "../../router/enum"
import { useAppStore } from "../../store"
import { ACTION } from "../../store/enum"

// 渲染路由
const router = useRouter()
const routes = computed(() => router.getRoutes().filter(v => v.meta.i))
const active = computed(() => router.currentRoute.value.meta.enum)
const change = (n: number) => router.push(path[n])
// 设置导航页显示状态
const app = useAppStore()
const changeNavShow = () => app[ACTION.CHANGE_ANV_SHOW](true)
</script>

<style scoped lang="less">
.header {
  background: linear-gradient(176deg, rgba(76, 126, 255, 1) 0%, rgba(100, 174, 252, 1) 100%);
  color: #fff;
  padding-bottom: 50px;
  height: 110px;
}

:deep(.van-tab) {
  font-size: 17px;
}

.van-nav-bar {
  background: none;

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
  }
}
</style>