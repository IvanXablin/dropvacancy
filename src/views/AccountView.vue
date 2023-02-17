<template>
<div class="account-view">
  <div class="account-view__content">
    <el-skeleton style="--el-skeleton-circle-size: 100px">
      <template #template>
        <el-skeleton-item variant="circle" />
      </template>
    </el-skeleton>
    <br />
    <el-skeleton />
  </div>
</div>
</template>

<style lang="scss" scoped>
.account-view {
  display: flex;
  justify-content: center;
  margin: 30px;

  &__content {
    width: 1200px;
    height: 700px;
    padding: 50px;
    background: rgba(0, 0, 0, 0.29);
  }
}
</style>