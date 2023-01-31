import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()


class UserService{

    async getAllUsers() {
        return await prisma.user.findMany({
            include: {posts: true}
        })
    }

    async getUserByEmail(email: string) {
        return prisma.user.findUnique({
            where: {email}
        })
    }

    async getUserById(id : number) {
        return await prisma.user.findUnique({
            where: {id}
        })
    }

    async createUser(firstname: string, lastname: string, email: string) {
        return await prisma.user.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
            }
        });
    }

    async UpdateProfilePicture(id: string, image: string) {

        console.log(image)
        return await prisma.user.update({
            where: {id: Number(id)},
            data: {avatarS3Key: 'image/rililou'}
        });
    }

}

export const userService = new UserService();