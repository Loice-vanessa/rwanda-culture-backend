import userModel from "../models/user";
import handlePassword from "../utils/handlepassword";
class UserServices {
  //login
  static async loginUser(req){
    const user= await userModel.findOne({email:req.body.email});
    return user;
  }
  // static registerUser
  static async registerUser(req) {
    req.body.password = handlePassword.encryptPassword(req.body.password);
    const user = userModel.create(req.body);
   
    return user;
  }
  // static getall
  static async getAll(req) {
    const user = userModel.find();

    return user;
  }
  //static deleteUser
  static async deleteUser(req) {
    const user = userModel.deleteOne({_id: req.params.id});

    return user;
  }
  //static updateUser
  static async updateUser(req) {
    // const user=await userModel.findOneAndUpdate({_id: req.params.id},req.body,{new:true});
    const user=await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    // const user = userModel.findOne({_id: req.params.id});
    return user;
  }
  //


  static testServiceFunction(req) {
    req.body.names = req.body.names.toUpperCase();
    const { num1, num2 } = req.body;

    const sum = num1 + num2;
    req.body.sum = sum;
    return req.body;
  }
}
export default UserServices;
