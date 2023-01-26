import {Router} from "express";
import {friendshipController} from "./friendship.controller";


export const friendshipRouter = Router();

friendshipRouter.get('/', friendshipController.getFriendships);
friendshipRouter.put('/:id', friendshipController.acceptFriendship);
friendshipRouter.put('/:id', friendshipController.declineFriendship);


