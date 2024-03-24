import {Request, Response} from 'express'
import {UsuarioService} from '../service/usuario.service'

class UsuarioController {
     async create(req: Request, res: Response) {
        try {
            const usuario = await new UsuarioService().create(req.body)
            return res.status(201).json(usuario)
        } catch (error) {
            return res.status(500)
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const usuario = await new UsuarioService().findAll()
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500)
        }
    }
}

export default new UsuarioController()