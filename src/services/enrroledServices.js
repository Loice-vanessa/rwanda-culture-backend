import enrroledcourses from "../models/enrroled";

class EnrroledService{

    //create enrroled
    static async createEnrroled(req){
        const Enrroled = await enrroledcourses.create(req.body)
        return Enrroled
    }

    // get all enrroled

    static async getAll(req){
        const Enrroled = await enrroledcourses.find()
        return Enrroled;
    }
    // update enrroled
    static async upadateEnrroled(req){
        await enrroledcourses.findOneAndUpdate({_id:req.params.id},req.body)
        const Enrroled = await enrroledcourses.findOne({_id:req.params.id})
        return Enrroled;
    }

    // get one by id 
    static async getOneById(req){
        const Enrroled = await enrroledcourses.findById({_id:req.params.id},req.body)
        return Enrroled;
    }
}
export default EnrroledService