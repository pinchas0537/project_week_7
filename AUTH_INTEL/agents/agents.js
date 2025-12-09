import { agents } from "../db.js"
import { showAllStatus } from "./status.js"

export const agent = {}
export function creatAgent(name,codeName,sector,status){
return agents.push({
    name,
    codeName,
    sector,
    status
})
}

export function filterBySector(bySector){
const agentFilter = agents.filter((agent)=>{
    if(bySector == agent.sector){
        return agent
    }
})
    return agentFilter
}

export function filterByStatus(byStatus){
const agentFilter = agents.filter((agent)=>{
    if(byStatus == agent.status){
        return agent
    }
})
    return agentFilter
}

export function getByName(name){
    agents.forEach((obj)=>{
        if(name == obj.name){
            console.log(obj)
        }
        else{console.log("No agent with that name was found.")}
    })
}

export function getByCodeName(codeName){
    agents.forEach((obj)=>{
        if(codeName == obj.codeName){
            console.log(obj)
        }
        else{console.log("No agent with that name was found.")}
    })
}

export function deleteAgent(name){
    agents.forEach((obj)=>{
        if(name == obj.name){
            const securing = input("Are you sure you want to delete? (y / n)");
            if (securing === "y" || securing === "Y"){
                agents.splice(agents[i],1);
                console.log("The agent was successfully deleted!");
            }
            else{
                console.log("Stay calm, it won't be deleted");
            }
        }
        else{
            console.log("No such number was found in the list!");
        }
    })
}

export function editStatus(name){
    agents.forEach((obj)=>{
        if(name == obj.name){
           const newStatus = showAllStatus()
           obj.status = newStatus
        }
        else{console.log("No agent with that name was found.")}
    })
}