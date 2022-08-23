import CoursesModel from "../models/courses";

class CoursesServiceS {
  //registering courses
  static async registerCourses(req) {
    const courses = await CoursesModel.create(req.body);
    return courses;
  }
  //get all
  static async getAllCourses() {
    const courses = await CoursesModel.find();
    return courses;
  }
  //update courses
  static async updateCourses(req) {
    await CoursesModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    const courses = CoursesModel.findOne({ _id: req.params.id });
    return courses;
  }
  //static getone
  static async getOneCourses(req) {
    const courses = await CoursesModel.findById({ _id: req.params.id }, req.body);
    return courses;
  }
}

export default CoursesServiceS;
