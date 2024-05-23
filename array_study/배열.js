// 배열

// let
let fruits = ["사과", "바나나", "배", "딸기", "메론", "망고", "키위"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);


// splice
//삭제, splice(시작인덱스, 갯수, 새로추가하는 아이템)
const 삭제아이템 = fruits.splice(3,2,"구아바");
console.log(fruits); // 원본수정됨
console.log(삭제아이템);


let colors = ["red", "blue", "yellow", "green", "white", "pink"];
// slice (시작 인덱스, 끝 인덱스)
// 선택담기
// 원본 보존!!
const newColors = colors.slice(1,4);
console.log(colors);
console.log(newColors);


// indexof
const index = colors.indexOf("blue");
console.log(index);
console.log(colors.indexOf("black"));  // 없을때는 -1 리턴


// includes
const isIncludes = colors.includes("green");
console.log(isIncludes);
console.log(colors.includes("black"));


// forEach
// 배열에 사용하는 반복문
// forEach(아이템, 인덱스, 원본배열)
colors.forEach((color, index, array)=>{
  console.log("첫번쨰 매개변수", color);
  console.log("두번쨰 매개변수", color);
  console.log("세번쨰 매개변수", color);
})