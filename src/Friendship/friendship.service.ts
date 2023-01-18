import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient();


class FriendshipService {

    async getPendingFriendships(email: string) {

        let userId = await prisma.user.findUnique({
            where: {
                email: 'alice@prisma.io'
            },
            select: {
                id: true
            }
        });

        let id = parseInt(JSON.stringify(userId?.id));

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
                        status: "PENDING"
                    }
                ]
            }
        });
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

}

export const friendshipService = new FriendshipService();
