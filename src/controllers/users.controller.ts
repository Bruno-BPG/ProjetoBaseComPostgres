import { Request, Response } from 'express'

// importando o Service
import {userCreateService,userListService} from '../services/users.service'

export const userCreateController = async (req: Request, res: Response) => {
    try {
        const {name, email} = req.body
        const newUser = await userCreateService({name, email})
        return res.status(201).send(newUser)

    } catch (err) {

        if (err instanceof Error) {

            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

export const userListController = async (req: Request, res: Response) => {

    try {
        const users = await userListService()
        return res.send(users)

    } catch (err) {

        if (err instanceof Error) {

            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

        