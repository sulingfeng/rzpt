<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose"  background-color="#343d4e"
      text-color="#fff"
      active-text-color="#42baff">
      <el-menu-item index="1">
        <i class="el-icon-setting"></i>
        <span slot="title">系统首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-service"></i>
        <span slot="title">调用商管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">应用管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-location-outline"></i>
        <span slot="title">接口管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-rank"></i>
        <span slot="title">我的应用</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-upload"></i>
        <span slot="title">数据统计</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-info"></i>
          <span>日志管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="1-1">成功日志</el-menu-item>
          <el-menu-item index="1-2">失败日志</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>