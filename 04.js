
const users = ['mockIng99', 'J0eyPunch', 'glassedFer'];


function displayUsers(arr) {
    const count =arr.length;
    let  res;

    if (count === 1){
        res= `${ arr[0] }  is ononline`;
    } else if (count ===2){
res = `${arr[0]} and ${arr[1]} are online`;
} else {
res = `${arr.[0]}, ${arr[1]} and ${count -2} more are online`;
            }
        return res;
    }
    console.log(displayUsers(users));
}
