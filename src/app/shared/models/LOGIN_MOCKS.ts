import { AppUserAuth } from "./appUserAuth";

export const LOGIN_MOCKS : AppUserAuth[] = [
    {
        userName:  "qutubm@gmail.com",
        bearerToken:  "abc123",
        isAuthenticated:  true,
    
        canAccessProfiles: 'Y', //true,
        canAddProfile: 'Y', //true,
        canEditProfile: 'Y', // true,
    
        canAccessProjects: 'Y', // true,
        canAddProject: 'Y', //  true,
        canEditProject: 'Y' // true
    }
]