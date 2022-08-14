import Response from "../utils/response";

const verifyAccess = (requiredRole) => {
  return (req, res, next) => {
    try {
      const role = req.user.role;
      if (requiredRole != role) {
        return res
          .status(401)
          .json({ error: "Unauthorised! You don't have access to this api" });
      }
      return next();
    } catch (err) {
      console.log(err);
    }
  };
};

export default verifyAccess;