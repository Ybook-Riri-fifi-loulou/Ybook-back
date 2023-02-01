import {Router} from "express";
import {friendshipController} from "./friendship.controller";


export const friendshipRouter = Router();

friendshipRouter.get('/:id/pendingfriendshipTo', friendshipController.getFriendshipsTo);
friendshipRouter.get('/:id/pendingfriendshipFrom', friendshipController.getFriendshipsFrom)
friendshipRouter.get('/:id/friends', friendshipController.getFriends);
friendshipRouter.post('/:userFromEmail/:userToEmail', friendshipController.addFrienship);
friendshipRouter.put('/:id', friendshipController.acceptFriendship);
friendshipRouter.put('/:id/refused', friendshipController.declineFriendship);
friendshipRouter.delete('/:id', friendshipController.deleteFriendship);


