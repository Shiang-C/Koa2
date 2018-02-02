// const arrow = function (param) {}
//
// //形式寫法
//
// const arrow = (param) => {} //與上面寫法是等同的
//
// const arrow = param => {} //只有一個參數的話 可這樣寫
//
// const arrow = param => console.log(param); // 如果只有一句代碼的話 可以這樣寫
//
// const arrow = param => ({param: param}) // 如果需要返回一個對象的話 可以這樣寫
//
// const arrow = (param1, param2, param3) => {}  //如果是傳多個對象的話
//
//
// //{id: 1, movie; xxx}
// const arrow = ({id, movie}) => {
//   console.log(id, movie);
// }


//箭頭函數的好處呢就是代碼可以更精簡

//從前的方法
const luke = {
  id: 2,
  say: function () {
    setTimeout(function () {
      console.log('id:', this.id);
    }, 50)
  },
  sayWithThis: function () {
    let that = this //self me _this
    setTimeout(function () {
      console.log('this id: ', that.id);
    }, 500)
  }, // 舊寫法
  sayWithArrow: function () {
    setTimeout(() => {
      console.log('arrow id', this.id);
    }, 1500)
  }, //最佳寫法
  sayWithGlobalArrow: () => {
    setTimeout(() => {
      console.log('global arrow id', this.id);
    }, 2000)
  }//因為前面已經引用箭頭函數 代表全局id 所以找不到
}

//調用

luke.say()
luke.sayWithThis()
luke.sayWithArrow()
luke.sayWithGlobalArrow()
