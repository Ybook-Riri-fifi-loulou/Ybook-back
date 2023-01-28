import {Router} from "express";
import {friendshipController} from "./friendship.controller";


export const friendshipRouter = Router();

friendshipRouter.get('/:id/pendingfriendship', friendshipController.getFriendships);
friendshipRouter.get('/:id/friends', friendshipController.getFriends);
friendshipRouter.put('/:id', friendshipController.acceptFriendship);
friendshipRouter.put('/:id/refused', friendshipController.declineFriendship);
friendshipRouter.delete('/:id', friendshipController.deleteFriendship);


