//Suma de resistencia en serie
const res1 = [-1.5,6,3];
const res2 = [14,3.5,6];
const res3 = [8,15,100];

function sumResistance (arr) {
    const arr2=[];
    arr.forEach ((e)=> arr2.push (Math.abs(e)));
let res =0;
arr2.forEach((e)=>(res = res +e ))
    console.log(`${res}ohms`);
}
sumResistance(res3);


funtion sumResistance2(arr){
    const arr2=[];
    const res= 0;
    for (let i=0;i<arr.length;i++){     
    }
    return res;
}
sumResistance (res3);
const try2 = sumResistance2(res1);
console.log(try2);




