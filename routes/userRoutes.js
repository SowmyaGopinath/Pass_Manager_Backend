import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.post('/authenticate', userController.authenticate);

router.post('/checkIfUserExists', userController.checkIfUserExists);

router.post('/addUserDetails', userController.addUserDetails);

router.post('/addApp', userController.addApp);

router.post('/deleteApp',userController.deleteApp);

export default router;