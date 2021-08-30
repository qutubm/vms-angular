import { Component, Input, ModuleWithComponentFactories, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {NgbCalendar, NgbDate, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, ProjectModel, Task, TaskModel, TaskView } from '../project.model';
import { ProjectService } from '../project.service';
import {BehaviorSubject} from 'rxjs';
import { SelectListItem } from 'src/app/shared';
import { AppUserAuth } from 'src/app/shared/models/appUserAuth';
import { SecurityService } from 'src/app/shared/security.service';

@Component({
  selector: 'project-create-edit',
  templateUrl: './project-create-edit.component.html',
  styleUrls: ['./project-create-edit.component.css']
})
export class ProjectCreateEditComponent implements OnInit {

  isProfileValid: boolean;
  heading: string;

  // Form Values for Edit Mode
  existingProject: Project;
  resources : SelectListItem[];
  tasks : TaskView[] = [];

  projectId : string = this.activatedRoute.snapshot.params['id'];
  currentTaskId : string;
  
  projectForm : FormGroup = this.formBuilder.group({
    projectId: ['', [Validators.maxLength(50)]],
    projectName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    estimatedCompletionDate: [null, [Validators.required]],
    actualCompletionDate:[null, []],
    skillsRequired: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    createdDate: ['', [Validators.maxLength(50)]],
    completed: ['', [Validators.minLength(1), Validators.maxLength(1)]],
  });

  // taskId: FormControl = new FormControl('', []);
  // taskName: FormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]);
  // resource: FormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]);
  // estimatedTaskCompletionDate : FormControl = new FormControl(null, [Validators.required]);
  // actualTaskCompletionDate  : FormControl = new FormControl(null, []);
  // taskCreatedDate : FormControl = new FormControl('', []);
  // taskCompleted : FormControl = new FormControl('', []);
  // projectTaskForm : FormGroup = this.formBuilder.group({
  //   taskId: this.taskId, 
  //   taskName: this.taskName,
  //   resource: this.resource, 
  //   estimatedTaskCompletionDate : this.estimatedTaskCompletionDate,
  //   actualTaskCompletionDate : this.actualTaskCompletionDate,
  //   taskCreatedDate: this.taskCreatedDate,
  //   taskCompleted: this.taskCompleted
  // });
  projectTaskForm : FormGroup = this.formBuilder.group({
    taskId: ['', []],
    taskName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    resource: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    estimatedTaskCompletionDate : [null, [Validators.required]],
    actualTaskCompletionDate :  [null, []],
    taskCreatedDate: ['', []],
    taskCompleted: ['', []]
  });


  securityObject : AppUserAuth = null;
  
  @ViewChild('taskDialog') taskDialog: TemplateRef<any>;
  public modalPopup: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private formBuilder: FormBuilder, private projectServices: ProjectService, 
              private activatedRoute: ActivatedRoute, private router: Router, 
              private modalService : NgbModal, private securityService : SecurityService) {
      this.securityObject = securityService.securityObject;
  }


  ngOnInit(): void {
    this.projectForm.controls.projectId.setValue(this.projectId);

    this.projectServices.fetchResources().subscribe(data => {
      this.resources = data.Resources;
      // console.log(" Resources : " , data.Resources);

      if (this.projectId != null && this.projectId != undefined && this.projectId != '') {
        this.heading = "Edit a Project";
        this.projectServices.fetchProject(this.projectId).subscribe(
          (projectModel: ProjectModel) => {
            console.log("ProjectModel : ", projectModel.Project);

            this.projectForm.controls.projectName.setValue(projectModel.Project.Name);
            this.projectForm.controls.estimatedCompletionDate.setValue(new NgbDate(Number(projectModel.Project.EstimatedCompletionDate.substring(0,4)), 
                                                                                   Number(projectModel.Project.EstimatedCompletionDate.substring(4,6)), 
                                                                                   Number(projectModel.Project.EstimatedCompletionDate.substring(6,8))));
            
            if(projectModel.Project.ActualCompletionDate !== undefined && projectModel.Project.ActualCompletionDate !== null && projectModel.Project.ActualCompletionDate !== '')
            {
               this.projectForm.controls.actualCompletionDate.setValue(new NgbDate(Number(projectModel.Project.ActualCompletionDate.substring(0,4)), 
                                                                                Number(projectModel.Project.ActualCompletionDate.substring(4,6)), 
                                                                                Number(projectModel.Project.ActualCompletionDate.substring(6,8))));
            }

            this.projectForm.controls.skillsRequired.setValue(projectModel.Project.SkillsRequired);
            this.projectForm.controls.createdDate.setValue(projectModel.Project.CreatedDate);
            this.projectForm.controls.completed.setValue(projectModel.Project.Completed);
  
            // Fetch related tasks
            this.projectServices.getAllTasks(this.projectId).subscribe(data => {
                this.tasks = data.Tasks;
  
                this.tasks.map(item => { 
                  item.Resource = this.resources.find((x : SelectListItem)=> x.Value == item.ProfileId).Text; 
                  // console.log(item.Resource);
                });
            });
        });
      }
      else {
        this.heading = "Create a Project";
      }

    });

    

    this.modalPopup.subscribe(res => {
        // Open New Task Modal  
        if(res == 'openTask')
        {
            this.currentTaskId = '';
            this.openTaskDialog();
        }
        // Open Edit Task Modal  
        if(res == 'editTask')
        {
            this.openTaskDialog();
        }
        // Close Modal after entering values
        if(res == 'closeTask')
        {
            if(this.projectTaskForm.valid)
            {
                this.saveTask();
                // this.modalService.dismissAll();
            }
            else
            {
              if(this.projectTaskForm.controls.taskId.value == null || this.projectTaskForm.controls.taskId.value == undefined || this.projectTaskForm.controls.taskId.value == '')
              {
                this.toggleModalPopup('openTask');
              }
              else
              {
                this.toggleModalPopup('editTask');
              }


              this.findInvalidControls();
              // alert("Pease fill all the fields in the Task Form.");
            }
        }
        // Cancel Modal after entering values
        if(res == 'cancelTask')
        {
            this.modalService.dismissAll();
        }
    });

  }

  openTask()
  {
    this.toggleModalPopup('openTask');
  }

  openTaskDialog()
  {
      this.projectTaskForm.controls.taskId.setValue('');

      this.projectTaskForm.controls.taskName.setValue('');
      this.projectTaskForm.controls.taskName.markAsUntouched();
      this.projectTaskForm.controls.taskName.markAsPristine();

      this.projectTaskForm.controls.resource.setValue('');
      this.projectTaskForm.controls.resource.markAsUntouched();
      this.projectTaskForm.controls.resource.markAsPristine();

      this.projectTaskForm.controls.estimatedTaskCompletionDate.setValue(null);
      this.projectTaskForm.controls.estimatedTaskCompletionDate.markAsUntouched();
      this.projectTaskForm.controls.estimatedTaskCompletionDate.markAsPristine();

      this.projectTaskForm.controls.actualTaskCompletionDate.setValue(null);
      this.projectTaskForm.controls.actualTaskCompletionDate.markAsUntouched();
      this.projectTaskForm.controls.actualTaskCompletionDate.markAsPristine();

      this.projectTaskForm.controls.taskCreatedDate.setValue('');

      this.projectTaskForm.controls.taskCompleted.setValue('');
      this.projectTaskForm.controls.taskCompleted.markAsUntouched();
      this.projectTaskForm.controls.taskCompleted.markAsPristine();

      this.modalService.open(this.taskDialog, {ariaLabelledBy: 'Add Task', backdrop: 'static', keyboard: false});
  }

  editTaskDetails(taskId : string)
  {
    this.currentTaskId = taskId;


    this.projectServices.fetchTask(taskId).subscribe(data => {
      if(data.Success === true)
      {
          this.projectTaskForm.controls.taskId.setValue(data.Task.Id);
          this.projectTaskForm.controls.taskName.setValue(data.Task.Name);
          this.projectTaskForm.controls.resource.setValue(data.Task.ProfileId);

          this.projectTaskForm.controls.estimatedTaskCompletionDate.setValue(new NgbDate(Number(data.Task.EstimatedCompletionDate.substring(0,4)), 
          Number(data.Task.EstimatedCompletionDate.substring(4,6)), 
          Number(data.Task.EstimatedCompletionDate.substring(6,8))));

          if(data.Task.ActualCompletionDate !== undefined && data.Task.ActualCompletionDate !== null && data.Task.ActualCompletionDate != "")
          {
              this.projectTaskForm.controls.actualTaskCompletionDate.setValue(new NgbDate(Number(data.Task.ActualCompletionDate.substring(0,4)), 
                    Number(data.Task.ActualCompletionDate.substring(4,6)), 
                    Number(data.Task.ActualCompletionDate.substring(6,8))));
          }

          this.projectTaskForm.controls.taskCreatedDate.setValue(data.Task.CreatedDate);
          this.projectTaskForm.controls.taskCompleted.setValue(data.Task.Completed);

          // this.toggleModalPopup('editTask');
          this.modalService.open(this.taskDialog, {ariaLabelledBy: 'Add Task', backdrop: 'static', keyboard: false});
      }
    });
  }

  saveTask()
  {
    if(this.projectTaskForm.valid)
    {
 
    var task = new Task();
    task.Id = this.projectTaskForm.controls.taskId.value; 
    task.Name = this.projectTaskForm.controls.taskName.value;
    task.ProfileId = this.projectTaskForm.controls.resource.value;
    task.ProjectId = this.projectId;

    if(this.projectTaskForm.controls.actualTaskCompletionDate.value !== null && this.projectTaskForm.controls.actualTaskCompletionDate.value !== undefined && this.projectTaskForm.controls.actualTaskCompletionDate.value !== '')
    {
        let actualTaskCompletion = this.projectTaskForm.controls.actualTaskCompletionDate.value as NgbDate;
        task.ActualCompletionDate = actualTaskCompletion.year.toString()
                                        + (actualTaskCompletion.month < 10 ? '0' : '') + actualTaskCompletion.month.toString()
                                        + (actualTaskCompletion.day < 10 ? '0' : '') + actualTaskCompletion.day.toString();
    }

    let estimatedTaskCompletion = this.projectTaskForm.controls.estimatedTaskCompletionDate.value as NgbDate;
    task.EstimatedCompletionDate = estimatedTaskCompletion.year.toString()
                                      + (estimatedTaskCompletion.month < 10 ? '0' : '') + estimatedTaskCompletion.month.toString()
                                      + (estimatedTaskCompletion.day < 10 ? '0' : '') + estimatedTaskCompletion.day.toString();

    // task.EstimatedCompletionDate = this.estimatedTaskCompletionDate.value;
    // task.ActualCompletionDate = this.actualTaskCompletionDate.value;

    if( task.Id == null ||  task.Id == undefined ||  task.Id == '')
    {
      let taskCreatedDt =  new Date();
      // console.log(taskCreatedDt);
      // console.log(taskCreatedDt.getFullYear());
      // console.log(taskCreatedDt.getMonth());
      // console.log(taskCreatedDt.getDate());
      task.CreatedDate =  taskCreatedDt.getFullYear()
                             + (taskCreatedDt.getMonth() < 10? '0' : '' ) + taskCreatedDt.getMonth()
                             + (taskCreatedDt.getDate() < 10? '0' : '' ) + taskCreatedDt.getDate();
    }
    else
    {
      task.CreatedDate =  this.projectTaskForm.controls.taskCreatedDate.value;
                        //  this.taskCreatedDate.value.getFullYear()
                        //     + (this.taskCreatedDate.value.getMonth() < 10? '0' : '' ) + this.taskCreatedDate.value.getMonth()
                        //     + (this.taskCreatedDate.value.getDate() < 10? '0' : '' ) + this.taskCreatedDate.value.getDate();
    }

    if(this.projectTaskForm.controls.taskCompleted.value === 'true' )
    {
        task.Completed = 'Y';
    }
    else
    {
        task.Completed = 'N';
    }

    task.Rating = 1;
    if( task.Id == null ||  task.Id == undefined ||  task.Id == '')
    {
      this.addTask(task);
    }
    else
    {
      this.editTask(task);
    }
  }
}

  addTask(task : Task){
    this.projectServices.addTask(task).subscribe(data => { 
        this.projectServices.getAllTasks(this.projectId).subscribe(data => {
          this.tasks = data.Tasks;
          this.tasks.map(item => { 
            item.Resource = this.resources.find((x : SelectListItem)=> x.Value == item.ProfileId).Text; 
            // console.log(item.Resource);
          });
          this.modalService.dismissAll();
        });
    });
  }

  editTask(task : Task){
    this.projectServices.editTask(task).subscribe(data => { 
      this.projectServices.getAllTasks(this.projectId).subscribe(data => {
        this.tasks = data.Tasks;
        this.tasks.map(item => { 
          item.Resource = this.resources.find((x : SelectListItem)=> x.Value == item.ProfileId).Text; 
          // console.log(item.Resource);
        });
        this.modalService.dismissAll();
      });
    });
  }

  toggleModalPopup(value: string)
  {
    if(this.modalPopup.value != value)
    {
      this.modalPopup.next(value);
    }
  }

  closeModal()
  {
    this.modalService.dismissAll();
  }

  saveProject() {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value);

      let project = new Project();
      project.Id = this.projectId;
      project.Name = this.projectForm.controls.projectName.value;
      project.SkillsRequired = this.projectForm.controls.skillsRequired.value;

      // 
      let actualCompletion = this.projectForm.controls.actualCompletionDate.value as NgbDate;
      if(actualCompletion !== undefined && actualCompletion !== null)
      {
          project.ActualCompletionDate = actualCompletion.year.toString()
                                          + (actualCompletion.month < 10 ? '0' : '') + actualCompletion.month.toString()
                                          + (actualCompletion.day < 10 ? '0' : '') + actualCompletion.day.toString();
      }

      let estimatedCompletion = this.projectForm.controls.estimatedCompletionDate.value as NgbDate;
      project.EstimatedCompletionDate = estimatedCompletion.year.toString()
                                        + (estimatedCompletion.month < 10 ? '0' : '') + estimatedCompletion.month.toString()
                                        + (estimatedCompletion.day < 10 ? '0' : '') + estimatedCompletion.day.toString();
      
      
      //this.projectForm.controls.createdDate.value;

      if(this.projectId == null || this.projectId == undefined || this.projectId == '')
      {
        let createdDt =  new Date();
        project.CreatedDate =  createdDt.getFullYear()
                               + (createdDt.getMonth() < 10? '0' : '' ) + createdDt.getMonth()
                               + (createdDt.getDate() < 10? '0' : '' ) + createdDt.getDate();
        this.createProject(project);
      }
      else
      {
        // project.CreatedDate = this.projectForm.controls.createdDate.value;
        this.editProject(project);
      }
      
      // console.log(this.projectForm.value);
    } else {
      this.findInvalidControls();
      console.log("Invalid Form!");
    }
  }

  createProject(project: Project) {
      this.projectServices.createProject(project).subscribe(data => {
        this.projectId = data.ProjectId;
        alert("Project created.");
        // this.router.navigate(['/project'], { relativeTo: this.activatedRoute });
      });
  }

  editProject(project: Project) {
    this.projectServices.editProject(project).subscribe(data => {
      alert("Project details saved.");
      // this.router.navigate(['/project'], { relativeTo: this.activatedRoute });
    });
  }


  onCancel() {
    this.router.navigate(['/project']);
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.projectTaskForm.controls; // projectForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
        console.log("Invalid Control : ", name);
      }
    }
    return invalid;
  }

  addVolunteerToList(userInput): void {
    if (this.projectForm.valid) {
      
    } else {
      console.warn("Invalid Create");
    }
  }



}
