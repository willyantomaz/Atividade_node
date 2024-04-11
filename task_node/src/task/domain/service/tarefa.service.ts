import path from 'path';
import tarefaModel from '../schema/tarefa.schema';
import { match } from 'assert';
import categoriaModel from '../schema/categoria.schema';

export class TarefasService {
    async create(tarefa: any) {
        const createTarefas = await tarefaModel.create(tarefa);
        return createTarefas;
    }

    async findAll() {
        const findTarefas = await tarefaModel.find();
        return findTarefas;
    }

    async findStatus(status: String) {
        const findTarefas = await tarefaModel.find({statusTarefa: status});
        console.log(status);
        return findTarefas;
    }


    async findFilterCat(nomeCat: String) {
        const categoria = await categoriaModel.findOne({nome: nomeCat});
        const findTarefas = await tarefaModel.find({categoria: {_id: categoria?._id}}).populate("categoria");
        return findTarefas;
    }



    async findById(id: String) {
        const findIdTarefa = await tarefaModel.findById(id).populate("categoria");
        return findIdTarefa;
    }

    async delete(id: String) {
        const deleteTarefa = await tarefaModel.findByIdAndDelete(id);
        return deleteTarefa;
    }

    async update(id: String, tarefa: any) {
        const updateTarefa = await tarefaModel.findByIdAndUpdate(id, tarefa, { new: true });
        return updateTarefa;
    }

    async getUsuarioTarefa(userID: any) {
        const tarefas = await tarefaModel.find({userID});
        return tarefas;
    }

}