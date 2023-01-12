import {NextFunction, Request, Response} from "express";
import { CognitoJwtVerifier } from "aws-jwt-verify";


export const idTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token;
    const verifier = CognitoJwtVerifier.create({
        region: "ew-west-3",
        userPoolId: "id",
        clientId: "7llslfb09dtag2h7117og3ku72",
    });

    try {
        const payload = await verifier.verify(token, { tokenUse: "id" });
        console.log(payload);
        if (payload) {
            next()
        } else {
            next({status: 401, message: "Unauthorized"});
        }
    } catch (err) {
        console.log(err);
    }
}