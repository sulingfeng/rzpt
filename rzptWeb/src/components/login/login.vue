<template>
  <div>
    <div class="header loginHeader">
      <div class="headerLeft">
        <img src="../../assets/logo.png" alt="">
        <h1>成都大成均图认证平台</h1>
      </div>
      <div class="headerRight">
        <h2>未登陆</h2>
        <img src="../../assets/logMy.png" alt="">
      </div>
    </div>
    <div class="centerWrapper" style="height: 791px;">
      <div class="center loginWrapper" style="right: 12%;">
        <h3>系统登陆</h3>
        <hr>
        <ul>
          <li><p>用户名<span class="nameNull">(用户名不能为空)</span></p><el-input
            placeholder="请输入用户名"
            prefix-icon="el-icon-service"
            v-model="loginName">
          </el-input>
        </li>
        <li><p>密&nbsp;&nbsp;&nbsp;&nbsp;码<span class="passwordNull">(密码不能为空)</span></p>
          <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-view"
          v-model="loginPwd">
        </el-input>
      </li>
    </ul>
    <div class="passwordControl">
      <el-checkbox v-model="savePwd">记住密码</el-checkbox>
      <i class="forgetBut">忘记密码?&nbsp;&nbsp;</i>
    </div>
    <el-button type="primary" @click="login">登录</el-button>
    <p>还没有账号,<a @click="register"  href="javascript:;">立即注册&gt;&gt;</a></p>
  </div>
  <div class="center register">
    <h3>注册</h3>
    <hr>
    <ul>
      <li><p>用户名<span class="nameNull registerNameNull">(用户名不能为空)</span></p>
        <el-input
        placeholder="请输入用户名"
        prefix-icon="el-icon-view"
        v-model="uid">
      </el-input>
    </li>
    <li><p>登陆名字<span class="nameNull registerNameNull">(登陆名字不能为空)</span></p>
      <el-input
      placeholder="请输入用户名"
      prefix-icon="el-icon-view"
      v-model="name">
    </el-input>
  </li>
  <li><p>密&nbsp;&nbsp;&nbsp;&nbsp;码<span class="passwordNull registerPasswordNull">密码不能为空</span></p>
    <el-input
    placeholder="请输入用户名"
    prefix-icon="el-icon-view"
    v-model="pwd">
  </el-input>
</li>
<li><p>确认密码<span class="passwordNull registerPasswordNull2">(两次填写的密码不一样)</span></p>
  <el-input
  placeholder="请输入用户名"
  prefix-icon="el-icon-view"
  v-model="pwd">
</el-input>
</li>
<li><p>电话号码<span class="passwordNull registerQuestionNull">(电话号码不能为空)</span></p>
  <el-input
  placeholder="请输入用户名"
  prefix-icon="el-icon-view"
  v-model="phone">
</el-input>
</li>
</ul>
<button class="registerYes" @click="registerYes">注&nbsp;&nbsp;册</button>
<button class="registerNo"  @click="registerNo">取&nbsp;&nbsp;消</button>
</div>
</div>
<div class="bottom">
  <p>成都大成均图科技有限公司©2018-2019 Yimipingtai, All Rights Reserved 蜀ICP备10217776号-5</p>
</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data:function (){
    return {
      msg: 'Welcome to Your Vue.js App',
      loginName:'',
      loginPwd:'',
      savePwd:'',
      show: true,
      uid:'',
      name:'',
      pwd:'',
      phone:''
    }
  },
  mounted:function(){

  },
  methods:{
    registerYes(){
      var param = {
        uid:this.uid,
        name:this.name,
        pwd:this.pwd,
        phone:this.phone
      }
      this.$axios.get('/api/user/add',{
        　　params:param
      })
      .then((res) => {
        if(res.data.code == 200){

        }
      })
      .catch((err) => {
        　　console.log(err);
      });
    },
    login(event){
      var param = {
        name:this.loginName,
        pwd:this.loginPwd
      }
      this.$axios.get('/api/user/login',{
        　　params:param
      })
      .then((res) => {
        if(res.data.code == 200){
          this.$router.push("/main");
        }
      })
      .catch((err) => {
        　　console.log(err);
      });
      
    },
    register(){
      $(".loginWrapper").animate({right:"-30%"},300)
      $(".register").animate({right:"12%"},300)
    },
    registerNo(){
      $(".loginWrapper").animate({right:"12%"},300)
      $(".register").animate({right:"-30%"},300)
    }


  }
}
</script>


<style>
.center .registerNo{
  width: 140px;
}





.loginHeader {width: 100%;
  height: 76px;
  background: #fff;
  line-height: 76px;
}
.centerWrapper {
  background: url('../../assets/loginBg.jpg')no-repeat top center;
  width: 100%;
  height: 791px;
}
.headerLeft img {
  float: left;
  margin-left: 15%;
  margin-top: 12px;
}
.headerLeft h1 {
  float: left;
  font-size: 24px;
  color: #454545;
  margin-left: 10px;
}
.headerRight img {
  float: right;
  margin-top: 23px;
}
.headerRight h2 {
  float: right;
  margin-right: 15%;
  font-size: 16px;
  color: #747474;
  margin-left: 10px;
}
.center {
  border-radius: 8px;
  width: 305px;
  height: 385px;
  background: #fff;
  box-shadow: 0px 5px 5px #232848;
  position: fixed;
  right: -30%;
  top: 29%;
  padding: 25px 20px 0 20px;
}
.bottom {
  width: 100%;
  line-height: 76px;
  text-align: center;
  line-height: 76px;
}
.center input[type=text] {
  padding-left: 40px;
  width: 304px;
  height: 38px;
  border: solid 1px #d2d2d2;
  border-radius: 5px;
}
.center ul li p {
  color: #747474;
  font-size: 15px;
  margin: 12px 0;
}
.center button {
  width: 305px;
  height: 40px;
  background: #42baff;
  border-radius: 8px;
  font-size: 17px;
  color: #fff;
  cursor: pointer;
}
.passwordControl {
  margin: 2px 0 16px 0;
}
.passwordControl i {
  float: right;
}
.forgetBut {
  cursor: pointer;
}
.nameImg {
  position: relative;
  top: -33px;
  left: 15px;
}
.passwordImg {
  position: relative;
  top: -33px;
  left: 15px;
}
.center>p {
  float: right;
  margin-top: 17px;
}
.register {
  height: 520px;
  top: 20%;
}
.register .registerYes {
  width: 140px;
  margin-right: 20px;
}
.center button {
  width: 305px;
  height: 40px;
  background: #42baff;
  border-radius: 8px;
  font-size: 17px;
  color: #fff;
  cursor: pointer;
}
.center h3 {
  font-size: 20px;
  color: #6a6a6a;
  font-weight: bold;
}
.center hr {
  margin-bottom: 18px;
}
.nameNull {
  font-size: 12px;
  color: #f91605;
  margin-left: 12px;
  display: none;
}
.passwordNull {
  font-size: 12px;
  color: #f91605;
  margin-left: 12px;
  display: none;
}
.center a {
  color: #42baff;
  cursor: pointer;
}
</style>
