/*
 * @Copyright: Copyright (c) 2019 Zybang, All rights reserved
 * @Name: name
 * @Description: description
 * @Author: liujianwei(liujianwei@zuoyebang.com)
 * @LastEditors: liujianwei
 * @LastEditTime: 2019-08-27 21:05:41
 * @LastEditContent: 初始化文件
 */

let arr = [
  {
    uid: 1,
    componentList: [
      {
        uid: 11,
        componentList: [
          {
            uid: 111
          },
          {
            uid: 112
          }
        ]
      },
      {
        uid: 13
      }
    ]
  },
  {
    uid: 2,
    componentList: [
      {
        uid: 21,
        componentList: [
          {
            uid: 211
          },
          {
            uid: 212
          }
        ]
      },
      {
        uid: 22
      }
    ]
  }
]
function deleteComponent (list, uid) {
  for (let index = 0, len = list.length; index < len; index++) {
    let item = list[index]
    if (item.uid === uid) {
      list = [...list.splice(index, 1)]
      break;
    } else if (item.componentList && item.componentList.length > 0) {
      deleteComponent(item.componentList, uid)
    }
  }
  return list
}

// function swapComponent (list, first, second) {
//   for (let index = 0, len = list.length; index < len; index++) {
//     let item = list[index]
//     if (item.uid === first) {

//       break;
//     } else if (item.componentList && item.componentList.length > 0) {
//       swapComponent(item.componentList, first, second)
//     }
//   }
// }

function findComponent (list, uid) {
  return new Promise(async (resolve, reject) => {
    for (let index = 0, len = list.length; index < len; index++) {
      let item = list[index]
      if (item.uid === uid) {

        resolve(Object.assign({}, item))
      } else if (item.componentList && item.componentList.length > 0) {
        await findComponent(item.componentList, uid)
      }
    }
  })
}
// // let result = deleteComponent(arr, 11)

// findComponent(arr, 11).then((args) => {
//   console.log(args);
//   args.push(args.componentList.push({ uid: 113 }))
//   console.log(JSON.stringify(args));

//   console.log(JSON.stringify(arr))
// })


// function copy (list, uid) {
//   for (let index = 0, len = list.length; index < len; index++) {
//     let item = list[index]
//     if (item.uid === uid) {
//       list.push(Object.assign(item, { uid: +new Date() }))
//       break;
//     } else if (item.componentList && item.componentList.length > 0) {
//       copy(item.componentList, uid)
//     }
//   }
// }
// copy(arr, 111)
// console.log(JSON.stringify(arr));

let list = [1, 2, 4, 5];
[list[0], list[1]] = [list[1], list[0]]
console.log(list);
