import {Request, Response} from 'express'
import {UsuarioService} from '../service/usuario.service'

class UsuarioController {
     async create(req: Request, res: Response) {
        try {
            const usuario = await new UsuarioService().create(req.body)
            return res.status(201).json(usuario)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const usuario = await new UsuarioService().findAll()
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findById(req: Request, res: Response) {
        try{
            const usuario = await new UsuarioService().findById(req.params.id);
             res.status(200).json(usuario);
        }catch(error){
            return res.status(500).json(error);
        }
    }

    async delete(req: Request, res: Response) {
        try{
            const usuario = await new UsuarioService().delete(req.params.id);
            return res.status(200).json(usuario);
        }catch(error){
            return res.status(500).json(error);
        }
    }

    async update(req: Request, res: Response) {
        try{
            const usuario = await new UsuarioService().update(req.params.id,req.body);
            return res.status(200).json(usuario);
        }catch(error){
            return res.status(500).json(error);
        }
    }

    async loginUser(req: Request, res: Response){
        try{
            const usuario = await new UsuarioService().login(req.body);
            console.log(usuario);
            if(usuario){
                return res.status(200).json(usuario)
            }
            return res.status(401).json("usuario não cadastrado")
            
        }catch(error){
            return error
        }
    }



}

export default new UsuarioController()