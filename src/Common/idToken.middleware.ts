import {NextFunction, Request, Response} from "express";
import { CognitoJwtVerifier } from "aws-jwt-verify";
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient()


export const idTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token;
    const verifier = CognitoJwtVerifier.create({
        tokenUse: "id",
        userPoolId: "eu-west-3_Iekd8jDeb",
        clientId: "7llslfb09dtag2h7117og3ku72",
    });

    try {
        const payload = await verifier.verify(token, {tokenUse: "id"});

        res.locals.firstname = payload['given_name'];
        res.locals.email = payload['email'];
        res.locals.lastname = payload['name'];
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email: res.locals.email
            }
        })
        if (payload && !userAlreadyExists) {
            next();
        } else {
            console.log("User already exists");
            next({status: 401, message: "Unauthorized"});
        }
    } catch (err) {
        next({status: 401, message: "Token Expired"});
    }
}