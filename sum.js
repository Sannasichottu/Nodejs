console.log("Hello, 🤩!!!");

const sum =(a,b )=> a +b;
//console.log(sum(4,5));

//console.log(process.argv);

//const num1=process.argv[2];
//const num2=process.argv[3];

const[, , num1, num2]=process.argv;

console.log(sum(+num1, +num2));
//console.log(document);
//console.log(window);
console.log(global);