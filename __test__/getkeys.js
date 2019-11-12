
var obj = {
  plainText: {
    src: '',
    title: '暂无内容',
    description: ''
  },
  notScheduling: {
    src: require('./resource/theme1-nonepage-01.svg'),
    title: '今日未排班，没有外呼任务',
    description: ''
  },
  noData: {
    src: require('./resource/theme1-nonepage-02.svg'),
    title: '暂无数据',
    description: ''
  },
  noOperationData: {
    src: require('./resource/theme1-nonepage-03.svg'),
    title: '暂无操作组数据',
    description: ''
  },
  notInstallProblem: {
    src: require('./resource/theme1-nonepage-04.svg'),
    title: '暂无设置问题',
    description: ''
  },
  notOpen: {
    src: require('./resource/theme1-nonepage-05.svg'),
    title: '网页无法打开了',
    description: '请连接公司内网后重试'
  },
  noPrivilege: {
    src: require('./resource/theme1-nonepage-06.svg'),
    title: '你还没有访问权限',
    description: '请联系管理员'
  },
  notLogin: {
    src: require('./resource/theme1-nonepage-07.svg'),
    title: '你的账号已在别处登录',
    description: '请重新登录'
  },
  notFoundPage: {
    src: require('./resource/theme1-nonepage-08.svg'),
    title: '无法找到该页面',
    description: '请稍后重试'
  },
  noNotice: {
    src: require('./resource/theme1-nonepage-09.svg'),
    title: '暂无通知/消息',
    description: ''
  },
  notFoundData: {
    src: require('./resource/theme1-nonepage-10.svg'),
    title: '没有找到相关资料',
    description: ''
  },
  refunded: {
    src: require('./resource/theme1-nonepage-11.svg'),
    title: '请到售后记录中查看',
    description: '该订单已退款'
  },
  notAllowShiftClass: {
    src: require('./resource/theme1-nonepage-12.svg'),
    title: '特惠课程，不可转班',
    description: ''
  },
  notFoundData11: {
    src: require('./resource/theme1-nonepage-13.svg'),
    title: '你好像还没登陆哦',
    description: '点击下方按钮重新登陆吧'
  },
  askForHelp: {
    src: require('./resource/theme1-nonepage-14.svg'),
    title: '联系你的领导获取支持吧',
    description: ''
  },
  internalNetwork: {
    src: require('./resource/theme1-nonepage-15.svg'),
    title: '只有内网才能访问',
    description: '请切换内网再刷新尝试~'
  },
  errorParams: {
    src: require('./resource/theme1-nonepage-16.svg'),
    title: '参数错误',
    description: ''
  },
  installErrorParams: {
    src: require('./resource/theme1-nonepage-17.svg'),
    title: '参数配置错误',
    description: ''
  },
  gameOver: {
    src: require('./resource/theme1-nonepage-18.svg'),
    title: '活动已结束',
    description: ''
  },
  comingSoon: {
    src: require('./resource/theme1-nonepage-19.svg'),
    title: '敬请期待...',
    description: ''
  },
  noFiles: {
    src: require('./resource/theme1-nonepage-20.svg'),
    title: '暂无删除文件文件夹',
    description: ''
  }
};

let reault = Object.keys(obj).join('/')
console.log(reault);

function require (url) {
  return 1
}
//<li class="demo-none-page-item"><zyb-none-page type="notLogin"></zyb-none-page></li>

let arr = []
Object.keys(obj).forEach((item) => {
  arr.push(`<li class="demo-none-page-item"><zyb-none-page type="${item}"></zyb-none-page></li>`)
})

console.log(arr.join(''))