<script setup lang="ts">
const { stateVar, addString, updateVar } = useTest('my-test')
</script>


<template>
  <div>
    <button @click="addString('test')">Add string</button>
    <button @click="updateVar()">Update</button>
    <ul>
      <li v-for="item in stateVar" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
