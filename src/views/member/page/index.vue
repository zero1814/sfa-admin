<template>
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button style="float: right" @click="search()" type="primary" size="small">查询结果</el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="query" size="small" label-width="140px">
          <el-form-item label="名称">
            <el-input style="width: 203px" v-model="query.realName" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input style="width: 203px" v-model="query.mobile" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="等级">
            <el-select v-model="query.level.code" placeholder="选择状态">
              <el-option key value label="全部"></el-option>
              <el-option
                v-for="item in statusList"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="query.status.code" placeholder="选择状态">
              <el-option key value label="全部"></el-option>
              <el-option
                v-for="item in statusList"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button class="btn-add" @click="handleEdit('create')" size="mini">添加</el-button>
    </el-card>
    <div class="table-container">
      <el-table
        ref="adminStatusTable"
        :data="list"
        style="width: 100%"
        v-loading="listLoading"
        border
      >
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="300" align="center">
          <template slot-scope="scope">{{scope.row.code}}</template>
        </el-table-column>
        <el-table-column label="姓名" width="100" align="center">
          <template slot-scope="scope">{{scope.row.realName}}</template>
        </el-table-column>
        <el-table-column label="手机号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.mobile}}</template>
        </el-table-column>
        <el-table-column label="电子邮件" width="100" align="center">
          <template slot-scope="scope">{{scope.row.email}}</template>
        </el-table-column>
        <el-table-column label="可用状态" align="center" width="100px">
          <template slot-scope="scope">
            <span v-if="scope.row.flagEnabled == 0">可用</span>
            <span v-else>不可用</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit('edit')">编辑</el-button>
            <el-button type="danger" size="mini" @click="handleDelete(scope.row.code)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="listQuery.size"
        :page-sizes="[5,10,15]"
        :current-page.sync="listQuery.page"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import waves from "@/directive/waves";
import { getData } from "@/api/member/info";
export default {
  name: "MemberPage",
  directives: { waves },
  data() {
    return {
      data: [],
      query: {
        realName: "",
        mobile: "",
        email: "",
        level: {
          code: 0
        },
        status: {
          code: 0
        },
        page: {
          number: 1,
          size: 10
        }
      },
      levelList: [
        { code: "1", name: "一级会员" },
        { code: "2", name: "二级会员" },
        { code: "3", name: "三级会员" }
      ],
      statusList: [
        { code: "1", name: "正常" },
        { code: "2", name: "注销" },
        { code: "3", name: "冻结" }
      ]
    };
  },
  methods: {
    fetchData() {
      getData(this.query)
        .then(res => {
          if (res.code === 200) {
            this.data = res.data;
          } else {
            this.$notify.error({
              title: "错误",
              message: res.message
            });
          }
        })
        .catch(err => {
          this.$notify.error({
            title: "错误",
            message: err
          });
        });
    },
    search() {
        this.query.page.number=1
        this.fetchData()
    },
    handleEdit(val){
        this.$router.push({
            name: 'MemberEdit',
            query:{
              type: val
            }
        })
    },
    handleDelete(val){
        console.log('code=',val)
    },
    handleSizeChange(val) {
      this.query.page.size = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.query.page.number=val
      this.fetchData()
    }
  }
};
</script>