<script setup lang="ts">
import Header from "./components/header/Header.vue"
import NavsAll from "./components/navs/NavsAll.vue";
</script>

<template>
  <div>
    <Header />
    <navs-all />
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
