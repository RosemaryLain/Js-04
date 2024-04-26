
const member1 = ["Esperanza", "Franco", "Nia"];
const member2 = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"]:
const member3 = ["Harry", "Ron", "Hermione"];


functio secretName(arr){
    let.res=[];
    arr.forEach((e) => res.push(e.charArt(0)));
    return res.sort().join("");
}
console.log(secretName (member1));
console.log(secretName (member2));
console.log(secretName (member3));
 

