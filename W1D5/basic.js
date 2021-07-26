function myFunction(expected, found) {
    if(expected===found) {
        return "TEST SUCCEED"
    } else {
        return "TEST FAILED. Expected output is"+" "+expected+ " "+"Found is "+found;
    }
}

//problem1 
function max(num1,num2){
     return num1>num2 ? num1 : num2;
}

// console.assert(max(1,2)===2 ,"Expected output of max of 1 and 2 is 2 Test Failed");
console.log("Expected output of max of 1 and 2 is 2"+" "+myFunction(2,max(1,2)));


//problem2 
function maxThree(num1,num2, num3){
    if(num1>num2 && num1>num2) {
        return num1
    } 
    else if(num2>num1 && num2>num3){
        return num2
    }
    return num3;
}
console.log("Expected output of max of 1,2,3 is 3"+" "+myFunction(3, maxThree(1,2,3)))


//problem 3
function isVowel(c) {
    if (c.length !== 1)
        return false;

    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}

console.log("Expected output of isVowel 'a' is true", myFunction(true, isVowel('a')));
console.log("Expected output of isVowel 'B' is false", myFunction(false, isVowel('B')));


//problem4  part a

function sum(arr) {
    let s=0;
    for(let i = 0 ; i < arr.length ; i++){
        s+= arr[i];
    }
    return s;
}

console.log("Expected output for [1,2,3] is 6 ", myFunction(6, sum([1,2,3])));


//problem4 part b

function multply(arr) {
    let m=1;
    for(let i=0;i<arr.length;i++) {
        m*= arr[i];
    }
    return m;
}

console.log("Expected output for [1,2,4] is 8", myFunction(8, multply([1,2,4])));


//problem 5

function reverse(name) {
     return name.split("").reverse().join("");
}

console.log("Expected ouptut is ratset gaj" , myFunction("ratset gaj",reverse("jag testar")));


//problem 6

function findLongestWord1(words) {
   return words.reduce((longest,w) => longest.length > w.length ? longest : w ,"");
} 

console.log("Expected output for ['I', 'AM', 'Meghraj'] is 'Meghraj'" ,
myFunction('Meghraj',findLongestWord1(['I', 'AM', 'Meghraj'])));


//problem 7

function filterLongWords(words, i) {
    return words.filter(w => w.length > i).toString();
}
console.log(filterLongWords(['Srilanka', 'Nepal', 'USA'],5));
console.log("Expected output of findLongestWords ['Srilanka', 'Nepal', 'India'] is Srilanka ",
<<<<<<< HEAD
 myFunction("Srilanka", filterLongWords(['Srilanka', 'Nepal', 'India'],5)));
=======
 myFunction("Srilanka", filterLongWords(['Srilanka', 'Nepal', 'USA'],5)));
>>>>>>> 79501f8691386f3872507d8a9e68b83d46a36d96



 //problem 8
   //a) Multiply each element by 10
   function mult(a) {
       return a.map(e=>e*10).toString();
   }
       console.log(mult([1,3,5,3,3]))
       console.log("Expected result is [10,30,50,30,30]",myFunction(("10,30,50,30,30")
        ,mult(([1,3,5,3,3]))));
   

//b) return all elements equals to 3
 function equals(arr){
     return a=arr.filter(n=>n===3).toString();
 }
 console.log("Expectd output is [3,3,3]",myFunction("3,3,3",equals([1,3,5,3,3])));
//b) retun product of all elements
function multiplyAll(nums) {
    return nums.reduce((e1,e2)=>e1*e2);
}
console.log("Expected output is 135", myFunction(135,multiplyAll([1,3,5,3,3])))



