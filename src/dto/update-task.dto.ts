import { Priority } from "src/enum/task-priority.enum";
import { TaskStatus } from "src/enum/task-status.enum";
import { IsString, IsEnum, IsOptional, IsNotEmpty } from "class-validator";

export class UpdateTaskDTO{
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsEnum(Priority)
    priority?: Priority;

    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;
}