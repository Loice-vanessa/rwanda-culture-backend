import EnrroledServices from "../services/enrroledServices";
import Response from "../utils/response";

class EnrroledController{

    // Create Enrroled Controller
    static async createEnrroled(req,res){
        const Enrroled = await EnrroledServices.createEnrroled(req);
        if(!Enrroled){
            return Response.errorMessage(res, "Failed Created" , 400)
        }
        return Response.successMessage(
            res,
            "Enrroled Successful Created",
            Enrroled,
            200
        );
    }


    //get all enrroled controller

    static async getAll(req,res){
        const Enrroled = await EnrroledServices.getAll(req);
        if(!Enrroled){
            return Response.errorMessage(res, "Not found" , 400)
        }
        return Response.successMessage(
            res,
            "Enrroled Successful to retrieve",
            Enrroled,
            200
        );
    }
    
    //update Enrroled controller
   
    
    static async upadateEnrroled(req,res){
        const Enrroled = await EnrroledServices.upadateEnrroled(req);
        if(!Enrroled){
            return Response.errorMessage(res, "Failed Created" , 400)
        }
        return Response.successMessage(
            res,
            "Enrroled Successful Created",
            Enrroled,
            200
        );
    }

    // get one by id 

    static async getOneById(req,res){
        const Enrroled = await EnrroledServices.getOneById(req);
        if(!Enrroled){
            return Response.errorMessage(res, "Not found" , 400)
        }
        return Response.successMessage(
            res,
            "Enrroled Successful to retrieve",
            Enrroled,
            200
        );
    }
}
export default EnrroledController