import enrroledServices from "../services/enrroledService";
import Response from "../utils/response";

class EnrroledController{

    // Create enrolement Controller
    static async createEnrroled(req,res){
        const Enrroled = await enrroledServices.createEnrroled(req);
        if(!Enrroled){
            return Response.errorMessage(res, "Failed Created" , 400)
        }
        return Response.successMessage(
            res,
            "Enrolement Successful Created",
            Enrroled,
            200
        );
    }


    //get all enrroled controller

    static async getAll(req,res){
        const Enrroled = await enrroledServices.getAll(req);
        if(!Enrroled){
            return Response.errorMessage(res, "Not found" , 400)
        }
        return Response.successMessage(
            res,
            "Enrolement Successful to retrieve",
            Enrroled,
            200
        );
    }
    
    //update enrroled controller
   
    
    static async upadateEnrroled(req,res){
        const Enrroled = await enrroledServices.upadateEnrroled(req);
        if(!Enrroled){
            return Response.errorMessage(res, "Failed Created" , 400)
        }
        return Response.successMessage(
            res,
            "Enrolement Successful Created",
            Enrroled,
            200
        );
    }

    // get one by id 

    static async getOneById(req,res){
        const enrroled = await enrroledServices.getOneById(req);
        if(!Enrroled){
            return Response.errorMessage(res, "Not found" , 400)
        }
        return Response.successMessage(
            res,
            "Enrolement Successful to retrieve",
            Enrroled,
            200
        );
    }
}
export default EnrroledController