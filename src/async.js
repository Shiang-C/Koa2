const fs = require('fs') //引用文件的接口

//第一階段回調函數
// function readFile (cb) {
//   fs.readFile('./package.json', (err, data) => {
//     if (err) return cb(err)
//     cb && cb(null, data)
//   })
// }
//
// readFile((err, data)) => {
//   if (!err) {
//     data = JSON.parse(data)
//     console.log(data.name);
//   }
// })

//第二階段 promsie
// function readFileAsync (path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (err, data) => {
//       if (err) reject(err)
//       else resolve(data)
//     })
//   })
// }
//
// readFileAsync('./package.json')
// .then(data => {
//   data = JSON.parse(data)
//   console.log(data.name);
// })
// .catch(err => {
//   console.log(err);
// })

//第三個階段 co + Generator function + Promise

// const co = require('co')
const util = require('util')
//
// co(function *() {
//   let data = yield util.promisify(fs.readFile)('./package.json')
//   data = JSON.parse(data)
//   console.log(data.name);
// })

//第四個階段 Async 統一世界
const readAsync = util.promisify(fs.readFile)

async function init () {
  let data = await readAsync('./package.json')
  data = JSON.parse(data)
  console.log(data.name);
}
init()  //調用
