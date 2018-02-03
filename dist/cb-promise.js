'use strict';

var fs = require('fs'); //引用文件的接口

//   fs.readFile('./package.json', (err, data) => {
//     if (err) return console.log(err)
//     data = JSON.parse(data)
//     console.log(data.name)
// })
//舊的回調寫法

//-------
//原生node promise
function readFileAsync(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, function (err, data) {
      if (err) reject(err);else resolve(data);
    });
  });
}
//調用方法
// readFileAsync('./package.json') //path
//   .then(data => {
//     data = JSON.parse(data);
//     console.log(data.name)
// })
// .catch(err => {
//   console.log(err)
// })

//同步調用 （2017 作法大眾做法）

//-------

//新作法 node 8後  promisify 處理回調 精簡寫法推薦
var util = require('util');

util.promisify(fs.readFile)('./package.json') //包裝callback的方式 (後面是調用參數)
.then(JSON.parse).then(function (data) {
  console.log(data.name);
}).catch(function (err) {
  console.log(err);
});
//# sourceMappingURL=cb-promise.js.map