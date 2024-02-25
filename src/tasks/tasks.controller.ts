import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'src/schemas/task.schema';
import { UUID } from 'crypto';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { UpdateTaskDTO } from 'src/dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    private taskService: TasksService;

    constructor(taskService: TasksService){
        this.taskService = taskService;
    }

    @Get()
    findAllTasks(): Promise<Task[]> 
    {
        return this.taskService.findAllTasks();
    }

    @Get(':id')
    findTaskById(@Param('id') taskId: UUID): Promise<Task> 
    {
        return this.taskService.findTaskById(taskId);
    }

    @Post('create')
    createTask(@Body() task: CreateTaskDTO): Promise<Task> 
    {
        return this.taskService.createTask(task);
    }

    @Patch('update/:id')
    updateTask(@Param('id') taskId: UUID, @Body() updateFields: UpdateTaskDTO): Promise<Task>
    {
        return this.taskService.updateTask(taskId, updateFields)
    }

    @Delete('delete/:id')
    deleteTask(@Param('id') taskId: UUID): Promise<Task>
    {
        return this.taskService.deleteTask(taskId)
    }
}
