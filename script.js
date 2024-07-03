// ДЗ
// 1. Напишите стрелочную функцию, которая принимает два числа и возвращает их произведение (умножение
// 2. Напишите стрелочную функцию, которая принимает два числа и возвращает наименьшее из них
// 3. Напишите стрелочную функцию, которая принимает число и возвращает true, если число чётное, и false, если нечётное.
// 4. Напишите стрелочную функцию, которая принимает число и возвращает его квадрат.
// *5. Напишите стрелочную функцию, которая принимает строку и возвращает true, если строка является палиндромом, и false в противном случае.

// 1. =====================================================

const getMultiplyNums = (num1, num2) => num1 * num2;

console.log(getMultiplyNums(2, 3));

// 2. =====================================================

const getMin = (num1, num2) => Math.min(num1, num2);

console.log(getMin(10, 5));

// 3. =====================================================

const isEven = (num1) => (num1 % 2 === 0 ? true : false);
// {
//     if (num1 % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
console.log(isEven(8));

// 4. =====================================================

const squareNum = (num1) => num1 ** 2;

console.log(squareNum(5));

// 5*. =====================================================

const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  // if (str === reversedStr) {
  //     return true
  // } else {
  //     return false
  // }
  return str === reversedStr;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

//6**. Напишите функцию getArraySum(array), которая в качестве аргумента
// получить многомерный массив и вернет сумму всех элементов

// getArraySum([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]) => 6 + 15 + 24 => 45

// getArraySum([
//     [1],
//     [2],
//     [3],
// ]) =>  6

// getArraySum([
//     [1,2],
//     [5],
// ]) =>  8

const getArraySum = (arr) => {
    // const combinedArr = []
    // for (let i = 0; i < arr.length; i++){
    //     combinedArr.push(...arr[i])
    // }

    const combinedArr = arr.flat() 
    // метод .flat() создаёт новый массив, объединяя все вложенные массивы на указанном уровне вложенности. В данном случае, вызов arr.flat() объединяет все подмассивы в один массив.

    let result = 0;
    for (let i = 0; i < combinedArr.length; i++) {
        result += combinedArr[i];
    }
    return result
}

console.log(getArraySum([
    [1,2,3],
    [4],
    [7,3,10]]));
