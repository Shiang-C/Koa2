const co = require('co')
const fetch = require('node-fetch')

co(function *() {
  const res = yield fetch('https://api.douban.com/v2/movie/1291843') //透過yield 發出異步的請求
  const movie = yield res.json()
  const summary = movie.summary //摘要
  console.log('summary', summary);
})


//透過co的同步方式內來執行異步的獲取

//使用co 可以實現自動執行完成 是逐步執行

//co 只能要到對象 數組 函數

//字負串 跟 布耳值 是無法使用 co 獲取




//以下是演示 co 過程的執行方式採用
// function run (generator) {
//   const iterator = generator()
//   const it = iterator.next()
//   const promise = it.value
//
//   promise.then(data => {
//     const it2 = iterator.next(data)
//     const promise2 = it2.value
//
//     promise2.then(data2 => {
//       iterator.next(data2)
//     })
//   })
// }
//
// run(function *() {
//     const res = yield fetch('https://api.douban.com/v2/movie/1291843') //透過yield 發出異步的請求
//     const movie = yield res.json()
//     const summary = movie.summary //摘要
//     console.log('summary', summary);
// })
