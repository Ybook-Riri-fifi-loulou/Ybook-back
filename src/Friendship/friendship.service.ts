import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient();


class FriendshipService {

    async getPendingFriendships(id: number) {
        return await prisma.friendship.findMany({
            where: {
                AND: [
                    {
                        OR: [
                            {fromId: id}
                            , {toId: id}
                        ],
                    },
                    {
                        status: "PENDING",
                    },
                ],
            },
            include: {
                to: true,
                from: true,
            }
        })
    }

    async declineFriendship(id: number) {
        return await prisma.friendship.update({
            where: {
                id: id
            },
            data: {
                status: "IGNORED"
            }
        });
    }

    async acceptFriendship(id: number) {
        return await prisma.friendship.update({
            where: {
                id: id
            },
            data: {
                status: "ACCEPTED"
            }
        });
    }

    async getFriends(id: number) {
        return await prisma.friendship.findMany({
            where: {
                AND: [
                    {
                        OR: [
                            {fromId: id}
                            , {toId: id}
                        ],
                    },
                    {
                        status: "ACCEPTED",
                    },
                ],
            },
            include: {
                to: true,
                from: true,
            }
        })
    }

    async deleteFriendship(id: number) {
        return await prisma.friendship.deleteMany({
            where: {
                id: id
            }
        })
    }
}

export const friendshipService = new FriendshipService();
