/**
 * @file Implements an Express Node HTTP server.
 */

import express, {Request, Response} from 'express';
import UserController from "./controllers/UserController";
import UserDao from "./daos/UserDao";
import TuitController from "./controllers/TuitController";
import TuitDao from "./daos/TuitDao";
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nikhilsapa:Computer123@cluster0.0mrzpxc.mongodb.net/tuiter?retryWrites=true&w=majority');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!!!!'));

app.get('/hello', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!'));
new UserController(app,new UserDao);
new TuitController(app,new TuitDao);
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);