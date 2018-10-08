<template>
  <div class="body">
    <v-indexHeader></v-indexHeader>
  </div>
</template>

<script>
  import VIndexHeader from "./children/indexHeader.vue"
export default {
  name: 'HelloWorld',
  components:{
    VIndexHeader,
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
