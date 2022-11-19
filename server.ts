// /**
//  * @file Implements an Express Node HTTP server. Declares RESTful Web services
//  * enabling CRUD operations on the following resources:
//  * <ul>
//  *     <li>users</li>
//  *     <li>tuits</li>
//  *     <li>likes</li>
//  *     <li>bookmarks</li>
//  *     <li>follows</li>
//  *     <li>messages</li>
//  * </ul>
//  *
//  * Connects to a remote MongoDB instance hosted on the Atlas cloud database
//  * service
//  */
// import UserController from "./controllers/UserController";
// import TuitController from "./controllers/TuitController";
// import express, {Request, Response} from 'express';
// import mongoose = require("mongoose");
// import LikeController from "./controllers/LikeController";
// import BookmarkController from "./controllers/BookmarkController";
// import MessageController from "./controllers/MessageController";
// import FollowController from "./controllers/FollowController";
// const cors = require('cors')
// const app = express();
// app.use(cors());
// app.use(express.json());
// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     autoIndex: false,
//     maxPoolSize: 10,
//     serverSelectionTimeoutMS: 5000,
//     socketTimeoutMS: 45000,
//     family: 4
// }
// mongoose.connect('mongodb+srv://nikhilsapa:Computer123@cluster0.0mrzpxc.mongodb.net/tuiter?retryWrites=true&w=majority', options);
// app.get('/', (req: Request, res: Response) =>
//     res.send('Welcome to Foundation of Software Engineering!!!!'));
//
// const userController = UserController.getInstance(app);
// const tuitController = TuitController.getInstance(app);
// const likesController = LikeController.getInstance(app);
// const bookmarksController = BookmarkController.getInstance(app);
// const messageController = MessageController.getInstance(app);
// const followController = FollowController.getInstance(app);
//
// /**
//  * Start a server listening at port 4000 locally
//  * but use environment variable PORT on Heroku if available.
//  */
// const PORT = 4000;
// app.listen(process.env.PORT || PORT);

import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import express, {Request, Response} from 'express';
import mongoose = require("mongoose");
import LikeController from "./controllers/LikeController";
import BookmarkController from "./controllers/BookmarkController";
import MessageController from "./controllers/MessageController";
import FollowController from "./controllers/FollowController";
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}
mongoose.connect('mongodb+srv://nikhilsapa:Computer123@cluster0.0mrzpxc.mongodb.net/tuiter?retryWrites=true&w=majority');
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!!!!'));
const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const likesController = LikeController.getInstance(app);
const bookmarksController = BookmarkController.getInstance(app);
const messageController = MessageController.getInstance(app);
const followController = FollowController.getInstance(app);
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);