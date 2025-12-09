export function createPlayer(name){
   return {name,
    times:[]
   }
}

export function addSolveTime(player, seconds){
    return player.times.push(seconds)
}

export function calcStats(player){
    let sum = 0
    player.times.forEach((time) => {
        sum += time
    })
    const avg = (sum / player.times.length);
    return{
        sum,
        avg
    }
}