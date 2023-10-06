import { Model } from "objection";



export default class UserModel extends Model{
    static tableName = "users"

    id!: string;
    name!: string;
    email!: string;
    phoneNumber!: string;
    password!: string;
    DOB!: Date;
    imageurl!: string;
    created_at!: Date;
    updated_at!: Date;
}