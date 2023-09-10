<template>
  <div class="hello">
    <button @click="clickFn">获取用户第{{ page }} 页、每页{{ size }} 条数据的数据</button> <br />
    <button @click="page++">page + 1</button> <br />
    <button @click="size++">size + 1</button>
    <p>{{ usersList }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { getUserList } from '../services/index.js'

const page = ref(1)
const size = ref(1)
const usersList = ref([])

const clickFn = async () => {
  const res = await getUserList(page.value, size.value)
  usersList.value = res.data
  console.log(res)
}
</script>
