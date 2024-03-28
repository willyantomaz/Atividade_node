import tarefaModel from '../schema/tarefa.schema';

export class TarefasService {
    async create(tarefa: any) {
        const createTarefas = await tarefaModel.create(tarefa);
        return createTarefas;
    }

    async findAll() {
        const findTarefas = await tarefaModel.find();
        return findTarefas;
    }

    async findById(id: String) {
        const findIdTarefa = await tarefaModel.findById(id);
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

}