<template>
  <div class="content">
    <p class="title">{{  title  }}</p>
    <p class="source">
      <span>{{  source  }}</span>
      <span>{{  ptime  }}</span>
    </p>
    <div v-html="content" />
  </div>
  <div v-show="content" class="footer">
    Copyright©
    <a href="https://github.com/LiangJingxuan/cntime">2022 LiangJingxuan/cntime</a>
  </div>
</template>

<script setup lang="ts" name="news-details">
import { reactive, toRefs } from "vue"
import { useRoute } from "vue-router"
import { newsDetailsData, getNewsDetails } from "../../types/news"

// 数据展示
const data = reactive(new newsDetailsData())
const { content, ptime, source, title } = toRefs(data)
const route = useRoute()
getNewsDetails(data, {
  newsId: route.query.newsId as string
})
</script>

<style scoped lang="less">
.content {
  width: 90%;
  min-height: calc(100vh - 206px);
  margin: 20px auto 50px;
  font-size: 18px;
  line-height: 30px;

  .title {
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .source {
    font-size: 13px;
    color: #9d9d9d;
    background-color: #f3f3f3;
    padding: 0 5px;
    border-radius: 5px;
    margin-bottom: 20px;

    span {
      margin-right: 10px;
    }
  }

  /deep/img {
    width: 100%;
    margin: 20px 0;
  }
}

.footer {
  width: 100%;
  height: 90px;
  text-align: center;
  background-color: #f5f5f5;
  color: #999;
  font-size: 13px;
  line-height: 90px;

  a {
    color: #576b95;
  }
}
</style>