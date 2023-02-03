<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent/>
    <div class="main">
      <router-view/>
    </div>
  <div class="footer">

  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
}
.footer {
  padding: 30px;
}
</style>