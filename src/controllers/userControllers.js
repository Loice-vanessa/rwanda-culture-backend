import UserServices from "../services/userService";
import handlePasswords from "../utils/handlepassword";
import TokenAuth from "../utils/token";
class UserController {
  //loginuser controllers
  static async loginUserController(req, res) {
    const user = await UserServices.loginUser(req);

    if (!user) {
      return res.status(400).json({ message: "user is not exist" });
    }
    
    if (handlePasswords.checkPassword(user.password, req.body.password)) {
      const token = TokenAuth.generateToken({
        phone: user.phone,
        email: user.email,
        picture: user.picture,
        names: user.names,
        role:user.role
      });

      return res.status(200).json({ message: "logged in successfully", token });
    } else {
      return res
        .status(400)
        .json({ message: "faild to loggin, password is wrong!" });
    }
  }
  // register User
  static async registerUser(req, res) {
    const newUser = await UserServices.registerUser(req);
    if (!newUser) {
      return res.status(400).json({ message: "failed to register" });
    }
    return res.status(201).json({ message: "success", data: newUser });
  }
  //get all user
  static async getAll(req, res) {
    const newUser = await UserServices.getAll(req);
    if (!newUser) {
      return res.status(400).json({ message: "failed to getall" });
    }
    return res.status(200).json({ message: "success", data: newUser });
  }
  //delete user
  static async deleteUser(req, res) {
    const newUser = await UserServices.deleteUser(req);
    if (!newUser) {
      return res.status(400).json({ message: "failed to deleteUser" });
    }
    return res.status(201).json({ message: "success", data: newUser });
  }
  //updateUser
  static async updateUser(req, res) {
    console.log(req.params.names);

    const newUser = await UserServices.updateUser(req);
    if (!newUser) {
      return res.status(400).json({ message: "failed to updateUser" });
    }
    return res.status(201).json({ message: "success", data: newUser });
  }

  static testController(req, res) {
    const test = UserServices.testServiceFunction(req);
    return res.status(200).json({
      message: "Ok! Successfully",
      data: test,
    });
  }
}
export default UserController;
