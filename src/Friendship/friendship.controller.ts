import {NextFunction, Request, Response} from "express";
import {friendshipService} from "./friendship.service";



class FriendshipController {

    async getFriendships(req: Request, res: Response, next: NextFunction) {
        res.json(await friendshipService.getPendingFriendships(Number(req.params.id)))
    }

    async getFriends(req: Request, res: Response, next: NextFunction) {
        res.json(await friendshipService.getFriends(Number(req.params.id)))
    }

    async acceptFriendship(req: Request, res: Response, next: NextFunction) {
        res.json(await friendshipService.acceptFriendship(Number(req.params.id)))
    }

    async declineFriendship(req: Request, res: Response, next: NextFunction) {
        res.json(await friendshipService.declineFriendship(Number(req.params.id)))
    }

    async deleteFriendship(req: Request, res: Response, next: NextFunction) {
        res.json(await friendshipService.deleteFriendship(Number(req.params.id)))
    }

}

export const friendshipController = new FriendshipController();
