import { Router } from "express";
import coursesController from "../controllers/coursesControllers";
import UserController from "../controllers/userControllers";
import enrroledController from "../controllers/enrroledController";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/datacheker";
import user from "../models/user";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken"
const route = Router();

route.post("/user/login",
UserController.loginUserController);
route.post("/user/test", UserController.testController);
route.post("/user/create",  Validator.newAccountRules(),
  Validator.validateInput,
  DataChecker.isEmailExist, UserController.registerUser);
route.get("/user", UserController.getAll);
route.delete("/user/:id", UserController.deleteUser);
route.put("/user/:id", UserController.updateUser);

route.post(
  "/coursesr/create",
 
);
route.get("/courses/create",verifyToken,verifyAccess("Admin"), coursesController.registerCourses);
route.get("/courses/:id", coursesController.updateCourses);
route.get("/courses/:id", coursesController.getOneCourse);
route.post("/enrroled/create", enrroledController.createenrrolement);
route.get("/enrroled", enrroledController.getAll);
route.get("/enrroled/:id",enrroledController.getOneById);
route.put("/enrroled/:id", enrroledController.upadateenrrolement);


// route.get("/create",UserController.getAll)

export default route;
