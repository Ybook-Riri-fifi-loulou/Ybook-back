import {NextFunction, Response, Request} from "express";
import {userService} from "./user.service";

class UserController {

    async getAllUsers (req: Request, res: Response, next: NextFunction) {
        res.json(await userService.getAllUsers())
    }

    async getUserById (req: Request, res: Response, next: NextFunction) {
        res.json(await userService.getUserById(Number(req.params.id)))
    }

    async getUserPosts (req: Request, res: Response, next: NextFunction) {
        res.json(await userService.getUserPosts(req.params.id))
    }

    async createUser (req: Request, res: Response, next: NextFunction) {
        res.json(await userService.createUser(req.body))
    }
}


export const userController = new UserController();