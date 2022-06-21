import express from "express";
import pool from "../configs/connectDB";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {

    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:id', homeController.getDetailPage)
    router.post('/create-new-user', homeController.creatNewUser)
    router.get('/about', (req, res) => {
        res.send(`I am Thai Bui`)
    })

    return app.use('/', router)
}

export default initWebRoute;
