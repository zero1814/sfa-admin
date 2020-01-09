<template>
  <el-card class="form-container" shadow="never">
    <el-form :model="entity" ref="AdminForm" label-width="150px">
      <el-form-item label="用户名">
        <el-input v-model="entity.userName"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="entity.mobile"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="entity.email"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <single-upload v-model="entity.headerPic"></single-upload>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="entity.type.code" filterable placeholder="请选择类型">
          <el-option
            v-for="item in typeData"
            :key="item.code"
            :label="item.name"
            :value="item.code"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select
          v-model="entity.status.code"
          filterable
          placeholder="请选择状态"
        >
          <el-option
            v-for="item in statusData"
            :key="item.code"
            :label="item.name"
            :value="item.code"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('AdminForm')">提交</el-button>
        <el-button v-if="!isEdit" @click="resetForm('AdminForm')">重置</el-button>
        <el-button @click="handleCancel()">取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import SingleUpload from "@/components/Upload/SingleImage";
export default {
  name: "SystemAdminForm",
  components: [],
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      entity: {
        id: null,
        userName: null,
        headerPic: null,
        password: null,
        email: null,
        mobile: null,
        type: {
          code: null
        },
        status: {
          code: null
        }
      },
      roles:[],
      typeData:[],
      statusData:[]
    };
  },
  created() {},
  methods: {
      getTypes(){
          //获取类型列表
      },
      getStatus(){
          //获取状态列表
      },
      getEntity(){
          //获取管理员信息
      },
      changeType(val){
          //选择管理员类型
                },
      changeStatus(val){
          //选择管理员状态
      }
  }
};
</script>
<style>
</style>