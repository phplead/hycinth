import { Role } from "./role";

export class User {
    _id: string;
    email: string;
    hash: string;
    firstName: string;
    lastName: string;
    role: String;
    createdDate: Date;
    token?: string;
    status: string;
}