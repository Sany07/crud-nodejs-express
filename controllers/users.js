// import { userList } from "../data.js"
import { v4 as uuidv4 } from 'uuid';

let userList = [
    {
        firstName : "ZS", 
        lastName : "Erica",
        address : "Uk",
        id:"ee1"
    }
]

export const allUsers = (req,res)=>{
    res.send(userList)
}

export const createUser = (req,res)=>{
    try{
        userList.push({...req.body,id:uuidv4()})
        res.send('User saved')
    }catch(e){
        console.log('error');
    }
}

export const singleUser =(req,res)=>{
    try{
        const user = userList.find((user)=>user.id === req.params.id)
        res.send(user)
    }catch(e){
        console.log("error",e);
    }

}
export const deleteUser =(req,res)=>{
    try{
        userList = userList.filter((user)=>user.id !== req.params.id)
        res.send(userList)
    }catch(e){
        console.log("error",e);
    }    
}

