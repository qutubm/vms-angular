
export class ProjectsExtra {
    // profile_id: number;
    // role: string;
    // profile_email: string;
    // profile_password: string;
    // profile_passwordConfirmed:string;
    // profile_firstName: string;
    // profile_lastName: string;
    // profile_suburb: string;
    // profile_state: string;
    // profile_phone: string;
    // additional_email: string;
    // additional_phone: string;
   success: boolean;
   Message : string;
   Errors : string[];
   Projects: Projects[];
}
/*
"Id":"","Name":null,"SkillsRequired":null,"CreatedDate":null,"DueDate":null,"EstimatedDueDate":null,"Type":"","Completed":"N"
*/
export class Projects {

    Id: string;
    Name: string;
    DueDate: string;
    CreatedDate: string;
    EstimatedDueDate: string;
    Type: string;
    SkillsRequired: string;
    Completed: string;
}

export class ProjectTasksExtra {
    // profile_id: number;
    // role: string;
    // profile_email: string;
    // profile_password: string;
    // profile_passwordConfirmed:string;
    // profile_firstName: string;
    // profile_lastName: string;
    // profile_suburb: string;
    // profile_state: string;
    // profile_phone: string;
    // additional_email: string;
    // additional_phone: string;
   success: boolean;
   Message : string;
   Errors : string[];
   Projects: Projects[];
}