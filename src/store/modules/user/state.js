export default {
  user: {},

  remains: [
    // {
    //   id: 1,
    //   tag: 'icon',
    //   name: '校徽',
    //   desc: '校徽可以凸显名校背景',
    //   img: '',
    //   content: null,
    //   multiple: true,
    // },
    {
      id: 2,
      tag: 'job',
      name: '工作经历',
      num: 2,
      total: 30,
      desc: '展示申请岗位相关的经验与能力',
      img: '',
      content: null,
      multiple: true,
    },
    // {
    //   id: 3,
    //   tag: 'orgnize',
    //   name: '社团和组织能力',
    //   desc: '展现人际交往与团队合作能力',
    //   img: '',
    //   content: null,
    //   multiple: true,
    // },
    {
      id: 4,
      tag: 'edu',
      name: '教育经历',
      num: 2,
      total: 30,
      ref: true,
      desc: '介绍学历背景与专业素养',
      img: '',
      content: null,
      multiple: true,
    },
    // {
    //   id: 5,
    //   tag: 'other',
    //   name: '其他',
    //   desc: '突出掌握的技能和证书',
    //   img: '',
    //   content: null,
    //   multiple: true,
    // },
    {
      id: 6,
      tag: 'project',
      name: '项目经历',
      num: 2,
      total: 50,
      ref: true,
      desc: '介绍专业领域的项目经验与能力',
      img: '',
      content: null,
      multiple: true,
    },
    // {
    //   id: 7,
    //   tag: 'research',
    //   name: '研究经历',
    //   desc: '展现专业经验与能力',
    //   img: '',
    //   content: null,
    //   multiple: true,
    // },
    // {
    //   id: 8,
    //   tag: 'award',
    //   name: '荣誉奖项',
    //   desc: '含金量高的奖项是很好的加分项',
    //   img: '',
    //   content: null,
    //   multiple: true,
    // },
    {
      id: 9,
      tag: 'summary',
      name: '个人总结',
      num: 2,
      total: 30,
      desc: '总结优势，突出亮点',
      img: '',
      content: null,
      multiple: false,
    },
    {
      id: 10,
      tag: 'skill',
      name: '专业技能',
      num: 1,
      total: 50,
      ref: true,
      desc: '列出自己掌握的技能，展示强项',
      img: '',
      content: null,
      multiple: false,
    },
    // {
    //   id: 11,
    //   tag: 'custom',
    //   name: '自定义',
    //   desc: '其他需要自行添加的内容',
    //   img: '',
    //   content: null,
    //   multiple: true,
    // },
  ],

  // info: { basic: {}, skill: [], edu: [], project: [], job: [], summary: [] },

  info: {
    basic: {
      imported: [10, 6, 2, 4],
      user: {
        name: { desc: '姓名', value: '吴承炜' },
        avatar: { desc: '', src: '' },
      },
      contact: {
        telephone: { desc: '电话', value: '18120587177' },
        email: { desc: '邮箱', value: '344078971@qq.com' },
        city: { desc: '现居城市', value: '上海' },
      },
      social: {
        website: {
          desc: '个人网站',
          value: 'wuchengwei.icu; github.com/asd55667',
          placeholder: '如：github.com/wondercv.com',
        },
        linkin: {
          desc: 'LinkedIn',
          value: null,
          placeholder: '如：github.com/wondercv.com',
        },
        wechat: {
          desc: 'wexin',
          value: null,
          placeholder: '如：github.com/wondercv.com',
        },
      },
      other: {
        age: {
          desc: '年龄或生日',
          value: null,
          placeholder: '如：github.com/wondercv.com',
        },
        sex: {
          desc: '性别',
          value: '男',
          placeholder: '如：github.com/wondercv.com',
        },
      },
      intension: {
        workIntension: {
          desc: '求职意向',
          value: '前端开发',
          placeholder: '如：github.com/wondercv.com',
        },
        currentJob: {
          desc: '当前工作状态',
          value: null,
          placeholder: '如：github.com/wondercv.com',
        },
        expectSalary: {
          desc: '期望薪资',
          value: null,
          placeholder: '如：github.com/wondercv.com',
        },
      },
    },
    skill: [
      {
        ref: true,
        desc:
          '<p>&nbsp;掌握基础编程能力</p><ul><li>擅长javascript、python、c</li><li>熟悉vim tmux，熟悉 git版本控制，熟悉 shell 常用命令</li><li>了解常见的设计模式、数据结构、网络协议，掌握基本的网络编程，数据处理，爬虫</li></ul><p>掌握前端基础能力</p><ul><li>熟悉 HTML、CSS、ES6、MVC/MVVM</li><li>熟悉 Vue 开发、 响应式原理、vuex、vue-router</li><li>了解Webpack配置、mock数据、压测</li></ul><p>有移动 Web 开发能力</p><ul><li>了解常用的屏幕适配方案、移动端与 PC 开发的差异、&nbsp;base64 等移动端常用的优化方案</li></ul><p>有 Nodejs 开发能力</p><p>有小程序开发能力</p>',
        update: new Date('2020-08-25'),
      },
    ],
    job: [
      {
        ref: true,
        name: { desc: '公司名称', value: '乐多游戏' },
        timespan: { start: '2020年06月', end: '2020年08月' },
        attrs: {
          post: { desc: '职位名称', value: '小程序开发实习生' },
          department: { desc: '所在部门', value: '运营' },
        },
        location: { desc: '所在城市', value: '上海' },
        desc:
          '<p>watchdog文件系统监控</p><ul><li>内容安全，监控后台的图片上传目录，过滤违规图片</li></ul><p>背单词小程序</p><p>基本功能：辅助中学生背颂中考单词、周期复习</p><p>技术栈： 原生小程序、westore、flask、 nginx</p>',
        update: new Date('2020-09-25'),
      },
      {
        ref: false,
        name: { desc: '公司名称', value: '沛岱汽车' },
        timespan: { start: '2019年10月', end: '2020年03月' },
        attrs: {
          post: { desc: '职位名称', value: '算法实习生' },
          department: { desc: '所在部门', value: '算法' },
        },
        location: { desc: '所在城市', value: '上海' },
        desc:
          '<p>真实/仿真数据采集，处理</p><ul><li>跟车采集真实卡车数据</li><li>进程通信导出仿真数据</li></ul><p>检测/分割动态库接口</p><ul><li>单目测距， yolo批量预测</li><li>用libtorch将bisenet模型从py导出至cpp</li></ul>',
        update: new Date('2020-08-25'),
      },
    ],
    project: [
      {
        ref: true,
        name: { desc: '项目名称', value: '仿wondercv在线简历' },
        timespan: { start: '2020年11月', end: '2021年1月' },
        attrs: {
          post: { desc: '担任角色', value: 'resume.wuchengwei.icu' },
        },
        location: { desc: '所在城市', value: '上海' },
        desc:
          '<p>基本功能： 简历编辑、按模块存档、简历打印下载、邮件推送</p><p>技术栈：</p><ul><li>前端：vue、element-ui、 jspdf</li><li>后端：node、mongoose、koa、nginx</li><li>登录模块：oauth2、jwt</li></ul><p>遇到的问题：&nbsp;</p><ul><li>html2canvas渲染出的pdf简历字体分辨率过低</li><li>简历随窗口大小变化进行对应的缩放</li><li>...</li></ul><p>应对方法:</p><ul><li>结合jspdf的context2d模块混合渲染, jspdf不直接支持utf8，中文字体需自行注册字体， 部分标签样式渲染有误差，如li</li><li>监听简历元素的右边距，&nbsp;填写表单及窗口放大时按比例缩放简历</li></ul>',
        update: new Date('2021-02-03'),
      },
      {
        ref: false,
        name: { desc: '项目名称', value: 'c语言多线程爬虫' },
        timespan: { start: '2020年06月', end: '2020年10月' },
        attrs: {
          post: { desc: '担任角色', value: '' },
        },
        location: { desc: '所在城市', value: '上海' },
        desc:
          '<p>socket通信，http协议，哈希摘要，布隆过滤器，openssl, pthread互斥量；</p>',
        update: new Date('2020-08-25'),
      },
    ],
    edu: [
      {
        ref: true,
        name: { desc: '学校名称', value: '上海应用技术大学' },
        timespan: { start: '2018年09月', end: '2021年07月' },
        attrs: {
          post: { desc: '所学专业', value: '机械电子工程' },
          scholar: { desc: '学历', value: '硕士' },
          department: { desc: '所在学院', value: '计算机科学与信息工程' },
        },
        location: { desc: '所在城市', value: '上海' },

        desc: '',
        update: new Date('2020-08-25'),
      },
      {
        ref: true,
        name: { desc: '学校名称', value: '文华学院' },
        timespan: { start: '2013年09月', end: '2017年07月' },
        attrs: {
          post: { desc: '所学专业', value: '通信工程' },
          scholar: { desc: '学历', value: '本科' },
          department: { desc: '所在学院', value: '信息科学与技术学部' },
        },
        location: { desc: '所在城市', value: '武汉' },

        desc: '<p>英语六级</p>',
        update: new Date('2020-08-25'),
      },
    ],
    summary: [
      // {
      //   ref: false,
      //   desc: '努力',
      //   update: new Date('2020-08-25'),
      // },
    ],
  },
}
