'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var name = exports.name = 'Luke';
var getName = exports.getName = function getName() {
  return name;
};

var age = 19;

// export default age;

//直接暴露 導出可以不加{}

//批量導出
exports.name2 = name;
exports.getName2 = getName;
exports.age = age;
//# sourceMappingURL=ex.js.map