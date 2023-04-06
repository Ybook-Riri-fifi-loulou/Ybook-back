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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Service = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
class S3Service {
    //Pre-signing a putObject operation with a specific payload
    getSignedUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            const key = "rifilou";
            const params = { Bucket: 'ybook-dev', Key: key, Expires: 60, ContentType: "image/jpeg" };
            const s3 = new aws_sdk_1.default.S3({
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: "eu-west-3"
            });
            const url = yield s3.getSignedUrlPromise('putObject', params).then((url) => {
                return url;
            });
            return { url, key };
        });
    }
    //Pre-signing a getObject operation
    getSignedUrlGet(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = { Bucket: 'ybook-dev', Key: key, Expires: 60 };
            const s3 = new aws_sdk_1.default.S3({
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: "eu-west-3"
            });
            const url = yield s3.getSignedUrlPromise('getObject', params).then((url) => {
                return url;
            });
            return url;
        });
    }
}
exports.s3Service = new S3Service();
