import input from 'analiza-sync';
import { board } from '../db/db.js';
import { wins } from './tast.js';

export function play(player){
    console.log(`It's now ${player.name}'s turn.`);
    const choice = input("Choose the cell you want to insert: ")
    if (!isNaN(board[choice -1])){
        board.splice(choice -1,1,player.type)
        if(wins()){
            player.wins +=1
            console.log(board)
            console.log(`The winner is ${player.name}`);
            return true
        }

    }
    else{
        console.log("The place you chose is taken!")
        return console.log(board)
    }
    console.log(board);
}