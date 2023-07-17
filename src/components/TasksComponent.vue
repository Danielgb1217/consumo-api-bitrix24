<template>
  <div class="container w-11/12 mx-auto">
    <div class="text-center">
      <h1 class="text-4xl font-bold py-4">API REST Britix24</h1>
      <p class="text-lg text-justify">
        List of tasks consumed from the Britix24 rest api in their tasks and
        projects service. Some tasks were created, a webhook was generated and
        with this the necessary endpoint to list the tasks was obtained:
      </p>
      <div class="flex justify-center">
        <a
          href="https://b24-lcvnqs.bitrix24.es/rest/1/5o18ndm65ly5menm/task.ctaskitem.getlist.json"
          class="text-blue-600 underline break-all max-w-full"
        >
          https://b24-lcvnqs.bitrix24.es/rest/1/5o18ndm65ly5menm/task.ctaskitem.getlist.json
        </a>
      </div>
    </div>

    <div>
      <tasks-table :list="tasksList" />
    </div>
  </div>
</template>

 <script>
import apiBitrix from "../api/tasks";
import TasksTable from "../components/TasksTable.vue";

export default {
  components: {
    TasksTable,
  },
  name: "TasksComponent",
  data() {
    return {
      tasksList: [],
    };
  },
  methods: {
    getTasks: function () {
      apiBitrix.tasks().then((response) => {
        console.log(response.data.result);
        this.tasksList = response.data.result;
      });
    },
  },
  mounted() {
    this.getTasks();
  },
};
</script> 

