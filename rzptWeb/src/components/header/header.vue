<template>
  <div class="header">
    <h1>成都大成均图认证平台</h1>
    <div class="headerLeft">
      <span>欢迎您 <i>admin</i></span>
      <img class="headerSet" src="./set.png" alt=""/>
      <span>系统设置</span>
      <img class="exit" src="./out.png" alt=""/>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .header h1 {
    font-size: 24px;
    color: #454545;
    float: left;
    line-height: 58px;
    margin-left: 20px;
  }
  .header {
    width: 100%;
    height: 58px;
    box-shadow: 5px 5px 5px #e2e1e3;
    line-height: 58px;
  }
  .headerLeft {
    float: right;
    line-height: 58px;
    margin-right: 20px;
    color: #b5c1c9;
  }
  .headerSet {
    position: relative;
    top: -1px;
    margin: 0 8px 0 26px;
    cursor: pointer;
  }
  .exit {
    position: relative;
    top: -1px;
    margin-left: 20px;
    cursor: pointer;
  }
</style>
