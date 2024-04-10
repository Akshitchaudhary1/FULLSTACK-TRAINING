const msg=function message(){
    console.log("Welcome to function expression");
};
msg();
const sum=function(num1, num2){
    let sum=num1+num2;
    console.log("Sum=",sum);
}
sum(20,40);

console.mul=function (num1,num2){
    return num1*num2;
};
console.log("Multiply=",mul(20,6));