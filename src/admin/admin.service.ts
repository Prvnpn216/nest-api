import { Injectable } from '@nestjs/common';
import { CreateUser, UpateUser } from './dtos/user.dto';

@Injectable()
export class AdminService {
    private users = [
        {
            id: 1,
            name: "Rishabh",
            role:'Admin'
        },
        {
            id: 2,
            name: "Rakesh",
            role:'Manager'
        },
        {
            id: 3,
            name: "Kshitij",
            role:'Engineer'
        },
        {
            id: 4,
            name: "Sahil",
            role:'Quality'
        }
    ];

    public getAllUsers(){
        return this.users;
    }

    public createUser(body : CreateUser){
        let id =  this.users.length + 1
        let user = {"id":id,...body}
        this.users.push(user)
    }

    //this updates the current users array
    public updateUser(id:number,body : UpateUser)
    {
        this.users = this.users.map(user =>{
            if(user.id === id){
                return {...user,...body}
            }
            return user
        })
        
    }
}
