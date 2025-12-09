import input from 'analiza-sync';
import { agent } from './agents.js';

const allSector = ["Gaza","Lebanon","Iran"]
function all_sector(){
    allSector.forEach((choice,i)=>{
    console.log((`${i+1}.${choice}`));
    })
}

export function showAllSecort(){
    all_sector()
    const choice = input("Choose what you want to do? ")
        switch(choice){
            case "1":
                return "Gaza";
            
            case "2":
                return "Lebanon";

            case "3":
                return "Iran";
            
            default: console.log("There is no such possibility.")
    }
    return agent.sector                
}