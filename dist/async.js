'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var init = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return readAsync('./package.json');

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs'); //引用文件的接口

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
var util = require('util');
//
// co(function *() {
//   let data = yield util.promisify(fs.readFile)('./package.json')
//   data = JSON.parse(data)
//   console.log(data.name);
// })

//第四個階段 Async 統一世界
var readAsync = util.promisify(fs.readFile);

init(); //調用
//# sourceMappingURL=async.js.map