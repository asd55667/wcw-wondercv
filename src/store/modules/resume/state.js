export default {
  activeId: 1,

  formTag: '',
  formIdx: 0,
  isNewForm: false,

  isScanning: false,

  emptyInfo: {
    basic: {
      user: {
        name: { desc: '姓名', value: '' },
        avatar: { desc: '', src: '' },
      },
      contact: {
        telephone: { desc: '电话', value: '' },
        email: { desc: '邮箱', value: '' },
        city: { desc: '现居城市', value: '' },
      },
      social: {
        website: {
          desc: '个人网站',
          value: null,
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
          value: null,
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
    skill: {
      ref: true,
      desc: '',
      update: '',
    },
    job: {
      ref: true,
      name: { desc: '公司名称', value: '' },
      timespan: { start: '', end: '' },
      attrs: {
        post: { desc: '职位名称', value: '' },
        department: { desc: '所在部门', value: '' },
      },
      location: { desc: '所在城市', value: '' },
      desc: '',
      update: '',
    },
    project: {
      ref: true,
      name: { desc: '项目名称', value: '' },
      timespan: { start: '', end: '' },
      attrs: {
        post: { desc: '担任角色', value: '' },
      },
      location: { desc: '所在城市', value: '' },
      desc: '',
      update: '',
    },
    edu: {
      ref: false,
      name: { desc: '学校名称', value: '' },
      timespan: { start: '', end: '' },
      attrs: {
        post: { desc: '所学专业', value: '' },
        scholar: { desc: '学历', value: '' },
        department: { desc: '所在学院', value: '' },
      },
      location: { desc: '所在城市', value: '' },

      desc: '',
      update: '',
    },
    summary: { ref: false, desc: '', update: '' },
  },
}
