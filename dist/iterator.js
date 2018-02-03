'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(makeIterator);

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
function makeIterator(arr) {
  var i;
  return _regenerator2.default.wrap(function makeIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < arr.length)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return arr[i];

        case 4:
          i++;
          _context.next = 1;
          break;

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

var gen = makeIterator(['吃飯', '睡覺', '上上網']);

console.log('首先', gen.next().value);
console.log('其次', gen.next().value);
console.log('然後', gen.next().value);
console.log('最後', gen.next().done);
//# sourceMappingURL=iterator.js.map