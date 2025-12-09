import { getInput, measureSolveTime, showStats } from "./utils/ui.js";
import{createPlayer,addSolveTime, calcStats} from "./utils/utilsPlayer.js"
import { askRiddle } from "./utils/utilsRiddles.js";
import allRiddles from "./riddles/allRiddles.js"

function main(){ 

console.log("Welcome to the Riddle Game!");
const userName = getInput("enter your name: ")
const user = createPlayer(userName)
for(let i = 0 ; i < allRiddles.length; i++){
    let time = measureSolveTime(askRiddle , allRiddles[i])
    addSolveTime(user,time)}
const stats = calcStats(user)
console.log(`Great job, ${userName}`)
showStats(stats)}


main()