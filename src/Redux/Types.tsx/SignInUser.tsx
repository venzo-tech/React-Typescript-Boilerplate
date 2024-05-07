export interface signinTypes {
    token: string;
    email: string;
    uid: string;
    isTokenExpired: boolean;
    isLoading: false,
}

export interface signinState {
    signinValue: signinTypes
}