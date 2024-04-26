function shortenArray (arr){
    const midpoint= Math, floor (arr.length /2);
    const parte1= arr.slice (0,midpoint);
    const parte2= arr.slice (midpoint + (arr.length % 2 === 0 ? 0 : 1) ));
    const result = [];
for( let i = 0; i < parte1.length; i++){
    result.push ((parte1[i] + parte2 - 1 - i) /  2 );
}
return result;
return result;
}
console.log(shortenArray(inputArray));
