<template>
    <div>
      <v-header></v-header>
      <div>
        <el-row>
          <el-col :span="2">
            <div class="nav" ref="nav">
              <ul>
                <li class="indexRoute" v-for="item in links" @click="$goRoute(item.route)">
                  <i :class=item.selector></i>
                  <span>{{item.text}}</span>
                </li>
              </ul>
            </div>
            <!-- <v-nav></v-nav> -->
          </el-col>
          <el-col :span="22" class="bodyWrapper">
            <router-view></router-view>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  import VHeader from "./header/header.vue"
  import VNav from "./nav/nav.vue"

export default {
  name: 'App',
  components:{
    VHeader,
    VNav
  },
  data:function () {
    return {
      links: [
        {
          text: '系统首页',
          selector: 'icon-home',
          route: '/index/index'
        },
        {
          text: '用户管理',
          selector: 'icon-user',
          route: '/user/user'
        },
        {
          text: '接口管理',
          selector: 'icon-power-cord',
          route: '/apply/apply'
        },
        {
          text: '应用管理',
          selector: 'icon-google-drive',
          route: '/message/message'
        },
        {
          text: '数据统计',
          selector: 'icon-google-drive',
          route: '/statist/statist'
        },
        {
          text: '我的应用',
          selector: 'icon-IcoMoon',
          route: '/myApply/myApply'
        },
        {
          text: '日志管理',
          selector: 'icon-podcast',
          route: '/log/log'
        }
      ]
    }
  },
  mounted:function(){
    this.navHeight()
  },
  methods:{
    navHeight(){
      var height = document.documentElement.clientHeight - 58;
      this.$refs.nav.style.height = height+"px";
    }
  }

}
</script>

<style>
  .nav {
    float: left;
    width: 100%;
    height:100%;
    background: #343d4e;
    color: #fff;
    box-shadow: 5px 5px 5px #e2e1e3;
  }
  .nav>ul>li {
    cursor: pointer;
    height: 86px;
    border-top: solid 1px #465164;
    border-bottom: solid 1px #28313f;
    text-align: center;
    line-height: 86px;
    padding-left: 24px;
  }
  .content {
    padding: 25px;
    background: #ecedf1;
  }
  .bodyWrapper{
    padding: 40px 50px 20px 50px;
  }
</style>
