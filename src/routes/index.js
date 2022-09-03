import { Router } from "express";
import CoursesController from "../controllers/coursesControllers";
import UserController from "../controllers/userControllers";
import EnrroledController from "../controllers/enrroledControllers";
// import Validator from "../middlewares/validator";
// import DataChecker from "../middlewares/datacheker";
// import user from "../models/user";
// import user from "../models/user"
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";
// import GetAllCourses from "../models/courses"
const route = Router();

 route.post("/user/login",UserController.loginUserController);
route.post("/user/test", UserController.testController);
 route.post("/user/create",  UserController.registerUser);
route.get("/user", UserController.getAll);
route.delete("/user/:id", UserController.deleteUser);
 route.put("/user/:id", UserController.updateUser);


route.post("/courses/create",verifyToken,verifyAccess("Admin"), CoursesController.registerCourses);
route.get("/courses/:id", CoursesController.updateCourses);
route.get("/courses/:id", CoursesController.getOneCourse);
route.get("/courses", CoursesController.getAllCourses);
// route.post("/enrroled/create", EnrroledController.createenrrolement);
route.get("/enrroled", EnrroledController.getAll);
route.get("/enrroled/:id",EnrroledController.getOneById);
// route.put("/enrroled/:id", EnrroledController.upadateenrrolement);


// route.get("/create",UserController.getAll)

export default route;
