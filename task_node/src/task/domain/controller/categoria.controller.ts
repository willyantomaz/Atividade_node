import {Request, Response} from 'express'
import {CategoriaService} from '../service/categoria.service'

class CategoriaController {
     async create(req: Request, res: Response) {
        try {
            const categoria = await new CategoriaService().create(req.body)
            return res.status(201).json(categoria)
        } catch (error) {
            return res.status(500)
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const categoria = await new CategoriaService().findAll()
            return res.status(200).json(categoria);
        } catch (error) {
            return res.status(500)
        }
    }

    async findById(req: Request, res: Response) {
        try{
            const categoria = await new CategoriaService().findById(req.params.id);
             res.status(200).json(categoria);
        }catch(error){
            return res.status(500);
        }
    }

    async delete(req: Request, res: Response) {
        try{
            const categoria = await new CategoriaService().delete(req.params.id);
            return res.status(200).json(categoria);
        }catch(error){
            return res.status(500);
        }
    }

    async update(req: Request, res: Response) {
        try{
            const categoria = await new CategoriaService().update(req.params.id,req.body);
            return res.status(200).json(categoria);
        }catch(error){
            return res.status(500);
        }
    }



}

export default new CategoriaController()