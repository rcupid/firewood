```javascript
/**
 * 去掉HTML标签
 * @param {*} str
 */
function removeHtml(str) {
  return str.replace(/<[^>]+>/g, ''); //去掉所有的html标记
}
//生成guid
function guid() {
  return 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * //四舍五入
 * @param {*} float
 * @param {*} how
 * @example
 *  alert(forDight(12345.67890,3));//保留三位小数
 *  alert(forDight(123.99999,4));//保留四位小数
 */
function forDight(float, how) {
  return Math.round(float * Math.pow(10, how)) / Math.pow(10, how);
}

module.exports = {
  removeHtml,
  guid,
  forDight
};
```
