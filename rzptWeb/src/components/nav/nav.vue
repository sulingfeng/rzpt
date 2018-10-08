<template>
  <div class="nav">
    <ul>
      <li class="indexRoute" v-for="item in links" @click="$goRoute(item.route)">
        <i></i>
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'v-nav',
    data () {
    return {
      links: [
        {
          text: '系统首页',
          route: '../../components/indexCenter/indexCenter'
        },
        {
          text: '调用商管理',
          route: '../../components/indexCenter/caller'
        }
      ]
    }
  }
  }
</script>

<style>
  .nav {
    float: left;
    width: 100%;
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
</style>
