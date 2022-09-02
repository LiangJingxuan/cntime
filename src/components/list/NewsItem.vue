<template>
  <router-link :to="{ path: '/news-details', query: { newsId: l.newsId } }" v-for="l in list" :key="l.newsId">
    <van-row gutter="10">
      <van-col :span="span(l.imgList, l.full)">
        <p class="digest">{{  l.title  }}</p>
      </van-col>
      <van-col :span="l.full ? 24 : 8" v-show="l.imgList" :class="{ 'img-mode': l.full }">
        <img mode="widthFix" :class="{ 'img-item': l.full }" :src="l.imgList && l.imgList[0]"
          v-lazy="l.imgList && l.imgList[0]">
      </van-col>
      <van-col span="24" class="source">
        <span>{{  l.source  }}</span>
        <span>{{  l.postTime  }}</span>
      </van-col>
    </van-row>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { newsInt } from "../../types/news"

const span = computed(() => (list: Object, full: boolean) => list && !full ? 16 : 24)
defineProps({
  list: Array<newsInt>
})

</script>

<style scoped lang="less">
.van-row {
  padding: 10px;
  line-height: 25px;
  border-bottom: 1px solid #edeff3;
}

.digest {
  display: -webkit-box;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-line;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.img-mode {
  height: 190px;
  border-radius: 5px;
  overflow: hidden;
}

.img-item {
  min-height: 190px;
  margin: 10px 0;
  height: auto;
}

img {
  width: 100%;
  height: 80px;
  border-radius: 5px;
}

.source {
  span {
    font-size: 13px;
    color: rgb(130, 140, 155);
    margin-right: 15px;
  }
}
</style>