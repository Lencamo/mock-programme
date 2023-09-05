<template>
  <div class="hello">
    <button @click="clickFn">获取用户第{{ page }} 页、每页{{ size }} 条数据的数据</button> <br />
    <button @click="page++">page + 1</button> <br />
    <button @click="size++">size + 1</button>
    <p>{{ usersList }}</p>
  </div>
</template>

<script>
import { getUserList } from '../services/index.js'

export default {
  name: 'HelloWorld',
  data() {
    return {
      page: 1,
      size: 1,
      usersList: []
    }
  },
  methods: {
    async clickFn() {
      const res = await getUserList(this.page, this.size)
      this.usersList = res.data
      console.log(res)
    }
  }
}
</script>
