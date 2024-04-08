const msg=()=>console.log("Arrow function");
let data=[10,20,30,50,60,70,,"KIET",msg];
console.log(data);
data[6];
data.forEach(value=>console.log(`value of array =${value}`));
// for(let value of data){
//     console.log(`value of array=${value}`);
// }

// for(let index in data){
//     console.log(`value of ${index} is ${data[index]}`);
// }


// for(let i=0;i<data.length;i++){
//     console.log(`value of ${i} is $(data{i})`);
// }