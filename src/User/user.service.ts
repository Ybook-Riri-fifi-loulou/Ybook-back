import {PrismaClient} from "@prisma/client";
import {UserModel} from "./user.model";

const prisma = new PrismaClient()


class UserService{

    async getAllUsers() {
        return await prisma.user.findMany({
            include: {posts: true}
        })
    }

    async getUserPosts(id: string) {
        return await prisma.post.findMany({
            where: { userId: Number(id) },
            include: {user: true}
        });
    }

    async createUser(user: UserModel) {
        return await prisma.user.create({
            data: {
                firstname: user.firstName,
                lastname: user.lastName,
                email: user.email,
            }
        });
    }

}

export const userService = new UserService();