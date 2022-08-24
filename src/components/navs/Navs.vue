<template>
  <div class="navs">
    <van-grid :column-num="6" :border="false">
      <van-grid-item v-for="l in list" :key="l.typeId" :text="l.typeName" class="gitem" />
      <van-grid-item key="更多" text="更多" class="gitem" @click="changeNavShow" />
    </van-grid>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, toRefs } from "vue"
import { navsData, getNavs } from "../../types/navs"
import { useAppStore } from "../../store"
import { ACTION } from "../../store/enum"

// 获取选中导航列表
const data = reactive(new navsData())
const { list } = toRefs(data)
// 设置导航页显示状态
const app = useAppStore()
const changeNavShow = () => app[ACTION.CHANGE_ANV_SHOW](true)

onMounted(() => {
  // 获取选中导航列表
  getNavs(data)
})
</script>

<style scoped lang="less">
.navs {
  width: 92%;
  height: 100px;
  border-radius: 10px;
  margin: auto;
  background-color: #fff;
  box-shadow: 0px 3px 3px rgb(236, 236, 236);
  overflow: hidden;
}

:deep(.van-grid-item__content) {
  padding: 5px 0;
}

:deep(.van-grid-item__text) {
  font-size: 15px;
}
</style>