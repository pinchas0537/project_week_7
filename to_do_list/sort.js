import { tasks } from "./tasks.js";
import input from "analiza-sync";

const allSort = ["From new to old","From old to new","By status","Search by name"]

function showSort(){
    allSort.forEach((choice,i)=>{
    console.log(`${i+1}.${choice}`);
    })
}

function sortByNew(){
    console.log(
   tasks.toSorted((a,b)=>{
    return new Date(b.date) - new Date(a.date);
   }));
}

function getTaskByOld(){
    console.log(
    tasks.toSorted((a,b)=>{
    return new Date(a.date) - new Date(b.date);
   }));
}

function getTaskByStatus(){
    console.log(
        tasks.toSorted((a,b)=>{
            return a.status.localeCompare(b.status)
        })
    )
}

function getByName(name){
    tasks.forEach((obj)=>{
        if(name == obj.name){
            console.log(obj);
        }
    else{console.log("No task with that name was found.") 
        return
    }
    })
}

export function showAllSort(){
    showSort()
    const inputSort = input("Select the desired option: ")
    switch(inputSort){
        case "1":
            sortByNew();
            break;

        case "2":
            getTaskByOld();
            break;

        case "3":
            getTaskByStatus()
            break;
        
        case "4":
            getByName(input("Enter a name: "));
            break;
        default: console.log("There is no such possibility.")
    }
}