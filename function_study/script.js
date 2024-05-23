// 중요! 함수는 JS에서 제일 중요한 내용이다.
function getName(a, b, c) {
    const name = a;
    const age = b;
    const gender = c;
    const value = name + " " + age + " " + gender;
    return value;
}
const value = getName("Tom",25,"Man");
console.log(value);


function isEven(input) {
    const value = input % 2;
    if (value > 0) {
        return false;
    }else {
        return true;
    }
}
console.log(isEven(3));
console.log(isEven(4));


function getDevice(size) {
    let deviceName;
    if (size < 400){
        deviceName = "모바일";
    } else if (size >= 400 && size < 800) {
        deviceName = "태블릿";
    } else if (size >= 800) {
        deviceName = "PC";
    }
    return deviceName;
}
console.log(getDevice(399));
console.log(getDevice(1024));


//  익명함수
// const isPositive = (num) => {
//     if (num > 0) {
//         return true;
//     }else {
//         return false;
//     }
// };
const isPositive = num=>num=0;  // 위의 코드를 이렇게 한 줄로 줄일 수 있음.
console.log(isPositive(100));