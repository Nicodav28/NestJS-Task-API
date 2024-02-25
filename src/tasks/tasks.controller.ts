import { Controller, Get, Post, Patch, Delete, Param, Body, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'src/schemas/task.schema';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { UpdateTaskDTO } from 'src/dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    private taskService: TasksService;

    constructor(taskService: TasksService){
        this.taskService = taskService;
    }

    @Get()
    async findAllTasks(): Promise<Task[]> 
    {
        const tasks = await this.taskService.findAllTasks();

        if(tasks.length == 0) throw new NotFoundException("No tasks found.");

        return tasks;
    }

    @Get(':id')
    async findTaskById(@Param('id') taskId: string): Promise<Task> 
    {

        const task = await this.taskService.findTaskById(taskId);

        if(!task) throw new NotFoundException("Task not found");

        return task;

    }

    @Post('create')
    async createTask(@Body() task: CreateTaskDTO): Promise<Task> 
    {
        try{
            return await this.taskService.createTask(task);
        }catch(error){
            if(error.code == 11000){
                throw new ConflictException("Task already exists.")
            }

            throw new Error;
        }
    }

    @Patch('update/:id')
    async updateTask(@Param('id') taskId: string, @Body() updateFields: UpdateTaskDTO): Promise<Task>
    {
        const updatedTask = await this.taskService.updateTask(taskId, updateFields)

        if(!updatedTask) throw new NotFoundException("Task not found");

        return updatedTask;
        
    }

    @Delete('delete/:id')
    @HttpCode(204)
    async deleteTask(@Param('id') taskId: string): Promise<Task>
    {
        const deletedTask = await this.taskService.deleteTask(taskId)

        if(!deletedTask) throw new NotFoundException("Task not found");

        return deletedTask;
    }
}
