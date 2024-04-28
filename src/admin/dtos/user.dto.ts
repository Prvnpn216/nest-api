import { IsNotEmpty } from "class-validator";

export class CreateUser{
    name:string;
    @IsNotEmpty()
    role:'Admin'|'Manager'|'Engineer'|'Quality'
}

export class UpateUser{
    name? : string;
    role? : 'Admin'|'Manager'|'Engineer'|'Quality'
}
