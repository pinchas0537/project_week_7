import { getInput } from "./ui.js";

export function askRiddle(riddle){
    console.log(`riddle ${riddle.id}`)
    console.log(riddle.name);
    console.log(riddle.taskDescription);
     if (riddle.choices){
                riddle.choices.forEach((choice,i)=>{
                console.log(`${i+1}.${choice}`);
        })
    }
        let answer = getInput("Enter your answer: ").trim()

        while(true){
            if (riddle.choices){
                if((answer -1) + "" === riddle.correctAnswer){
                    console.log("good");
                    break
                }}
                else {
                  if(answer === riddle.correctAnswer){
                    console.log("good")
                    break
                  }
                }
            console.log("Wrong Answer.");
            answer = getInput("Enter your answer: ").trim();
            
        }
    }