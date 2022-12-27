//print the given 3numbers in descending order//
let num1=22;
let num2=55;
let num3=44;
if(num1 > num2 && num1 > num3){
    if(num2 > num3){
        console.log (num1,num2,num3)
    }
    else{
        console.log(num1,num3,num2 )
    }
}
else if(num2 > num1 && num2 > num3){
    if(num1 > num3){
        console.log(num2,num1,num3)
    }
    else{
        console.log(num2,num3,num1)
    }
}
else if(num3 > num2 && num3 > num1){
    if (num2 > num1){
        console.log(num3,num1,num2)
    }
    else{
        console.log(num3,num2,num1)
    }
}