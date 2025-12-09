import input from 'analiza-sync';
import { agent } from './agents.js';

const allStatus = ["Active without a mission","Active in the mission","Discovered","retired"]
function all_status(){
    allStatus.forEach((choice,i)=>{
    console.log((`${i+1}.${choice}`));
    })
}

export function showAllStatus(){
    all_status()
    const choice = input("Choose what you want to do? ")
        switch(choice){
            case "1":
                return "Active without a mission";
            
            case "2":
                return "Active in the mission";

            case "3":
                return "Discovered";

            case "4":
                return "retired";

            default: console.log("There is no such possibility.")
    }
    return agent.sector                
}