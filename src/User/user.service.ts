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

    async getUserPosts(id: string) {
        return await prisma.post.findMany({
            where: { userId: Number(id) },
            include: {user: true}
        });
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

}

export const userService = new UserService();