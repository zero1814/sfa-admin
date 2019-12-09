<template>
  <el-card class="form-container" shadow="never">
    <el-form :model="entity" ref="MemberFrom" label-width="150px">
      <el-form-item label="姓名">
        <el-input v-model="entity.realName"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="entity.mobile"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="entity.email"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <single-upload v-model="entity.headPic"></single-upload>
      </el-form-item>
      <el-form-item label="会员等级">
        <el-select v-model="entity.level.code" filterable placeholder="请选择会员等级">
          <el-option
            v-for="item in levelData"
            :key="item.code"
            :label="item.name"
            :value="item.code"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="会员状态">
        <el-select
          v-model="entity.status.code"
          filterable
          placeholder="请选择会员状态"
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
        <el-button type="primary" @click="onSubmit('ProductFrom')">提交</el-button>
        <el-button v-if="!isEdit" @click="resetForm('ProductFrom')">重置</el-button>
        <el-button @click="handleCancel()">取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import SingleUpload from "@/components/Upload/SingleImage";
export default {
  name: "MemberForm",
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
        nickName: null,
        headPic: null,
        email: null,
        mobile: null,
        level: {
          code: null
        },
        status: {
          code: null
        }
      },
      levelData:[],
      statusData:[]
    };
  },
  created() {},
  methods: {
      getLevel(){
          //获取等级列表
      },
      getStatus(){
          //获取状态列表
      },
      getEntity(){
          //获取会员信息
      },
      changeLevel(val){
          //选择会员等级
      },
      changeStatus(val){
          //选择会员状态
      }
  }
};
</script>
<style>
</style>