export class ProfilesModel {
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

export class Profile{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    additionalEmail: string;
    additionalPhone: string;
    type: string;
    streetAddress1: string;
    streetAddress2: string;
    suburb: string;
    state: string;
    postcode: string;
    deleted: string;
}
