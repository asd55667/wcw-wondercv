<template>
  <div class="intern-form">
    <base-form>
      <div slot="head-name" class="head-name">实习经历</div>
      <div slot="form-content">
        <el-form :model="staticValidateForm">
          <el-form-item prop="name" label="公司名称">
            <el-input v-model="staticValidateForm.name"></el-input>
          </el-form-item>
          <el-form-item prop="name" label="职位名称">
            <el-input v-model="staticValidateForm.post"></el-input>
          </el-form-item>
          <div class="form-wrap">
            <el-form-item class="item" prop="phone" label="所在部门">
              <el-input v-model="staticValidateForm.phone"></el-input>
            </el-form-item>
            <el-form-item class="item" prop="email" label="所在城市">
              <el-input v-model="staticValidateForm.email"></el-input>
            </el-form-item>
            <el-form-item class="item" prop="timespan" label="起始时间">
              <el-input v-model="staticValidateForm.timespan[0]"></el-input>
            </el-form-item>
            <el-form-item class="item" prop="timespan" label="结束时间">
              <el-input v-model="staticValidateForm.timespan[1]"></el-input>
            </el-form-item>
          </div>
          <el-form-item prop="desc">
            <div>经历描述</div>
            <quill-editor v-model="staticValidateForm.desc"></quill-editor>
          </el-form-item>
        </el-form>
      </div>
    </base-form>
  </div>
</template>

<script>
import BaseForm from './components/BaseForm'
export default {
  components: { BaseForm },
  data() {
    return {
      staticValidateForm: {
        name: '沛岱汽车',
        timespan: ['2019年10月', '2020年03月'],
        post: '算法实习生',
        // department: '算法',
        attrs: ['算法实习生', '算法'],
        location: '上海',
        desc:
          '<p>watchdog文件系统监控</p><ul><li>内容安全，监控后台的图片上传目录，过滤违规图片</li></ul><p>背单词小程序&nbsp;</p><ul><li>状态管理， 组件通信</li><li>flask gunicorn&nbsp;单词api</li><li>nginx 反向代理，静态资源</li><li>graphql api，rpc通信</li></ul>',
      },
      interns: [
        {
          name: '沛岱汽车',
          timespan: ['2019年10月', '2020年03月'],
          // post: '算法实习生',
          // department: '算法',
          attrs: ['算法实习生', '算法'],
          location: '上海',
          desc:
            '<p>watchdog文件系统监控</p><ul><li>内容安全，监控后台的图片上传目录，过滤违规图片</li></ul><p>背单词小程序&nbsp;</p><ul><li>状态管理， 组件通信</li><li>flask gunicorn&nbsp;单词api</li><li>nginx 反向代理，静态资源</li><li>graphql api，rpc通信</li></ul>',
        },
        {
          name: '乐多游戏',
          timespan: ['2020年06月', '2020年09月'],
          // post: '小程序开发',
          // department: '运营',
          attrs: ['小程序开发', '运营'],
          location: '上海',
          desc:
            '<p>真实/仿真数据采集，处理</p><ul><li>跟车采集真实卡车数据</li><li>进程通信导出仿真数据</li></ul><p>检测/分割动态库接口</p><ul><li>单目测距， yolo批量预测</li><li>用libtorch将bisenet模型从py导出至cpp</li></ul>',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped></style>
