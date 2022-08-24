<template>
  <van-popup v-model:show="navShow" position="left" :style="{ height: '100vh', width: '100%' }">
    <!-- 标题 -->
    <van-nav-bar title="全部频道" @click-right="onClickRight">
      <template #right>
        <van-icon name="close" size="20" color="#000" />
      </template>
    </van-nav-bar>
    <div class="content">
      <!-- 我的频道 -->
      <van-row>
        <van-col span="5" class="title">我的频道</van-col>
        <van-col span="6" class="sm-title">点击进入频道</van-col>
        <van-col span="13" class="action">
          <!-- <span class="sm-btn-reset">恢复默认设置</span> -->
          <!-- <span class="sm-btn">编辑</span> -->
        </van-col>
      </van-row>
      <van-grid :border="false">
        <van-grid-item v-for="o in optList" :key="o.typeId">
          <p class="item">
            <!-- <van-icon name="clear" /> -->
            {{ o.typeName }}
          </p>
        </van-grid-item>
      </van-grid>
      <!-- 推荐频道 -->
      <van-row>
        <van-col span="5" class="title">推荐频道</van-col>
        <van-col span="6" class="sm-title">点击进入频道</van-col>
        <van-col span="13" class="action"></van-col>
      </van-row>
      <van-grid :border="false">
        <van-grid-item v-for="c in cutList" :key="c.typeId">
          <p class="item">{{ c.typeName }}</p>
        </van-grid-item>
      </van-grid>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { toRefs, watch, onMounted, reactive } from "vue"
import { useRouter } from "vue-router"
import { useAppStore } from "../../store"
import { ACTION } from "../../store/enum"
import { navsAllData, getStoreNavs } from "../../types/navs"

// 导航开关控制
const app = useAppStore()
const { navShow } = toRefs(app)
const router = useRouter()
const onClickRight = () => app[ACTION.CHANGE_ANV_SHOW](false)

// 渲染导航列表
const data = reactive(new navsAllData())
const { cutList, optList } = toRefs(data)

console.log(data);


onMounted(() => {
  // 渲染导航列表
  getStoreNavs(data)
})
// 监听路由控制导航开关
watch(() => router.currentRoute.value.path, () => {
  if (!app.navShow) return
  app[ACTION.CHANGE_ANV_SHOW](false)
})
</script>

<style scoped lang="less">
:deep(.van-nav-bar__title) {
  font-size: 18px;
}

.content {
  width: 90%;
  height: 200px;
  margin: 15px auto;

  .van-row {
    position: relative;
    height: 16px;
    line-height: 16px;
  }

  .title {
    font-size: 15px;
  }

  .sm-title {
    font-size: 12px;
    color: #9b9ea3;
  }

  .action {
    position: relative;
  }

  .sm-btn,
  .sm-btn-reset {
    position: absolute;
    right: 0;
    font-size: 0.32rem;
    color: #9b9ea3;
    background: #eeeff2;
    padding: 1px 10px;
    border-radius: 11px;
    margin-left: 8px;
  }

  .sm-btn-reset {
    right: 50px;
  }

  .van-grid {
    margin: 20px 0 40px;
  }

  .item {
    background-color: #eeeff2;
    border-radius: 5px;
    font-size: 15px;
    padding: 7px 10px;
    text-align: center;
    width: 70%;
    position: relative;

    .van-icon {
      position: absolute;
      right: -5px;
      top: -5px;
      color: #898989;
    }
  }
}

:deep(.van-grid-item__content) {
  padding: 7px;
}
</style>