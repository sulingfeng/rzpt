<template>
  <div class="body">
    <div class="bodyContent">
      <div class="applyHeader">
        <div class="floatLeft">
          <h1>接口管理</h1>
          <p><a href="">首页</a> <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span> <a href="">接口管理</a></p>
        </div>
        <button type="success" class="addCaller"  v-show="addCallerShow" @click="applyAdd">+ 新增接口</button>
        <button type="success" class="applyReturn" v-show="applyReturnShow" @click="applyAddCancel">+ 返回</button>
        <!-- <hr class="headerHr"> -->
      </div>
      <div class="centerBottom">
        
        <v-applyPage v-show="applyPageShow"></v-applyPage>
        <v-applyAdd v-show="applyAddShow" @refreshList="applyAddCancel"></v-applyAdd>
      </div>
    </div>
  </div>
</template>

<script>
import VApplyPage from './applyPage.vue'
import VApplyAdd from './applyAdd.vue'
export default {
  name: 'HelloWorld',
  components:{
    VApplyPage,
    VApplyAdd
  },
  data () {
    return {
      applyPageShow: true,
      addCallerShow: true,
      applyAddShow: false,
      applyReturnShow: false,
    }
  },
  mounted:function (){

  },
  methods:{
    applyAdd(){
      this.applyPageShow =  false;
      this.applyAddShow  =  true;
      this.addCallerShow=  false;
      this.applyReturnShow= true;
    },
    applyAddCancel(){
      console.log("0000")
      this.applyPageShow = true;
      this.applyAddShow  = false;
      this.addCallerShow=  true;
      this.applyReturnShow= false;
    }
  }
}
</script>

<style scoped>
.applyHeader{height: 70px;border-bottom:solid 1px #bbbaba;margin-bottom:50px;}
.bodyContent{background: #fff;}
.applyHeader div h1{font-size: 20px;color: #454545;}
.applyHeader div p{font-size: 14px;color: #747474;}
.addCaller {width: 107px;height: 28px;border: solid 1px #24b97d;background: #2bd08e;line-height: 28px;text-align: center;color: #fff;cursor: pointer;border-radius:3px;float:right;}
.applyReturn{width: 60px;height: 28px;border: solid 1px #24b97d;background: #2bd08e;line-height: 28px;text-align: center;color: #fff;cursor: pointer;border-radius:3px;float:right;}
.headerHr{border-bottom: solid 2px #e7e7e7;margin-top:50px;}

</style>
