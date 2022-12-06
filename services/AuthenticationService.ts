import UserDao from "../daos/UserDao";
import mongoose from "mongoose";

const userDao: UserDao = UserDao.getInstance();

const PROTOCOL = "mongodb+srv";
const DB_USERNAME = "NehaRamachandra";//process.env.DB_USERNAME;
const DB_PASSWORD = "1234";//process.env.DB_PASSWORD;
const HOST = "cluster0.zmme2.mongodb.net";
const DB_NAME = "tuiter";
const DB_QUERY = "retryWrites=true&w=majority";
const connectionString = `${PROTOCOL}://${DB_USERNAME}:${DB_PASSWORD}@${HOST}/${DB_NAME}?${DB_QUERY}`;
mongoose.connect(connectionString);

export const login = (u: string, p: string) =>
    userDao.findUserByCredentials(u, p)
        .then(user => {
            if (user) {
                return user;
            } else {
                throw "Unknown user"
            }
        })
        .then(user => user)
        .catch(e => e)

export const register = (u: string, p: string, e: string) =>
    userDao.findUserByUsername(u)
        .then(user => {
            if (user) {
                throw 'User already exists';
            } else {
                return userDao.createUser({
                    username: u, password: p, email: e
                });
            }
        })
        .then(newUser => newUser)
        .catch(e => e);

login('alice008', 'alice234')
    .then(user => console.log(user))