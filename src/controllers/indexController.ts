import { Request, Response } from 'express';


class IndexController{

    public index (req: Request, res: Response){

        res.send("This rest api works");
    }
   
}
export const indexController = new IndexController();