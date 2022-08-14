import { Router } from "express";
import TourController from "../controllers/tourControllers";
import UserController from "../controllers/userControllers";
import BookingController from "../controllers/bookingController";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/datacheker";
import user from "../models/user";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyAccess"
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
  "/tour/create",
 
);
route.get("/tour/create",verifyToken,verifyAccess("Admin"), TourController.registerTour);
route.get("/tour/:id", TourController.updateTour);
route.get("/tour/:id", TourController.getOneTour);
route.post("/booking/create", BookingController.createBooking);
route.get("/booking", BookingController.getAll);
route.get("/booking/:id", BookingController.getOneById);
route.put("/booking/:id", BookingController.upadateBooking);


// route.get("/create",UserController.getAll)

export default route;
