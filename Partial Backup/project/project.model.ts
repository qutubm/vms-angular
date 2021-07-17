
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
    // `proj_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY, /* The second parent table that associates the task*/
    // `proj_name` varchar(50) NOT NULL, /* The name of the project*/
	// `staff_id` int, /* Identifies the staff whom is assigned to handle the matters and members of the project. This data can also be used to display contact information. */ 
  	// `volunteer_id` int, /* Identifies the team leader of the project.  */
    // `proj_skills_required` varchar(100), /* Identifies the project skills required to execute the project successfully. */
    // `proj_real_due_date` datetime, /* The calculated due date of the project. So long as the staff enters the due date of the task, we can calculate the time the project would be completed. Automatic recalculation can happen as well  */
    // `proj_estimated_due_date` datetime, /* The estimated due date of the project assigned by staff. */
    
    Id: string;
    Name: string;
    DueDate: string;
    CreatedDate: string;
    EstimatedDueDate: string;
    Type: string;
    SkillsRequired: string;
    Completed: string;
    
}

export class ProjectTaskMappingsExtra {

}
export class ProjectTaskMappings {
    
}
