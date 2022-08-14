import CoursesServiceS from "../services/coursesServices";
import Response from "../utils/response";

class CoursesController {
  //register course
  static async registerCourses(req, res) {
    const Courses = await CoursesServiceS.registerCourses(req);
    if (!Courses) {
      return Response.errorMessage(res, "Failed to register Course", 400);
    }
    return Response.successMessage(
      res,
      "Course sucessfully registered",
      Courses,
      200
    );
  }

  //get all courses
  static async getAllCourses(req, res) {
    const Courses = await CoursesServiceS.getAllCourses(req);
    if (!Courses) {
      return Response.errorMessage(res, "not Tours Found", 400);
    }
    return Response.successMessage(
      res,
      "Course successfully to retrieved",
      Courses,
      200
    );
  }

  //update user
  static async updateCourses(req, res) {
    const Course = await CoursesServiceS.updateCourses(req);
    if (!Courses) {
      return Response.errorMessage(res, "Course not found", 400);
    }
    return Response.successMessage(
      res,
      "course successfully to retrieved",
      Courses,
      200
    );
  }
  //getone by Id
  static async getOneCourse(req, res) {
    const Courses = await CoursesServiceS.getOneTour(req);
    if (!Courses) {
      return Response.errorMessage(res, "Course not found", 400);
    }
    return Response.successMessage(
      res,
      "course successfully to retrieved",
      Courses,
      200
    );
  }
}
export default CoursesController;
