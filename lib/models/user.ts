export type User_t = {
    id: string;
    username: string;
    email: string;
    name: string;
    created: number;
    updated: number;
}

export type newUser_t = {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
}