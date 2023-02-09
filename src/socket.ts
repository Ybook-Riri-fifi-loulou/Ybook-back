import { Server as HTTPServer } from 'http';
import { Socket, Server } from 'socket.io';
import { v4 } from 'uuid';

export class ServerSocket {
    public static instance: ServerSocket;
    public io: Server | undefined;

    public users: { [uid: string]: string; } | undefined;

    constructor(server: HTTPServer) {
        ServerSocket.instance = this;
        this.users = {};
        this.io = new Server(server, {
            serveClient: false,
            pingInterval: 10000,
            pingTimeout: 5000,
            cookie: false,
            cors: {
                origin: "*",
            }
        });

        this.io.on('connect', this.StartListeners);

        console.info('Socket server started');
    }

    StartListeners = (socket: Socket) => {
        console.info('Message from socket: ', socket.id);

        socket.on('handshake', () => {
            console.info('Handshake from socket: ', socket.id);
        })

        socket.on('disconnect', () => {
            console.info('Disconnect from socket: ', socket.id);
        })
    }
}