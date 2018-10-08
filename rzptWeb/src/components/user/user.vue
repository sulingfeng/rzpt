<template>
  <div class="body">
    <v-userList></v-userList>
  </div>
</template>

<script>
  import VUserList from './children/userList.vue'
export default {
  name: 'HelloWorld',
  components:{
    VUserList,

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
