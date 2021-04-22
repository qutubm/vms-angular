SELECT VERSION();
DROP DATABASE IF EXISTS volunteer_management_system;
create DATABASE IF NOT EXISTS volunteer_management_system;

USE volunteer_management_system;

/* The naming of table and database should be smallcase with underscore. This is because linux would treat the name of database as different databases as  */

/* The stakeholder_profile is used when creating and viewing profile for use as authentication and authorization. */
create TABLE IF NOT EXISTS stakeholder_profile (
    `profile_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY, /* A unique id to identify who is who in the database*/ 
    `role` char(1) NOT Null, /* Identifies what role does the person play, volunteer, staff, or teamleader */
    `email` varchar(50) NOT NULL UNIQUE, /* Email address used for log-in and contact purposes */
    `password` varchar(50) NOT NULL, 
    /* Note: Not a full name, it should be in the user's descretion to hand over fullname of the person*/
    `first_name` varchar(20) NOT NULL, /* Self-explanatory */
    `last_name` varchar(20) NOT NULL,  /* Self-explanatory */
    /* Note: Not a full address, it should be in the user's descretion to hand over address information to the person */
    `suburb` varchar(50) NOT NULL,  /* Self-explanatory */
    `state` char(3) NOT NULL, /* Self-explanatory */
    `phone` varchar(10), /* Is not required, it's in user's descretion to hand over phone number to another person, but otherwise we store the phone number here. */
    `additional_email` varchar(50) NULL, /* Used tore */
    `additional_phone` varchar(10) NULL /* Self-explanatory */
);

/* The prof_availability table is used to identify the day (i.e. Monday, Tuesday, etc.), as well as the time that they are available. */
/* Note: Because they can be available multiple times of the day and time. The prof_availability became an entity on it's own that references the volunteer profile*/
create TABLE IF NOT EXISTS prof_availability (
    `volunteer_id` int, /* Used to get the profile identification in the stakeholder profile table */
    `day_available` tinyInt(7), /* Used to identify it's monday, tuesday, wednesday, etc.. */
    `time_available` datetime, /* Used to if the person is available on 7:00pm or the whole day. */
    CONSTRAINT fk_prof_availability_stakeholder_profile FOREIGN KEY (volunteer_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE
);

/* The prof_attribute is used to identify what strenghts and weaknesses does the volunteer have, it's not required */
create TABLE IF NOT EXISTS prof_attribute (
    `volunteer_id` int, /* The identification of the volunteer in this table */
    `attribute_public` bool, /* Identifies if the volunteer would like to make his atrribute public */
    `strenght` varchar(100), /* The written statement of the volunteer regarding their strength. */
    `weakness` varchar(100), /* The writeen statement of the volunteer regarding their weakness. */
    CONSTRAINT fk_prof_attribute_profile FOREIGN KEY (volunteer_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE
);

/* The prof_certificate is used to identify the certificates that volunteers have been awarded by the staff */
create TABLE If NOT EXISTS prof_certificate (
    `volunteer_id` int NOT NULL,
    `date_certificate_achieved` date NOT NULL,
     CONSTRAINT fk_certificate_profile FOREIGN KEY (volunteer_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE
);

/* The prof_task_achieved is used when the staff has reviewed the  prof_task_achieved. Bring this table up when the staff has accepted.  */
create TABLE IF NOT EXISTS prof_task_achieved (
    `volunteer_id` int NOT NULL,
    `title_of_task_achieved` varchar(50) NOT NULL, 
    `rating_of_task` tinyint(5) NOT NULL,
    `date_task_achieved` date NOT NULL,
    `date_completion_time` datetime NOT NULL,
     CONSTRAINT fk_prof_task_achieved_profile FOREIGN KEY (volunteer_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE
);

/* The project table is used to associate task, subtask, and members of the project. It's an essential part of the application as this enforces access control. */
create TABLE IF NOT EXISTS project (
	`proj_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY, /* The second parent table that associates the task*/
    `proj_name` varchar(50) NOT NULL, /* The name of the project*/
	`staff_id` int, /* Identifies the staff whom is assigned to handle the matters and members of the project. This data can also be used to display contact information. */ 
  	`volunteer_id` int, /* Identifies the team leader of the project.  */
    `proj_skills_required` varchar(100), /* Identifies the project skills required to execute the project successfully. */
    `proj_real_due_date` datetime, /* The calculated due date of the project. So long as the staff enters the due date of the task, we can calculate the time the project would be completed. Automatic recalculation can happen as well  */
    `proj_estimated_due_date` datetime, /* The estimated due date of the project assigned by staff. */
    CONSTRAINT fk_project_profile_staff FOREIGN KEY (staff_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE,
    CONSTRAINT fk_project_profile_volunteer FOREIGN KEY (volunteer_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE
);

/* The proj_member table identifies who is associated to what project. */
create TABLE IF NOT EXISTS proj_member (
	`proj_id` int NOT NULL, /* Associates the project member table to the project table */
    `assigned_volunteer_id` int NOT NULL, /* Associates the volunteer member table to the profile table */
    CONSTRAINT fk_member_project FOREIGN KEY (proj_id) REFERENCES project (proj_id) ON DELETE CASCADE,
    CONSTRAINT fk_member_stakeholder_profile FOREIGN KEY (assigned_volunteer_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE
);

/* The project_faq is used to produce common question and answer of the volunteer */
create TABLE IF NOT EXISTS proj_faq (
    `proj_id` int NOT NULL, 
    `faq_question` varchar(100),
    `faq_answer` varchar(500),
     CONSTRAINT fk_faq_project FOREIGN KEY (proj_id) REFERENCES project (proj_id) ON DELETE CASCADE
);

/* The task table is used to create a to-do list of the project */
create TABLE IF NOT EXISTS task (
    `proj_id` int, /* Associates the task table to the project table */
    `task_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY, /* Associates the staff member table to the profile table */
    `task_status` varchar(20),
    `task_for_nomination` boolean,
    `task_name` varchar(50),
    `task_due_date` datetime,
    CONSTRAINT fk_task_project FOREIGN KEY (proj_id) REFERENCES project (proj_id) ON DELETE CASCADE
);


/* The task member table is used when the staff/team leader has assigned the volunteer to the task, or when the volunteer has nominated his/herself to the task. */
create TABLE IF NOT EXISTS task_associate (
    `task_id` int NOT NULL,
    `profile_id` int NOT NULL,
    `task_member_needs_help` boolean,
    `task_is_completed` boolean,
     CONSTRAINT fk_task_associate_task FOREIGN KEY (task_id) REFERENCES task (task_id) ON DELETE CASCADE,
     CONSTRAINT fk_task_associate_stakeholder_profile FOREIGN KEY (profile_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE
    );
    
/* The subtask table functions the same way as task except, sub-task cannot exist when a task is not available. Sub-task is the child of the task table. */
create TABLE IF NOT EXISTS subtask (
    `subtask_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`task_id` int,
    `subtask_status` varchar(20),
    `subtask_for_nomination` bool,
    `subtask_name` varchar(50),
    `subtask_automated_due_date` datetime,
    CONSTRAINT fk_subtask_task FOREIGN KEY (task_id) REFERENCES task (task_id) ON DELETE CASCADE
);


create TABLE IF NOT EXISTS subtask_member (
	`sub_task_id` int,
    `profile_id` int,
    `subtask_member_needs_help` boolean,
    `subtask_is_completed` boolean,
	CONSTRAINT fk_subtask_associate_subtask FOREIGN KEY (sub_task_id) REFERENCES subtask (subtask_id) ON DELETE CASCADE,
    CONSTRAINT fk_subtask_associate_stakeholder_profile FOREIGN KEY (profile_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE
);

/* Task comment is the comment on the task that volunteers are gonna have discussions with. */
create TABLE IF NOT EXISTS  task_comment (
	`task_id` int NOT NULL,
    `profile_id` int NOT NULL,
    `task_comment` varchar(500),
    CONSTRAINT fk_task_comment_task FOREIGN KEY (task_id) REFERENCES task (task_id) ON DELETE CASCADE,
    CONSTRAINT fk_task_comment_stakeholder_profile FOREIGN KEY (profile_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE
);

/* Task report table is used when the volunteer has a report to provide */
create TABLE IF NOT EXISTS report (
    `proj_id` int NOT NULL,
    `profile_id` int NOT NULL,
    `report_due_date` datetime NOT NULL,
	`time_of_report` datetime NULL,
    `report_description` varchar(1000) NOT NULL,
    CONSTRAINT fk_report_project FOREIGN KEY (proj_id) REFERENCES project (proj_id) ON DELETE CASCADE
);

/* The meeting table is used when the user is in need of meeting */
create TABLE IF NOT EXISTS meeting (
	`proj_id` int NOT NULL, /* Identifies the project that the meeting is held in. */
	`profile_id` int, /*Addresses who is the one who initiated the meeting*/
    `meeting_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY, /* Meeting */
    `meeting_title` varchar(50),
    `meeting_description` varchar(500),
    `person_attending` bool,
    `meeting_date` datetime,
    CONSTRAINT fk_meeting_project FOREIGN KEY (proj_id) REFERENCES project (proj_id) ON DELETE CASCADE,
	CONSTRAINT fk_meeting_stakeholder_profile FOREIGN KEY (profile_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE
);

/* 
    Volunteers should only be able to set-up meeting with fellow project members. 
    Whilst staff can set-up meeting with anyone.
*/
create TABLE IF NOT EXISTS meeting_details (
	`profile_id` int, /* Identifies the member that the volunteer nominated for meeting.*/
    `meeting_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY, /* Meeting */
    CONSTRAINT fk_meeting_project FOREIGN KEY (proj_id) REFERENCES project (proj_id) ON DELETE CASCADE,
	CONSTRAINT fk_meeting_stakeholder_profile FOREIGN KEY (profile_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE
);

/* The notification table is used when an activity in question is in need of attention. */
create TABLE IF NOT EXISTS notification (
	`proj_id` int,
	`profile_id` int,
	`ntf_read` int,
	`ntf_trash` bool,
	`ntf_created_at` datetime,
    `ntf_type` varchar(50),
	`ntf_content` varchar(500),
    CONSTRAINT fk_notification_project FOREIGN KEY (proj_id) REFERENCES project (proj_id) ON DELETE CASCADE,
	CONSTRAINT fk_notification_stakeholder_profile FOREIGN KEY (profile_id) REFERENCES stakeholder_profile (profile_id) ON DELETE CASCADE
);
