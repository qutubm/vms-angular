export class GetMappings {
  Errors: string[];
  Message: string;
  Success: string;
  ProjectTaskMappings: ProjectTaskMappings[];
}

export class ProjectTaskMappings {

    id: string;
    projectId:string;
    profileId:string;
    taskName:string;
    taskDescription:string;
    taskDueDate:string;
    taskCompletedDate:string;
    taskRating:number;
    type:string;

  /*
    "id": "string",
  "projectId": "string",
  "profileId": "string",
  "taskName": "string",
  "taskDescription": "string",
  "taskDueDate": "string",
  "taskCompletedDate": "string",
  "taskRating": 0,
  "type": "string"
  */
}
