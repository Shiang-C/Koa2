// import { promisify } from 'util'
import { resolve as r } from 'path'
// import { readFile, writeFileSync as wfs } from 'fs'
// import * as qs from 'querystring'
//
//
// promisify(readFile)(r(__dirname, '../package.json')) //透過promisify轉成 readFile 給他傳一個路徑 可透過 r 修改成絕對路徑 （__dirname 當前文件  ../package.json 目標文件）
//   .then(data => {
//     data = JSON.parse(data)
//     console.log(data.name);
//
//     wfs(r(__dirname, './name'), String(data.name), 'utf8')
//   }) //透過wfs 寫入本地文件中  給個路徑 寫到當前 ./name裡面  再把 data.name 轉成字串 utf8 格式
//

// as 代表改變名稱 像 resolve 改成 r


//測示 export
import { promisify } from 'util'
import { readFile } from 'fs'
import { name } from './ex'
import { getName } from './ex'


import {
  name2 as name3,
  getName2 as getName3,
  age as age2
} from './ex'



console.log('name3', name3);
console.log('getName3', getName3());
console.log(age2);

//導出引入一定 要用 {}



//新增一個異步操作
async function init () {
  let data = await promisify(readFile)(r(__dirname, '../package.json'))
  data = JSON.parse(data)
  console.log(data.name)
}
init()  //調用
