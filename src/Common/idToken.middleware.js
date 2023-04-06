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
exports.CheckTokenIsValid = exports.idTokenMiddleware = void 0;
const aws_jwt_verify_1 = require("aws-jwt-verify");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const idTokenMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.body.token;
    const verifier = aws_jwt_verify_1.CognitoJwtVerifier.create({
        tokenUse: "id",
        userPoolId: "eu-west-3_Iekd8jDeb",
        clientId: "7llslfb09dtag2h7117og3ku72",
    });
    try {
        const payload = yield verifier.verify(token, { tokenUse: "id" });
        res.locals.firstname = payload['given_name'];
        res.locals.email = payload['email'];
        res.locals.lastname = payload['name'];
        const userAlreadyExists = yield prisma.user.findFirst({
            where: {
                email: res.locals.email
            }
        });
        if (payload && !userAlreadyExists) {
            next();
        }
        else {
            console.log("User already exists");
            next({ status: 401, message: "Unauthorized" });
        }
    }
    catch (err) {
        next({ status: 401, message: "Token Expired" });
    }
});
exports.idTokenMiddleware = idTokenMiddleware;
const CheckTokenIsValid = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    const verifier = aws_jwt_verify_1.CognitoJwtVerifier.create({
        tokenUse: "id",
        userPoolId: "eu-west-3_Iekd8jDeb",
        clientId: "7llslfb09dtag2h7117og3ku72",
    });
    try {
        const payload = yield verifier.verify(token, { tokenUse: "id" });
        res.locals.email = payload['email'];
        if (payload) {
            next();
        }
        else {
            next({ status: 401, message: "Unauthorized" });
        }
    }
    catch (err) {
        next({ status: 401, message: "Token Expired" });
    }
});
exports.CheckTokenIsValid = CheckTokenIsValid;
