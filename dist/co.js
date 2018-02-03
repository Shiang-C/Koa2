'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var co = require('co');
var fetch = require('node-fetch');

co( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, movie, summary;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.douban.com/v2/movie/1291843');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          movie = _context.sent;
          summary = movie.summary; //摘要

          console.log('summary', summary);

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

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
//# sourceMappingURL=co.js.map