'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

//導出引入一定 要用 {}


//新增一個異步操作
var init = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _util.promisify)(_fs.readFile)((0, _path.resolve)(__dirname, '../package.json'));

          case 2:
            data = _context.sent;

            data = JSON.parse(data);
            console.log(data.name);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

var _path = require('path');

var _util = require('util');

var _fs = require('fs');

var _ex = require('./ex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { promisify } from 'util'
console.log('name3', _ex.name2);
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

console.log('getName3', (0, _ex.getName2)());
console.log(_ex.age);
init(); //調用
//# sourceMappingURL=index.js.map