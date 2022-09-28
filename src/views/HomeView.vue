<template>
  <div class="home">
    <div class="input">
      <div>
        <el-input class="inp" v-model="store.state.mess"></el-input>
      </div>
      <div>
        <el-button type="primary" @click="add">添加数据</el-button>
      </div>
    </div>
    <!--表格-->
    <div class="list">
      <el-table :data="store.state.arrs">
          <el-table-column type="index" label="索引" width="60"></el-table-column>
          <el-table-column prop="text" label="文本"></el-table-column>
          <el-table-column align="right">
            <template v-slot:header>
                <div>
                  <span>操作</span>
                </div>
            </template>
            <template v-slot:default="scope">
                <div @click="delete_fn(scope.$index)">
                  <span class="deletes">删除</span>
                </div>
            </template>
          </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex"
let store=useStore();
let delete_fn=function(index){
// arrs.splice(index,1)
store.commit("delete_mutation",index)
}
let add=function(){
//  arrs.unshift({text:mess.value})
 store.commit("increment")
}

</script>

<style lang="scss" scoped>
.home{
 width:600px;
 margin:0 auto;
  .input{
    width:600px;
    display:flex;
    div:nth-of-type(1){
      flex:11;
      ::v-deep input{   //深度样式穿透
        height:45px !important;
      }
    }
     div:nth-of-type(2){
      flex:2;
      ::v-deep .el-button{
        height:45px;

      }
    }
  }
}
.list{
  width:600px;
  border:1px solid red;
  padding:0 80px 0 0;
  box-sizing:border-box;
}
</style>
