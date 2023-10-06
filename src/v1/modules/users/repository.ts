//C   R   U   D

import UserModel from "@v1/database/models/user.models";


export default class UserRepository{
    constructor(){}

    async saveuser (payload: UserModel){
        return await UserModel.query().insert(payload);
    };

    async findOne (id: string){
        return await UserModel.query().where("id", id).first();
    };

    async updateUser (id: string, payload: Partial<UserModel>) {
        return await UserModel.query().where({id}).update(payload);
    }

    async delete (id: string) {
        return await UserModel.query().deleteById(id);
    }

    async findByEnail (email: string) {
        return await UserModel.query().where({email}).first();
    };

    async findByPhone (phoneNumber: string) {
        return await UserModel.query().where({phoneNumber}).first();
    };
}