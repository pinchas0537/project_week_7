import { nanoid } from 'nanoid'
import input from "analiza-sync";
import { exit } from 'process';

export const tasks = []
export const task = {}
export function creatTask(name,details,status){
    return tasks.push({
    name,
    id : nanoid(),
    date : new Date(),
    details,
    status})
}

export function updatTask(name){
    tasks.forEach((upd)=>{
        if(name === upd.name){
            upd.name = input("Enter a name: ");
            upd.details = input("Enter a details: ");
        }
        else{console.log("No task with that name was found.")
            exit
        };
    });
    return tasks
}

export function delTask(id){
    for(let i = 0;i<tasks.length;i++){
        if(id === tasks[i].id){
            const securing = input("Are you sure you want to delete? (y / n)");
            if (securing === "y" || securing === "Y"){
            tasks.splice(tasks[i],1);
            console.log("The task was successfully deleted!");
            }
            else{console.log("Stay calm, it won't be deleted")};
            console.log(tasks)
        }
    else{console.log("No such number was found in the list!")
        break
    };
    }
}
