export class AppUserAuth
{

    userName: string = "";
    bearerToken: string = "";
    isAuthenticated: boolean = false;

    canAccessProfiles: string = 'N';
    canAddProfile: string = 'N';
    canEditProfile: string = 'N';

    canAccessProjects: string = 'N';
    canAddProject: string = 'N';
    canEditProject: string = 'N';
}