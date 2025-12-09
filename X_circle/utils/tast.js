import { board } from "../db/db.js";

export function wins(){
    if(
        (board[0]===board[1] && board[1]===board[2])||
        (board[3]===board[4]&& board[4]===board[5])||
        (board[6]===board[7]&& board[7]===board[8])||
        (board[0]===board[3]&& board[3]===board[6])||
        (board[1]===board[4]&& board[4]===board[7])||
        (board[2]===board[5]&& board[5]===board[8])||
        (board[0]===board[4]&&board[4]===board[8])||
        (board[2]===board[4]&&board[4]===board[6])
    ){
        return true
    }
    else{
        return false
    }
}