import { Priority } from "src/enum/task-priority.enum";
import { TaskStatus } from "src/enum/task-status.enum";
import { IsString, IsEnum, IsOptional, IsNotEmpty } from "class-validator";

export class CreateTaskDTO{
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsEnum(Priority)
    @IsNotEmpty()
    priority: Priority;
}