import { board, players } from "./db/db.js";
import { play } from "./utils/game.js";
import { craetPlayer } from "./utils/player.js";

function app(){
craetPlayer("X")
craetPlayer("O")
console.log(board)
for(let i =0;i<=4;i++){
    if(play(players[0])){
        return
    }
    if(play(players[1])){
        return
    }}
    console.log("No winner. Draw!");
}
app()