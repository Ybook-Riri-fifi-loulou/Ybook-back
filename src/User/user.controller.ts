import {NextFunction, Response, Request} from "express";
import {userService} from "./user.service";

class UserController {

    async getAllUsers (req: Request, res: Response, next: NextFunction) {
        res.json(await userService.getAllUsers())
    }

    async getUserPosts (req: Request, res: Response, next: NextFunction) {
        res.json(await userService.getUserPosts(req.params.id))
    }
}


export const userController = new UserController();