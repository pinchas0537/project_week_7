import input from "analiza-sync";
import  {task}  from "./tasks.js"; 

function showStatus(){
const statusTask = ["new","In action","Ended"]
    statusTask.forEach((choice,i)=>{
    console.log(`${i+1}.${choice}`);
    })
}

export function allStatus(){
    showStatus()
    const status = input("Choose a status by the numbers: ")
    switch(status){
        case "1":
        return "new";

        case "2":
        return "In action";

        case "3":
            return "Ended";
        default: console.log("There is no such possibility.")
}
return task.status
}
