import AWS from "aws-sdk";

class S3Service {
     async getSignedUrl() {
        const key = "image/rifilou"
        const params = {Bucket: 'ybook-dev', Key: key, Expires: 60 , ContentType: "image/jpeg"}

        const s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: "eu-west-3"
        });
        const url = await s3.getSignedUrlPromise('putObject', params).then((url) => {
            return url
        });
        return {url, key}
    }
}

export const s3Service = new S3Service();