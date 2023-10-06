import { injectable } from "tsyringe";
import UserRepository from "./repository";

@injectable()
export default class UserService{
    constructor(
        private readonly userRepo: UserRepository
    ){}
    async createUser (payload) {
            try {
                const phone = await this.userRepo.findByPhone(payload.phoneNumber)

                if(phone) throw new Error("phone number already exists")

                const email = await this.userRepo.findByPhone(payload.email)

                if(email) throw new Error("email already exists")

                return await this.userRepo.saveuser(payload)
            } catch (error) {
                throw error
            }
        }
}