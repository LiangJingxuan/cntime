<template>
  <div class="list">
    <van-list v-model:loading="loading" v-model:error="error" :finished="finished" finished-text="暂无数据"
      error-text="请求失败，点击重新加载" @load="onLoad">
      <news-item :list="list" />
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref, onActivated, inject } from "vue"
import { useRoute } from "vue-router"
import { newsData, getNewsList } from "../../types/news"

const data = reactive(new newsData())
const { list } = toRefs(data)

// 分页
const loading = ref(false)
const finished = ref(false)
const error = ref(false)
const route = useRoute()
let page = 1
const onLoad = () => {
  getNewsList(data, { typeId: route.query.id as any || 518, page: page++ }, () => {
    // 加载状态结束
    loading.value = false
    // 数据全部加载完成
    if (!list.value.length) finished.value = true
  }, () => {
    // 错误处理
    error.value = true
    page--
  })
}

// 缓存数据更新设置
const load: any = inject("reload")
onActivated(() => {
  if (page === 1) return
  if (!route.meta.isBack) load()
})
</script>

<style scoped lang="less">
.list {
  width: 95%;
  height: auto;
  margin: auto;
  background-color: #fff;
}
</style>