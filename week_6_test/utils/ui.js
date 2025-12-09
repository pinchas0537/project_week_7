import { question } from "readline-sync"


export function getInput(msg = "Enter: "){
    return (question(msg))
}

export function showStats(stats){
    console.log(stats);
}

export function measureSolveTime(fn,riddle){
    const time1 = Date.now() / 1000
    fn(riddle)
    const time2 = Date.now() / 1000
    return (time2 - time1)
}
