<script setup lang="ts">
import { provide, nextTick, ref } from "vue"
import Header from "./components/header/Header.vue"
import NavsAll from "./components/navs/NavsAll.vue"

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
