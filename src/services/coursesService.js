import CoursesModel from "../models/courses";

class CoursesServiceS {
  //registering courses
  static async registerCourses(req) {
    const Courses = await CoursesModel.create(req.body);
    return Courses;
  }
  //get all
  static async getAll() {
    const Courses = await CoursesModel.find();
    return Courses;
  }
  //updateCourses
  static async updateCourses(req) {
    await CoursesModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    const Courses = CoursesModel.findOne({ _id: req.params.id });
    return Courses;
  }
  //static getone
  static async getOneCourses(req) {
    const Courses = await CoursesModel.findById({ _id: req.params.id }, req.body);
    return Courses;
  }
}

export default CoursesServiceS;
