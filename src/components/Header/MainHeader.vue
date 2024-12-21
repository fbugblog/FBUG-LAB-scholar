<script setup lang="ts">
import "primeicons/primeicons.css";
import HeaderDrawer from "@/components/Header/Drawer.vue";
</script>
<template>
  <div class="m-3">
    <i class="pi pi-bars"></i>
    <div class="inline-block">
      <div class="flex justify-center">
        <div>main header</div>
        <HeaderDrawer />
      </div>
    </div>
  </div>
</template>
