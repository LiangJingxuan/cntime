<template>
  <div class="container">
    <navs />
    <div class="list-content">
      <news-list />
      <back-top />
    </div>
  </div>
</template>

<script setup lang="ts" name="home">

</script>

<style scoped lang="less">
.container {
  width: 100%;
  color: #000;
  border-radius: 10px 10px 0 0;
  position: relative;
  top: -60px;

  .list-content {
    margin: 20px 0;
  }
}
</style>