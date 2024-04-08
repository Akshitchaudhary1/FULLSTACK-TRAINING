let studentInfo={
    rollno:1,
    name:"Akshit Chaudhary",
    coursee:"MCA",
    collage:"Kiet",
    marks:[10,20,30,40],
    music:()=>console.log("play music"),
    play:function playfun(){console.log("play cricket")},
}
let arrayvalue=[studentInfo,studentInfo,studentInfo];
arrayvalue.forEach(item=>console.log(item.name));
console.log(studentInfo.marks);
console.log(studentInfo.play());
