import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfileModel } from './profile.model';


@Injectable({
    providedIn: 'root'
})

export class ProfileService{

    constructor(){}

    getProfiles(): Observable<ProfileModel>
    {
        let profiles = [
            {
                Id: 1,
                FirstName: "Lance",
                LastName: "Bongon",
                Email: "lance.bongon@gmail.com",
                Phone: "",
                AdditionalEmail: "",
                AdditionalPhone: "",
                Type : "Volunteer",
                StreetAddress1: "1 Nowhere Street",
                StreetAddress2: "",
                Suburb : "Awesome",
                State : "ACT",
                Postcode: "1000"
            },
            {
                Id: 2,
                FirstName: "BichYu",
                LastName: "Ngu",
                Email: "BichYu.Ngu@hotmail.com",
                Phone: "",
                AdditionalEmail: "",
                AdditionalPhone: "",
                Type : "Volunteer",
                StreetAddress1: "1 Nowhere Street",
                StreetAddress2: "",
                Suburb : "Awesome",
                State : "ACT",
                Postcode: "1000"
            },
            {
                Id: 3,
                FirstName: "Scott",
                LastName: "Walters",
                Email: "scott.walters@gmail.com",
                Phone: "",
                AdditionalEmail: "",
                AdditionalPhone: "",
                Type : "Staff",
                StreetAddress1: "1 Nowhere Street",
                StreetAddress2: "",
                Suburb : "Awesome",
                State : "ACT",
                Postcode: "1000"
            },
            {
                Id: 4,
                FirstName: "Greg",
                LastName: "Sher",
                Email: "greg.sher@gmail.com",
                Phone: "",
                AdditionalEmail: "",
                AdditionalPhone: "",
                Type : "Staff",
                StreetAddress1: "1 Nowhere Street",
                StreetAddress2: "",
                Suburb : "Awesome",
                State : "ACT",
                Postcode: "1000"
            },
            {
                Id: 5,
                FirstName: "Qutbuddin",
                LastName: "Musekhan",
                Email: "qutubm@gmail.com",
                Phone: "",
                AdditionalEmail: "",
                AdditionalPhone: "",
                Type : "Volunteer",
                StreetAddress1: "1 Nowhere Street",
                StreetAddress2: "",
                Suburb : "Awesome",
                State : "ACT",
                Postcode: "1000"
            },
            {
                Id: 6,
                FirstName: "Craig",
                LastName: "Miller",
                Email: "craig.miller@gmail.com",
                Phone: "",
                AdditionalEmail: "",
                AdditionalPhone: "",
                Type : "Volunteer",
                StreetAddress1: "1 Nowhere Street",
                StreetAddress2: "",
                Suburb : "Awesome",
                State : "ACT",
                Postcode: "1000"
            },
        ];

        let profileModel : ProfileModel = new ProfileModel();
        profileModel.Success = true;
        profileModel.Profiles = profiles;

        return of(profileModel);
    }

}


