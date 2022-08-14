import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default class TokenAuth {
  //function to generate token
  static generateToken(data) {
    const token = jwt.sign(data, process.env.JWT_KEY, { expiresIn: "1d" });
    return token;
  }

  // function of decoding token
  static decodeToken(token) {
    const data = jwt.verify(token, process.env.JWT_KEY);
    return data;
  }
}
