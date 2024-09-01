<script setup>
import { ref , onMounted} from 'vue';

const status = ref('active');
const tasks = ref(['One', 'Two', 'Three']);
const newTask = ref('');
const name = ref('Sushan Shrestha');


const toggleStatus = () => {
  status.value = (status.value === 'active') ? 'inactive' : 'active';
};

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () =>{

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value=data.map((task) => task.title);
  } catch (error) {
    console.log('errror');
  }

});
</script>

<template>
  <h1>
    Hi, this is the real world {{ name }}
    <p v-if="status === 'active'">User Status: Present</p>
    <p v-else-if="status === 'inactive'">User Status: Absent</p>
    <p v-else>User Status: AFK</p>
    <button @click="toggleStatus">Change Status</button>

    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" />
      <button type="submit">Add</button>
    </form>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)">X</button>
      </li>
    </ul>
  </h1>
</template>

<style>
/* Add your styles here */
</style>
