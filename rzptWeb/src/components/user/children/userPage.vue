<template>
  <div>
    <ul class="searchWrapper floatLeft">
      <li class="floatLeft"><span class="floatLeft">调用商名称:</span> <input placeholder="请输入内容" class="searchName" type="text"></li>
      <button class="searchBut" id="searchBut">搜索</button>
      <button class="resetBut" id="resetBut">重置</button>
    </ul>
    <div class="clearFloat"></div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="名字" width="180"></el-table-column>
      <el-table-column prop="role" label="角色" width="180"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage:1,
      tableData: []
    }
  },
  mounted:function(){
    this.userPage(1,1);
  },
  methods: {
    userPage(limit,page){
      var limit = limit || 1;
      var page = page || 1;
      var param = {
          limit:limit,
          page:page
      }
      
      this.$axios.get('/api/user/page',{
        params:param
      }).then((res)=>{
        if(res.data.code == 200){
          this.tableData = res.data.data;
          this.currentPage = res.data.count;
          var name = sessionStorage.getItem('name')
          console.log('分页1数据',name)
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    handleSizeChange(val) {
      console.log(`00000000每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`1111111当前页: ${val}`);
      this.userPage(1,val)
    }
  }
}
</script>
