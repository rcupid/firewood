const regex1 = new RegExp('foo*', 'g');
const str1 = 'table football, foosball';
// let array1 = regex1.exec(str1)
// while (array1 !== null) {
//   console.log("#############");
//   console.log(array1);
//   console.log(`lastIndex=${regex1.lastIndex}`);
//   console.dir(regex1);
//   console.log(`str1=${str1}`);
//   array1 = regex1.exec(str1)
// }
// // console.log(regex1.exec(str1));
// console.log('**************');
// console.log(str1.match(regex1));

function indexOf (str, searchStr, fromIndex) {
  const regex1 = new RegExp(`${searchStr}`, 'ig')
  regex1.lastIndex = fromIndex
  let result = regex1.exec(str)
  console.log(result);
  return result ? result.index : -1;
}

console.log(indexOf(str1, 'foo', 0));



// while ((array1 = regex1.exec(str1)) !== null) {
//   console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
//   // expected output: "Found foo. Next starts at 9."
//   // expected output: "Found foo. Next starts at 19."
// }
