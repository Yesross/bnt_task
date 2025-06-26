//reverse a string
const str="swe";
const rev=str.split('').reverse().join('');//only for string
console.log(rev)

//palindrome
const original=123;
const reverse=Number(original.toString().split('').reverse().join(''));

if(original===reverse){
    console.log("palindrome")
}else{
    console.log(" not palindrome")
}

//find the largest in array

const checkarray=[10,30,12,3,50,1]
const answer=checkarray.reduce((acc,curr)=>(acc>curr?acc:curr),checkarray[0])
console.log(answer)


//check thenumbers of vowels

const sent="Swe";
const vowels=["a","e","i","o","u","A","E","I","O","U"];
let count=0;
for(i=0;i<sent.length;i++){
     
    if(vowels.includes(sent[i])){
        count++
    }
}
console.log(count)


//factoriol

let n=3;
let fact=0;
for(i=1;i<=n;i++){
    fact=fact*i //2
}//3
console.log("factorial",fact)

//prime
let num =5;
let isprime=true;
for( let i=2;i<num;i++){
    if(num%i===0){
        isprime=false;
        break;
    }
}
if(isprime){
    console.log("prime number")
}else{
    console.log(" not prime number")
}


//to find remove duplicate in array

const duplicate=[10,11,12,13,14,10]
let empty=[];
for(let i=0; i<duplicate.length;i++){
    if(!empty.includes(duplicate[i])){
        empty.push(duplicate[i])
    }
}
console.log("removed duplicate",empty)

//sum of array element
const array=[1,2,3,4,5]
const ans=array.reduce((acc,curr)=>(acc+curr),0)
console.log("sum of an array",ans)



//fibonacci

let len=5;
let num1=0;
let num2=1;
let fibo;
console.log(num1,num2);
for(let i=0;i<=len;i++){
    fibo=num1+num2;
    console.log(fibo);
    num1=num2;
    num2=fibo;
}



//first  non repeating character  string=mummy

const string="mummy";
let output;

for(let i=0;i<string.length;i++){
    let unique=true;
    for(let j=i+1;j<string.length;j++){//u m m y
        if(string[i]===string[j]){//m===u m===m m===m m===y
            unique=false;
            break
        }
    }
    if(unique){
        output=string[i]//m 
        break
    }
}
console.log(output)