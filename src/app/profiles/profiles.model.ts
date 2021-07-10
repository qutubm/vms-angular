export class ProfilesExtra {
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
   Profiles: Profile[];
}

export class Profile {
    Id: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
    AdditionalEmail: string;
    AdditionalPhone: string;
    Type: string;
    StreetAddress1: string;
    StreetAddress2: string;
    Suburb: string;
    State: string;
    Postcode: string;
    Deleted: string;
}
