import { Router } from "express";

const routes = Router()

import {userCreateController,userListController} from "./controllers/users.controller";

routes.post('/users', userCreateController)
routes.get('/users', userListController)

export default routes