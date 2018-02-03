export const name = 'Luke'
export const getName = () => {
  return name
}

const age = 19

// export default age;

//直接暴露 導出可以不加{}

//批量導出
export {
  name as name2,
  getName as getName2,
  age
}
