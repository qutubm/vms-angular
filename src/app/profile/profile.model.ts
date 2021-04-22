
export class Profile
{
    Id: number;
    FirstName: string;
    LastName: string;
    Email:string;
    Phone:string;
    AdditionalEmail: string;
    AdditionalPhone: string;
    Type : string;
    StreetAddress1: string;
    StreetAddress2: string;
    Suburb : string;
    State : string;
    Postcode: string;
}

export class ProfileModel
{
    Success : boolean;
    ErrorMessage : string;
    Profiles : Profile[];
}