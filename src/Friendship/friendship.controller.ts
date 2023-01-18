import {NextFunction, Request, Response} from "express";
import {friendshipService} from "./friendship.service";



class FriendshipController {

    async getFriendships(req: Request, res: Response, next: NextFunction) {
        res.json(await friendshipService.getPendingFriendships(res.locals.email))
    }

    async acceptFriendship(req: Request, res: Response, next: NextFunction) {
        res.json(await friendshipService.acceptFriendship(Number(req.params.id)))
    }

    async declineFriendship(req: Request, res: Response, next: NextFunction) {
        res.json(await friendshipService.declineFriendship(Number(req.params.id)))
    }



}

export const friendshipController = new FriendshipController();
