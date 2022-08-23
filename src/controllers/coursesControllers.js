import CoursesService from "../services/coursesService";
import Response from "../utils/response";

class CoursesController {
  //register course
  static async registerCourses(req, res) {
    const Courses = await CoursesService.registerCourses(req);
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
    const Courses = await CoursesService.getAllCourses(req);
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
    const Course = await CoursesService.updateCourses(req);
    if (!Course) {
      return Response.errorMessage(res, "Course not found", 400);
    }
    return Response.successMessage(
      res,
      "course successfully to retrieved",
      Course,
      200
    );
  }
  //getone by Id
  static async getOneCourse(req, res) {
    const Courses = await CoursesService.getOneCourse(req);
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
