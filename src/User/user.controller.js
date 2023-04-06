"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
class UserController {
    getAllUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield user_service_1.userService.getAllUsers());
        });
    }
    getUserById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield user_service_1.userService.getUserById(Number(req.params.id)));
        });
    }
    createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield user_service_1.userService.createUser(res.locals.firstname, res.locals.lastname, res.locals.email));
        });
    }
    getUserByEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield user_service_1.userService.getUserByEmail(req.params.email));
        });
    }
    UpdateProfilePicture(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            res.json(yield user_service_1.userService.UpdateProfilePicture(req.params.id, req.body));
        });
    }
    UpdateProfil(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            res.json(yield user_service_1.userService.updateProfil(Number(req.params.id), req.body.firstname, req.body.lastname));
        });
    }
}
exports.userController = new UserController();
