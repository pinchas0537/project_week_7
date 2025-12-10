import { DB } from "../DB/db.js";
import { nanoid } from "nanoid";
import input from "analiza-sync"

export function creatUser(username,role){
return DB.users.push({
    username,
    role,
    id: nanoid()
})
}

export function readById(id){
    const newdb = DB.users.find((user)=> {
        if(id == user.id){
            return user
        }
    })
    return newdb
}

export function updateUser(id){
    DB.users.find((user)=>{
        if(id === user.id){
            user.username = input("enter a new user name: ");
            user.role = input("enter a new role: ");
        }
        else{console.log("No user with that id was found.")};
    });
};

export function deleteUser(id){
    DB.users.find((user,i)=>{
        if(id === user.id){
        const securing = input("Are you sure you want to delete? (y / n)");
        if (securing === "y" || securing === "Y"){
            DB.users.splice(DB.users[i],1);
            console.log("The user was successfully deleted!");
        }
        else{console.log("Stay calm, it won't be deleted")};
        }
        else{console.log("No user with that id was found.")};
    })
}

export function searchByUsername(username){
    const usernam = DB.users.filter((user)=>{
        let result = user.username.includes(username)
        if(result){
            return user
        }
        else{console.log("No user with that name was found.")};
    })
    return usernam
}