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
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        
        :page-size="100"
        layout="total, prev, pager, next, jumper"
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
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`00000000每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`1111111当前页: ${val}`);
      this.userPage(1,val)
    },
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
    
  }
}
</script>
<style>
.searchWrapper span{line-height:40px;margin-right:30px;margin-bottom:30px;}
.searchName{width: 225px;height: 35px;border: solid 1px #e7e7e7;border-radius: 10px;float: left;margin-right: 20px;}
.searchBut{width: 65px;height: 38px;line-height: 35px;text-align: center;border-radius: 5px;cursor: pointer;background: #42baff;color: #fff;font-weight: bold;}
.resetBut{width: 65px;height: 38px;line-height: 35px;text-align: center;border-radius: 5px;cursor: pointer;background: #42baff;color: #fff;font-weight: bold;}
</style> 