export default {
  user: {},

  imported: [],

  userCV: {
    basic: {
      name: '吴承炜',
      contact: [
        { name: '电话', value: '18120587177' },
        { name: '邮箱', value: '344078971@qq.com' },
        { name: '现居城市', value: '上海' },
      ],
      social: [{ name: '个人站点', value: 'wuchengwei.icu' }],
      other: [
        // { name: '', value: '' },
      ],
      intension: [
        // { name: '求职意向', value: '' },
        // { name: '当前工作状态', value: '' },
        // { name: '期望薪资', value: '' },
      ],
    },
    skill: [
      {
        ref: true,
        desc:
          '<p>1. 语言</p><p>擅长python，熟悉js，c/c++， 了解java， cuda</p><p>了解常见的设计模式，数据结构，掌握基本的网络编程，数据分析/处理，爬虫</p><p>&nbsp;2.框架</p><p>了解 vue 状态管理 路由 SSR，了解 koa 洋葱模型 cluster多线程</p><p>&nbsp;3. 工具</p><p>熟悉字符界面 vim tmux，熟悉 git版本控制，熟悉 shell 终端常用命令</p>',
        update: '08月25日',
      },
    ],
    job: [
      {
        ref: true,
        name: '沛岱汽车',
        timespan: { start: '2019年10月', end: '2020年03月' },
        attrs: { post: '算法实习生', department: '算法' },
        location: '上海',
        desc:
          '<p>真实/仿真数据采集，处理</p><ul><li>跟车采集真实卡车数据</li><li>进程通信导出仿真数据</li></ul><p>检测/分割动态库接口</p><ul><li>单目测距， yolo批量预测</li><li>用libtorch将bisenet模型从py导出至cpp</li></ul>',
        update: '08月25日',
      },
      {
        ref: true,
        name: '乐多游戏',
        timespan: { start: '2020年06月', end: '2020年09月' },
        attrs: { post: '小程序开发', department: '运营' },
        location: '上海',
        desc:
          '<p>watchdog文件系统监控</p><ul><li>内容安全，监控后台的图片上传目录，过滤违规图片</li></ul><p>背单词小程序&nbsp;</p><ul><li>状态管理， 组件通信</li><li>flask gunicorn&nbsp;单词api</li><li>nginx 反向代理，静态资源</li><li>graphql api，rpc通信</li></ul>',
        update: '08月25日',
      },
    ],
    project: [
      {
        ref: true,
        name: 'c语言多线程爬虫',
        timespan: { start: '2020年06月', end: '2020年10月' },
        attrs: [],
        location: '',
        desc:
          '<p>socket通信，http协议，哈希摘要，布隆过滤器，openssl, pthread互斥量；</p>',
        update: '08月25日',
      },
      {
        ref: true,
        name: '仿wondercv在线简历',
        timespan: { start: '2020年10月', end: '2020年11月' },
        attrs: [],
        location: '',
        desc: '',
        update: '08月25日',
      },
    ],
    edu: [
      {
        ref: true,
        name: '上海应用技术大学',
        timespan: { start: '2018年09月', end: '2021年07月' },
        attrs: {
          major: '机械电子工程',
          scholar: '硕士',
          department: '计算机科学与信息工程',
        },
        location: '上海',
        desc: '',
        update: '09月24日',
      },
      {
        ref: false,
        name: '文华学院',
        timespan: { start: '2013年09月', end: '2017年07月' },
        attrs: {
          major: '通信工程',
          scholar: '学士',
          department: '信息科学与技术学部',
        },
        location: '武汉',
        desc: '<p>英语六级</p>',
        update: '08月25日',
      },
    ],
    summary: [{ desc: 'asd', update: '111' }],
  },
}
