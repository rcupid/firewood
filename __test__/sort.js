let limitSku = [
  {
    skuId: '234234',
    skuName: '课程111',
    grade: '一年级',
    status: '2', // 订单状态
    orderId: 2324
  },
  {
    skuId: '234234',
    skuName: '课程2222',
    grade: '三年级',
    status: '2', // 订单状态
    orderId: 2324
  },
  {
    skuId: '234234',
    skuName: '课程333',
    grade: '二年级',
    status: '2', // 订单状态
    orderId: 2324
  }
]

const gradeList = ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三',]

limitSku.sort((a, b) => {
  return gradeList.indexOf(a.grade) - gradeList.indexOf(b.grade);
})

console.log(limitSku);
