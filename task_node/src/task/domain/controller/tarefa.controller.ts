import { Request, Response } from 'express'
import { TarefasService } from '../service/tarefa.service'

class TarefasController {
    async create(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().create(req.body)
            return res.status(201).json(tarefa)
        } catch (error) {
            return res.status(500)
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().findAll()
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500)
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().findById(req.params.id);
            res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().delete(req.params.id);
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().update(req.params.id, req.body);
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500);
        }
    }



}

export default new TarefasController()