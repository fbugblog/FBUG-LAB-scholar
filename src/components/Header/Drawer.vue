<script setup lang="ts">
import { Button, Drawer } from "primevue";
import { ref } from "vue";
const visible = ref(false);
</script>

<template>
  tes
  <div class="card flex justify-center">
    <Drawer v-model:visible="visible" header="Drawer">
      <p>samples</p>
    </Drawer>
    <Button icon="pi pi-arrow-right" @click="visible = true">sss</Button>
  </div>
</template>
