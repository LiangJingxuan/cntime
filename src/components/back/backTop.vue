<template>
  <div class="reload" @click="reload" v-show="topState"></div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from "vue"

// 刷新
const load: any = inject("reload")
const reload = () => {
  load()
}
// 返回顶部
const topState = ref(false)
onMounted(() => {
  window.addEventListener("scroll", () => {
    let top = Math.floor(document.documentElement.scrollTop || document.body.scrollTop)
    topState.value = top > 600
  })
})

</script>

<style scoped lang="less">
.reload {
  position: fixed;
  bottom: 120px;
  right: 10px;
  width: 35px;
  height: 35px;
  background-color: rgba(214, 242, 255, 0.95);
  border-radius: 5px;

  &::after {
    content: '';
    display: inline-block;
    width: 35px;
    height: 35px;
    background-image: url(../../assets/img/elevator_icons_v4.svg);
    background-repeat: no-repeat;
    background-size: 120px;
    background-position: 6px;
  }
}
</style>