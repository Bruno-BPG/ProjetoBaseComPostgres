import { users } from "../database/index";
import { IUserCreate, IUser } from "../interfaces/index";
import { v4 as uuidv4 } from "uuid"
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";


export const userCreateService = async ({name, email}: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User) 

    const users = await userRepository.find()

    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists) {
        throw new Error("Email already exists")
    }

    const user = new User()
    user.name = name
    user.email = email

    userRepository.create(user)
    await userRepository.save(user)

    return user

}

export const userListService = async () => {

    const userRepository = AppDataSource.getRepository(User)

    const users = userRepository.find()

    return users
}

        