<template>
  <div class="body">
    <div class="indexHeader">
      <el-row :gutter="20">
        <el-col :span="16" class="indexHeaderLeft">
          <div class="grid-content bg-purple">
            <h1>关键指数</h1>
            <ul>
              <li>
                <img src="../../../assets/pv.png" alt="">
                <div class="floatRight puvi">
                  <p>浏览量（PV）</p>
                  <h2>256</h2>
                  <p>日<i>↑</i>112.61%</p>
                </div>
              </li>
              <li>
                <img src="../../../assets/uv.png" alt="">
                <div class="floatRight puvi">
                  <p>浏览量（UV）</p>
                  <h2>256</h2>
                  <p>日<i>↑</i>112.61%</p>
                </div>
              </li>
              <li>
                <img src="../../../assets/vv.png" alt="">
                <div class="floatRight puvi">
                  <p>浏览量（VV）</p>
                  <h2>256</h2>
                  <p>日<i>↑</i>112.61%</p>
                </div>
              </li>
              <li>
                <img src="../../../assets/ip.png" alt="">
                <div class="floatRight puvi">
                  <p>浏览量（IV）</p>
                  <h2>256</h2>
                  <p>日<i>↑</i>112.61%</p>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
              <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body{background: #fff;}
  .indexHeader h1{font-size: 20px;
    color: #454545;
    margin: 20px 0 40px 20px;}
  .indexHeader li{margin: 0 35px;
    width: 168px;
    float: left;}
  .indexHeaderLeft{height: 215px;
    border: solid 1px #dde0ef;}
  .puvi p:first-child{    font-size: 16px;
    color: #454545;}
  .puvi h2{font-size: 30px;color: #42baff;}
  .puvi p:last-child{font-size: 14px;
    color: #959595;}
</style>
