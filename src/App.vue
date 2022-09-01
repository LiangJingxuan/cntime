<script setup lang="ts">
import { provide, nextTick, ref } from "vue"

// 更新页面
const isRouterActive = ref(true)
provide("reload", () => {
  isRouterActive.value = false
  nextTick(() => {
    isRouterActive.value = true
  })
})
</script>

<template>
  <div>
    <Header />
    <navs-all />
    <router-view v-if="isRouterActive"></router-view>
  </div>
</template>

<style scoped>
</style>
