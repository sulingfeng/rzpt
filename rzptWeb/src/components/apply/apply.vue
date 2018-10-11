<template>
  <div class="body">
    <v-applyList></v-applyList>
  </div>
</template>

<script>
  import VApplyList from './children/applyList.vue'
export default {
  name: 'HelloWorld',
  components:{
    VApplyList,

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
