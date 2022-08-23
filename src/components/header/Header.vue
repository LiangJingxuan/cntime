<template>
  <div class="header">
    <van-nav-bar>
      <template #left>
        <img src="../../assets/img/logo.png">
        <span>资讯网</span>
      </template>
      <template #right>
        <van-icon name="wap-nav" />
      </template>
    </van-nav-bar>
    <van-tabs v-model:active="active" swipeable color="rgba(103,245,255,1)" background="none" line-width="20"
      title-active-color="#fff" title-inactive-color="rgba(255,255,255, .5)" @change="change">
      <van-tab :title="r.meta.title" v-for="r in routes" :key="r.path">
        <template #default>
          <slot></slot>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"
import { path } from "../../router/enum"

const router = useRouter()
const routes = computed(() => router.getRoutes().filter(v => v.meta.i))
const active = computed(() => router.currentRoute.value.meta.enum)
const change = (n: number) => router.push(path[n])
</script>

<style scoped lang="less">
.header {
  background: linear-gradient(176deg, rgba(76, 126, 255, 1) 0%, rgba(100, 174, 252, 1) 100%);
  color: #fff;
  padding-bottom: 50px;
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