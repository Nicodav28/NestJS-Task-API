import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { Model } from 'mongoose';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { UpdateTaskDTO } from 'src/dto/update-task.dto';
import { Task } from 'src/schemas/task.schema';

@Injectable()
export class TasksService {
    private taskModel: Model<Task>;

    constructor(@InjectModel(Task.name) taskModel){
        this.taskModel = taskModel;
    }

    async findAllTasks(): Promise<Task[]>
    {
        return this.taskModel.find().exec();
    }

    async createTask(task: CreateTaskDTO): Promise<Task> 
    {
        const newTask = new this.taskModel(task);
        return newTask.save();
    }

    async findTaskById(taskId: UUID): Promise<Task>
    {
        return this.taskModel.findById(taskId).exec();
    }

    async updateTask(taskId: UUID, task: UpdateTaskDTO): Promise<Task>
    {
        return this.taskModel.findByIdAndUpdate(taskId, task, { new: true }).exec();
    }

    async deleteTask(taskId: UUID): Promise<Task>
    {
        return this.taskModel.findByIdAndDelete(taskId).exec();
    }
}
