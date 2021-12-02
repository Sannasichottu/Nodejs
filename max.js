console.log("max!!!!");

//array num's from user display maximum value
console.log(process.argv, typeof process.argv);

//string to array
const [, ,nums]=process.argv;
console.log("Input string: ", nums);

const arr =JSON.parse(nums);
console.log("convert to array: ", arr);
console.log("Max num is: ", Math.max(...arr));
