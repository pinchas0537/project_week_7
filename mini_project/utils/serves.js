import { creatUser, deleteUser, readById, searchByUsername, updateUser } from "./users.js";
import input from "analiza-sync"

const all_menu = [
    "Create user",
    "Read user by ID",
    "Update user",
    "Delete user",
    "Search by username",
    "Exit"]

function showmenu(){
    all_menu.forEach((choice,i)=>{
    console.log((`${i+1}.${choice}`));
    })
}

export function showAllmenu(){
    let fleag = true
    do{
        showmenu()
        const choice = input("Choose what you want to do? ")
        switch(choice){
            case "1":
                creatUser(input("enter a user name: "), input("enter a role: "));
                break;

            case "2":
                console.table(readById(input("enter id: ")));
                break;

            case "3":
                updateUser(input("enter id: "));
                break;

            case "4":
                deleteUser(input("enter id: "));
                break;

            case "5":
                console.table(searchByUsername(input("enter a user name: ")));
                break;

            case "6":
                fleag = false;
                break;

            default:console.log("There is no such possibility.")
        }
    }
    while(fleag)
}