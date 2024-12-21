<script setup lang="ts">
import MainHeader from "@/components/Header/MainHeader.vue";
import MainFooter from "@/components/Footer/MainFooter.vue";
</script>

<template>
  <div>
    <MainHeader />
    <RouterView />
    <MainFooter />
  </div>
</template>
