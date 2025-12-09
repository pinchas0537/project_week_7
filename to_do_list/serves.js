import input from "analiza-sync";
import chalk from 'chalk';
import { creatTask, delTask, shwoTasks, updatTask } from "./tasks.js";
import { showAllSort } from "./sort.js";
import { allStatus } from "./status.js";

const all_Func = ["Show all tasks","Create a new task", "Edit task","Deleting a task","Exit"]
export function showAllFunc(){
    all_Func.forEach((choice,i)=>{
    console.log(chalk.red(`${i+1}.${choice}`));
    })
}

export function allFunc(){
    let fleag = true
    do{
       const input_ch = input(chalk.blue("Choose what you want to do? "));
       switch(input_ch){
        case "1":
            showAllSort();
        break;

        case "2":
            creatTask(input("Enter a name: "), input("Enter a details: "),allStatus());
        break;

        case "3":
            console.log(updatTask(input("Enter a name: ")));
        break;

        case "4":
            delTask(input("Enter id: "))
        break

        case "5":
            fleag = false;
        break;

        default: console.log("ERROR, There is no such possibility.")
       }
    }
    while(fleag)   
}