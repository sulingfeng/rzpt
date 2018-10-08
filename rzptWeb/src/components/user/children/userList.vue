<template>
  <div class="body">
    <div class="bodyContent">
      <div class="userHeader">
        <div class="floatLeft">
          <h1>调用商管理</h1>
          <p><a href="">首页</a> <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span> <a href="">调用商管理</a></p>
        </div>
        <button type="success" class="addCaller">+ 新增调用商</button>
        <hr class="headerHr">
      </div>
      <div class="centerBottom">
        <ul class="searchWrapper floatLeft">
          <li class="floatLeft"><span class="floatLeft">调用商名称:</span> <input placeholder="请输入内容" class="searchName" type="text"></li>
          <!--<li><span>应用名称:</span> <input class="searchApp" type="text"/></li>-->
          <button class="searchBut" id="searchBut">搜索</button>
          <button class="resetBut" id="resetBut">重置</button>
        </ul>
        <div class="clearFloat"></div>
        <v-userPage></v-userPage>
      </div>
    </div>
  </div>
</template>

<script>
  import VUserPage from './userPage.vue'
export default {
  name: 'HelloWorld',
  components:{
    VUserPage
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
.userHeader{height: 70px;padding: 20px;}
.bodyContent{background: #fff;}
.userHeader div h1{font-size: 20px;color: #454545;}
.userHeader div p{font-size: 14px;color: #747474;}
.addCaller {width: 107px;height: 28px;border: solid 1px #24b97d;background: #2bd08e;line-height: 28px;text-align: center;color: #fff;cursor: pointer;border-radius:3px;float:right;}
.headerHr{border-bottom: solid 2px #e7e7e7;margin-top:50px;}
.searchName{width: 225px;height: 35px;border: solid 1px #e7e7e7;border-radius: 10px;float: left;margin-right: 20px;}
.searchBut{width: 65px;height: 38px;line-height: 35px;text-align: center;border-radius: 5px;cursor: pointer;background: #42baff;color: #fff;font-weight: bold;}
.resetBut{width: 65px;height: 38px;line-height: 35px;text-align: center;border-radius: 5px;cursor: pointer;background: #42baff;color: #fff;font-weight: bold;}
</style>
