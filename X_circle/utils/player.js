import input from 'analiza-sync';
import { players } from '../db/db.js';

export function craetPlayer(type){
    const name = input("enter a name: ")
    players.push({
        name : name,
        wins:0,
        type
    })
}
