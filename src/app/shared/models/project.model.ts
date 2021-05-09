import { ProjectMembers } from '../models/project-members.model';

export class ProjectModel {
    // `proj_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY, /* The second parent table that associates the task*/
    // `proj_name` varchar(50) NOT NULL, /* The name of the project*/
	// `staff_id` int, /* Identifies the staff whom is assigned to handle the matters and members of the project. This data can also be used to display contact information. */ 
  	// `volunteer_id` int, /* Identifies the team leader of the project.  */
    // `proj_skills_required` varchar(100), /* Identifies the project skills required to execute the project successfully. */
    // `proj_real_due_date` datetime, /* The calculated due date of the project. So long as the staff enters the due date of the task, we can calculate the time the project would be completed. Automatic recalculation can happen as well  */
    // `proj_estimated_due_date` datetime, /* The estimated due date of the project assigned by staff. */
    id: number
    proj_id: number;
    proj_name: string;
    staff_id: string;
    volunteer_id: string;
    proj_skills_required: string;
    proj_real_due_date: string;
    proj_estimated_due_date: string;
    project_members: Array<ProjectMembers> = [];
}
