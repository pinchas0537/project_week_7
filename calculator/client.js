import input from "analiza-sync";
import { add,sub,div,mul,root,pawer } from "./clculator.js";

export function showFunc(){
    const all_func = ["add","sub","div","mul","root","pawer","exit"]
all_func.forEach((choice,i)=>{
    console.log(`${i+1}.${choice}`);
})
}

export function showSelection(){
let fleag = true
do{
showFunc()
const input_ch = input("Choose what you want to do? ")

const num1 = Number(input("Enter a number: "))
const num2 = Number(input("Enter a number: "))

switch (input_ch){

    case "1":
        const sum = add(num1,num2)
        console.log(`${num1} + ${num2} = ${sum}`);  
        break

    case "2":
        const sum1 = sub(num1,num2)
        console.log(`${num1} - ${num2} = ${sum1}`);
        break

    case "3":
       const sum2 = div(num1,num2)
        console.log(`${num1} / ${num2} = ${sum2}`)
        break

    case "4":
       const sum3 = mul(num1,num2)
        console.log(`${num1} * ${num2} = ${sum3}`);
        break

    case "5":
        const sum4 = root(num1,num2)
        console.log(`${num1} √ ${num2} = ${sum4}`);
        break

    case "6":
        const sum5 = add(num1,num2)
        console.log(`${num1} ^ ${num2} = ${sum5}`);
        break

    case "7":
        fleag = false
        break

    default: console.log("Number is not dufind")
}}
while(fleag);}