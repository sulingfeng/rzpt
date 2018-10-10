<template>
  <div class="body">
    <div class="bodyContent">
      <div class="userHeader">
        <div class="floatLeft">
          <h1>调用商管理</h1>
          <p><a href="">首页</a> <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span> <a href="">调用商管理</a></p>
        </div>
        <button type="success" class="addCaller" @click="userAdd">+ 新增调用商</button>
        <!-- <hr class="headerHr"> -->
      </div>
      <div class="centerBottom">
        
        <v-userPage v-show="userPageShow"></v-userPage>
        <v-userAdd v-show="userAddShow" @refreshList="userAddCancel"></v-userAdd>
      </div>
    </div>
  </div>
</template>

<script>
import VUserPage from './userPage.vue'
import VUserAdd from './userAdd.vue'
export default {
  name: 'HelloWorld',
  components:{
    VUserPage,
    VUserAdd
  },
  data () {
    return {
      userPageShow: true,
      userAddShow: false,
    }
  },
  mounted:function (){

  },
  methods:{
    userAdd(){
      this.userPageShow = false;
      this.userAddShow  = true;
    },
    userAddCancel(){
      console.log("0000")
      this.userPageShow = true;
      this.userAddShow  = false;
    }
  }
}
</script>

<style scoped>
.userHeader{height: 70px;border-bottom:solid 1px #bbbaba;margin-bottom:50px;}
.bodyContent{background: #fff;}
.userHeader div h1{font-size: 20px;color: #454545;}
.userHeader div p{font-size: 14px;color: #747474;}
.addCaller {width: 107px;height: 28px;border: solid 1px #24b97d;background: #2bd08e;line-height: 28px;text-align: center;color: #fff;cursor: pointer;border-radius:3px;float:right;}
.headerHr{border-bottom: solid 2px #e7e7e7;margin-top:50px;}

</style>
