<template>
  <div>
    <h1 class="text-4xl my-4 font-bold text-center">Tasks table</h1>
    <div class="w-full overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="
            text-xs text-gray-700
            uppercase
            bg-gray-50
            dark:bg-gray-700 dark:text-gray-400
          "
        >
          <tr>
            <th class="px-3 sm:px-6 py-3 font-bold text-xl">Id</th>
            <th class="px-3 sm:px-6 py-3 font-bold text-xl">Name</th>
            <th class="px-3 sm:px-6 py-3 font-bold text-xl">Description</th>
            <th class="px-3 sm:px-6 py-3 font-bold text-xl">Dead Line</th>           
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in list"
            :key="item.ID"
            class="
              bg-white
              border-b
              dark:bg-gray-800 dark:border-gray-700
              hover:bg-gray-50
              dark:hover:bg-gray-600
            "
          >
            <td class="px-3 sm:px-6 py-4">{{ item.ID }}</td>
            <td class="px-3 sm:px-6 py-4">{{ item.TITLE }}</td>
            <td class="px-3 sm:px-6 py-4">{{ item.DESCRIPTION }}</td>
            <td class="px-3 sm:px-6 py-4">{{ item.DEADLINE }}</td>   
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TasksTable",
    data() {
      return { };
    },
    props: ["list"],
  };
</script>
