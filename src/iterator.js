// function makeIterator (arr) {
//   let nextIndex = 0
//
//   //返回一個迭代器對象
//   return {
//     next: () => {
//       // next: () 方法返回的結果對象
//       if (nextIndex < arr.length) {
//         return { value: arr[nextIndex++], done: false } //因為初始值是0 所以要＋＋ 每調用跑一次
//       } else {
//           return { done: true }
//         }
//       }
//     }
//   }
//
// const it = makeIterator(['吃飯', '睡覺', '上上網']) //(調用makeIterator返回的結果)
// console.log('首先', it.next().value)
// console.log('其次', it.next().value)
// console.log('然後', it.next().value)
// console.log('最後', it.next().done)



//使用生成器 * 就是要簡化 上面寫法而生的
function *makeIterator (arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i] //yield可用於斷點執行
  }
}

const gen = makeIterator(['吃飯', '睡覺', '上上網'])

console.log('首先', gen.next().value)
console.log('其次', gen.next().value)
console.log('然後', gen.next().value)
console.log('最後', gen.next().done)
