import input from 'analiza-sync';
import { creatAgent, deleteAgent, editStatus, filterBySector, filterByStatus, getByCodeName, getByName } from "./agents.js";
import { showAllSecort } from './sector.js';
import { showAllStatus } from './status.js';

const all_Func = [
    "Create a new agent",
    "Show all agents by secort",
    "Show all agents by status",
    "Search by name",
    "Search by code name",
    "delete agent",
    "edit status",
    "edit sector",
    "Exit"]

export function allFunc(){
    all_Func.forEach((choice,i)=>{
    console.log((`${i+1}.${choice}`));
    })
}
export function showAllFunc(){
    let fleag = true
    do{
        allFunc()
        const choice = input("Choose what you want to do? ")
        switch(choice){
            case "1":
                creatAgent(input("Enter a name: "),input("Enter a code name: "),showAllSecort(),showAllStatus());
                break;

            case "2":
                console.log(filterBySector(showAllSecort()));
                break;

            case "3":
                console.log(filterByStatus(showAllStatus()));
                break;

            case "4":
                getByName(input("Enter a name agent: "));
                break;

            case "5":
                getByCodeName(input("Enter a code name agent: "));
                break;
            case "6":
                deleteAgent(input("Enter the name of the agent you want to delete: "));
                break;
            case "7":
                editStatus(input("Enter agent name:"));
                break;

            case "8":
                console.log("The feature is in development.");
                break;

            case "9":
                fleag = false;
                break;

            default:console.log("There is no such possibility.")
        }
    }
    while(fleag)
}