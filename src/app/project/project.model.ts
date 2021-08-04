
/*
"Id":"","Name":null,"SkillsRequired":null,"CreatedDate":null,"DueDate":null,"EstimatedDueDate":null,"Type":"","Completed":"N"
*/

import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { SelectListItem } from "../shared";

export class Project {
    Id: string;
    Name: string;
    EstimatedCompletionDate: string; //NgbDate;
    ActualCompletionDate: string; //NgbDate;
    CreatedDate: string; //NgbDate;
    SkillsRequired: string;
    Completed: string;
}


export class ProjectModel{
    Project : Project;
    Success : Boolean;
    Message: string;
    Errors: string[];
}

export class ProjectsModel {
    success: boolean;
    Message : string;
    Errors : string[];
    Projects: Project[];
 }

 export class Task
 {
    Id: string;
    ProjectId: string;
    Name: string;
    ProfileId: string;
    EstimatedCompletionDate: string; //NgbDate;
    ActualCompletionDate: string; //NgbDate;
    CreatedDate: string; //NgbDate;
    Completed: string;
    Rating: number;
 }

 export class TaskView extends Task
 {
   Resource : string;
 }

 export class TasksModel
 {
    success: boolean;
    Message : string;
    Errors : string[];
    Tasks: TaskView[];
 }

 export class TaskModel
 {
    Success: boolean;
    Message : string;
    Errors : string[];
    Task: Task;
 }

 export class ResourcesModel{
    Resources: SelectListItem[]; 
    success: boolean;
    Message : string;
    Errors : string[];
 }
