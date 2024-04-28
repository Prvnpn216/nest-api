import { Body, Controller, Post, Get,Patch, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateUser, UpateUser } from './dtos/user.dto';
@Controller('admin')
export class AdminController {
    constructor(private adminService : AdminService ){}
    
    @Get()
    getAllUsers() : {}
    {
        return this.adminService.getAllUsers();
    }

    @Post()
    createAdmin(@Body() body:CreateUser) : {}
    {
        this.adminService.createUser(body)
        return this.adminService.getAllUsers() 
    }

    @Patch(':id')
    updateUser(@Param('id') id : string,@Body() body:UpateUser) : {}
    {
        this.adminService.updateUser(+id,body)
        return this.adminService.getAllUsers()
    }
}
