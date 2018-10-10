<template>
  <ul class='userAddUl'>
    <li>
      <i>调用商名字：</i>
      <el-input placeholder="请选择日期" class="" v-model="input2"></el-input>
    </li>
    <li>
      <i>登录名字：</i>
      <el-input placeholder="请选择日期" class="" v-model="input2"></el-input>
    </li>
    <li>
      <i>登录密码：</i>
      <el-input placeholder="请选择日期" class="" v-model="input2"></el-input>
    </li>
    <li>
      <i>调用商电话：</i>
      <el-input placeholder="请选择日期" class="" v-model="input2"></el-input>
    </li>
    <li>
      <i>调用商电话：</i>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </li>
    <el-row>
      <el-button type="primary">保存</el-button>
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
  .userAddUl li div{width:250px;margin-bottom:30px;}
</style>
