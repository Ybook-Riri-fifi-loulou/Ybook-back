import {Router} from "express";
import {friendshipController} from "./friendship.controller";


export const friendshipRouter = Router();

friendshipRouter.get('/', friendshipController.getFriendships);
friendshipRouter.get('/:id/friends', friendshipController.getFriends);
friendshipRouter.put('/:id', friendshipController.acceptFriendship);
friendshipRouter.put('/:id', friendshipController.declineFriendship);
friendshipRouter.delete('/:id', friendshipController.deleteFriendship);


