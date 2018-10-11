<template>
  <ul class='userAddUl'>
    <li>
      <i>调用商名字：</i>
      <el-input placeholder="调用商名字" class="" v-model="input2"></el-input>
    </li>
    <li>
      <i>登录名字：</i>
      <el-input placeholder="登录名字" class="" v-model="input2"></el-input>
    </li>
    <li>
      <i>登录密码：</i>
      <el-input placeholder="登录密码" class="" v-model="input2"></el-input>
    </li>
    <li>
      <i>调用商电话：</i>
      <el-input placeholder="调用商电话" class="" v-model="input2"></el-input>
    </li>
    <li>
      <i>调用商类型：</i>
      <el-select v-model="value" placeholder="调用商类型">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </li>
    <li>
      <i>描述：</i>
      <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea"></el-input>
    </li>
    <el-row>
      <el-button type="primary" class="save">保存</el-button>
      <el-button type="info" @click="userAddCancel">取消</el-button>
    </el-row>
  </ul>

</template>

<script>
  
export default {
  name: 'HelloWorld',
  components:{
    
  },
  data () {
    return {
      input2: '',
      textarea: '',
      options: [{
          value: '选项1',
          label: '调用商'
        }, {
          value: '选项2',
          label: '管理员'
        },],
        value: ''
    }
  },
  mounted:function(){

  },
  methods:{
    userAddCancel(){
      console.log("子")
      this.$emit('refreshList');
    }
  }
}
</script>

<style scoped>
  .userAddUl li i{float:left;line-height:40px;width:100px;}
  .userAddUl li div{width:300px;margin-bottom:30px;}
  .userAddUl .el-input{width:500px;}
  .userAddUl li div.el-input__inner{width: 500px;}
  .save{margin-left:160px;}
</style>

