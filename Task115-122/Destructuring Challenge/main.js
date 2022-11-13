let chosen = 1;

let myFriends = [
    {title: "Osama", age: 39, available: true, skills: ["HTML" , "CSS"]},
    {title: "Ahmed", age: 25, available: false, skills: ["Python" , "Django"]},
    {title: "Sayed", age: 33, available: true, skills: ["PHP" , "Laravel"]}
];

if(chosen === 1){
    [{title: n, age: a, available: avi, skills: [one , two]}] = myFriends;
    console.log(n)
    console.log(a)
    if(avi === true){
        console.log(`Available`)
    }else{
        console.log(`Not Available`)
    }
    console.log(two)
}else if(chosen === 2){
    [, {title: n, age: a, available: avi, skills: [one , two]}] = myFriends;
    console.log(n)
    console.log(a)
    if(avi === true){
        console.log(`Available`)
    }else{
        console.log(`Not Available`)
    }
    console.log(two)
}else if(chosen === 3){
    [, ,{title: n, age: a, available: avi, skills: [one , two]}] = myFriends;
    console.log(n)
    console.log(a)
    if(avi === true){
        console.log(`Available`)
    }else{
        console.log(`Not Available`)
    }
    console.log(two)
}