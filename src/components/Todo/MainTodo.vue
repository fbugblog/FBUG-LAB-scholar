<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import IftaLabel from "primevue/iftalabel";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Textarea from "primevue/textarea";

const newTaskTitle = ref("");
const todoList = ref<{ id: number; title: string; isEditing: boolean }[]>([]);

const addTodo = () => {
  if (newTaskTitle.value == "") {
    return;
  }
  const id = new Date().getTime();
  todoList.value.push({ id: id, title: newTaskTitle.value, isEditing: false });

  // init todo
  newTaskTitle.value = "";
};
const toggleIsEditing = (data: any) => {
  data.isEditing = !data.isEditing;
};
</script>
<template>
  <div>
    <IftaLabel>
      <InputText id="new-task-name" v-model="newTaskTitle" size="large" />
      <label for="new-task-name">New Task Name</label>
      <Button class="ml-6" @click="addTodo">Add</Button>
    </IftaLabel>
    <div>
      <DataTable :value="todoList" class="w-full">
        <Column field="title" header="Title"></Column>
        <Column header="Memo">
          <template #body="slotProps">
            <Textarea
              class="w-96"
              v-model="slotProps.data.memo"
              v-if="slotProps.data.isEditing"
              @focusout="() => toggleIsEditing(slotProps.data)"
            ></Textarea>
            <div v-else @click="() => toggleIsEditing(slotProps.data)">
              {{ slotProps.data.memo }}
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>
<style></style>
