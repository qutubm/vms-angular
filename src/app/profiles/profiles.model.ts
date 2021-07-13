export class ProfilesModel {
   success: boolean;
   Message : string;
   Errors : string[];
   Profiles: Profile[];
}

export class Profile {
    Id: string;
    FirstName: string;
    LastName: string;
    StreetAddress1: string;
    StreetAddress2: string;
    Suburb: string;
    State: string;
    Postcode: string;
    Email: string;
    Phone: string;
    AdditionalEmail: string;
    AdditionalPhone: string;
    Type: string;
    Deleted: string;
}

export class ProfileModel{
    Profile : Profile;
    Success : Boolean;
    Message: string;
    Errors: string[];
}


export class GetProfileInputModel{
    id : string;
    type: string;
}

