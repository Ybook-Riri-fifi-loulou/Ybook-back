import {PrismaClient} from "@prisma/client";

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
}

export const userService = new UserService();