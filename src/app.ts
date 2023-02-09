import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { Response, Request, NextFunction} from 'express'
import {appRouter} from "./appRouter";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

const cors = require('cors');
app.use(cors({origin: '*'}));

const httpServer = createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

let users: any= [];

io.on('connection', (socket : any) => {
  console.log(`User : ${socket.id} user just connected!`);
  socket.on('message', (data : any) => {
    io.emit('messageResponse', data);
  });

  socket.on('newUser', (data : any) => {
    users.push(data);
    console.log('🚀: users', users);
    io.emit('newUserResponse', users);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    users = users.filter((user : any) => user.socketID !== socket.id);

    io.emit('newUserResponse', users);
    socket.disconnect();
  });
});

httpServer.listen(3200);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(appRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ err });
});

export default app;
