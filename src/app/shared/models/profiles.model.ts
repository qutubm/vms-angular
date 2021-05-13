export class ProfilesModel {
    profile_id: number;
    role: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    suburb: string;
    state: string;
    phone: string;
    additional_email: string;
    additional_phone: string;
}


export class ProfilesRestricted {
    profile_id: number;
    role: string; 
    email: string;
    password: string;
    first_name: string;
    last_name: string;
}

