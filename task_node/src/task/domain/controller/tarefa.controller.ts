import { Request, Response } from 'express'
import { TarefasService } from '../service/tarefa.service'

class TarefasController {
    async create(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().create(req.body)
            return res.status(201).json(tarefa)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().findAll()
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().findById(req.params.id);
            res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async findStatus(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().findStatus(req.params.status);
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    async findByCategoria(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().findFilterCat(req.params.nomeCat);
            res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async findBYUserTarefa(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().getUsuarioTarefa(req.params.userID);
            res.status(200).json(tarefa);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async findVencimento(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().findVencimento(req.body.diaVencimento);
            res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().delete(req.params.id);
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const tarefa = await new TarefasService().update(req.params.id, req.body);
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async totalTarefa(req: Request, res: Response){
        try {
            const tarefa = await new TarefasService().totalTarefas();
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async totalMaisRcente(req: Request, res: Response){
        try {
            const tarefa = await new TarefasService().tarefaRecente(req.params.userID);
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async totalMaisAntiga(req: Request, res: Response){
        try {
            const tarefa = await new TarefasService().tarefaAntiga(req.params.userID);
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async tarefasConcluidas(req: Request, res: Response){
        try {
            const tarefa = await new TarefasService().conclusaoTarefa();
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async descricaoMaior(req: Request, res: Response){
        try {
            const tarefa = await new TarefasService().descricaoMaior();
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async tarefasAgrupadas(req: Request, res: Response){
        try {
            const tarefa = await new TarefasService().tarefasAgrupa();
            return res.status(200).json(tarefa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }


   


}

export default new TarefasController()