import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProfilesModel } from 'src/app/shared/models/profiles.model';
import { ProfilesService } from '../../shared/service/profiles.service';

@Component({
  selector: 'app-profiles-detail',
  templateUrl: './profiles-detail.component.html',
  styleUrls: ['./profiles-detail.component.css']
})
export class ProfilesDetailComponent implements OnInit {
  
  @Input() src;

  
  constructor(private profileServices: ProfilesService, private profile_activatedRoute: ActivatedRoute, public modalService: NgbActiveModal) { }
  
  _profilesModel: ProfilesModel;
  profiles_id = this.profile_activatedRoute.snapshot.params['id'];
  
  ngOnInit(): void {
    // this.profileServices.getProfilesByID(this.profiles_id).subscribe(
    //   (project_data: ProfilesModel) =>
    //     this._profilesModel = project_data,
    //   (err: any) => console.log(err),
    //   () => console.log("Project is acquired!")
    // );
    //this.open;
    
  }

}
