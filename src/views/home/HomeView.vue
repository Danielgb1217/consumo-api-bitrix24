<template>
  <div class="grid grid-cols-1 md:grid-cols-[3fr,9fr] gap-4">
    <div class="flex items-center justify-center h-screen"> 
      <img
      class="object-center"
        src="../../assets/img/bitrix24.png"
      />
    </div>
    <div>
      <tasks-component/>      
    </div>
  </div>
</template>

<script>
  import TasksComponent from "../../components/TasksComponent.vue";

  export default {
    components: { TasksComponent },
    name: "HomeView",
  };
</script>