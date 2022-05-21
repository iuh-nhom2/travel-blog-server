
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class UserDTO {
    id: string;
    userName: string;
    categoryUser: number;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
    registerBy: string;
}

export class AuthDTO {
    id: string;
    userId: string;
    userName: string;
    token: string;
    typeDevice: string;
    deviceId?: Nullable<string>;
    banDit?: Nullable<boolean>;
    createdAt?: Nullable<Timestamp>;
    updatedAt?: Nullable<Timestamp>;
}

export abstract class IQuery {
    abstract users(): UserDTO[] | Promise<UserDTO[]>;
}

export abstract class IMutation {
    abstract createUser(userName: string, password: string, categoryUser: number, registerBy: string): UserDTO | Promise<UserDTO>;

    abstract userLogin(userName: string, password: string, typeDevice: string, deviceId: string): AuthDTO | Promise<AuthDTO>;
}

export type Timestamp = any;
type Nullable<T> = T | null;
