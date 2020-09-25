import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { TaskStatus } from "../task-status.entity";

export class GetTasksFilterDto{
    @IsOptional()
    @IsIn([TaskStatus.IN_PROGRESS,TaskStatus.OPEN,TaskStatus.DONE])
    status:string;

    @IsOptional()
    @IsNotEmpty()
    search:string;
}