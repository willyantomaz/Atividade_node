import tarefaModel from '../schema/tarefa.schema';
import categoriaModel from '../schema/categoria.schema';

export class TarefasService {
    async create(tarefa: any) {
        const createTarefas = await tarefaModel.create(tarefa);
        if (createTarefas.statusTarefa == "concluido") {
            createTarefas.dataConclusao = new Date();
        }
        return createTarefas;
    }

    async findAll() {
        const findTarefas = await tarefaModel.find();
        return findTarefas;
    }

    async findVencimento(diaVencimento: number) {

        const data = new Date();
        const dataVencendo = new Date();
        dataVencendo.setDate(dataVencendo.getDate() + diaVencimento);



        const findTarefas = await tarefaModel.find({ statusTarefa: { $in: ["pendente", "em_andamento"] } });

        const tarefazVenci = findTarefas.filter(tarefa => tarefa.vencimento >= data && tarefa.vencimento <= dataVencendo);

        return tarefazVenci;

    }

    async findStatus(status: String) {
        const findTarefas = await tarefaModel.find({ statusTarefa: status });
        return findTarefas;
    }


    async findFilterCat(nomeCat: String) {
        const categoria = await categoriaModel.findOne({ nome: nomeCat });
        const findTarefas = await tarefaModel.find({ categoria: { _id: categoria?._id } }).populate("categoria");
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
        if (updateTarefa?.statusTarefa == "concluido") {
            updateTarefa.dataConclusao = new Date();
        }
        return updateTarefa;
    }

    async getUsuarioTarefa(userID: String) {
        const tarefas = await tarefaModel.find({ userID });
        return tarefas;
    }

    async totalTarefas() {
        const total = await tarefaModel.find().countDocuments();
        return total;
    }

    async tarefaRecente(userID: any) {
        const recente = await tarefaModel.findOne({ userID }).sort({ createdAt: -1 });
        return recente;
    }
    async tarefaAntiga(userID: any) {
        const recente = await tarefaModel.findOne({ userID }).sort({ createdAt: +1 });
        return recente;
    }

    async conclusaoTarefa() {
        const tarefasQTD = await this.totalTarefas()

        const concluido = await tarefaModel.find({ statusTarefa: "concluido" }).countDocuments();
        var media = (concluido / tarefasQTD) * 100;
        return media;
    }

    async descricaoMaior() {
        const descricao = await tarefaModel.find();

        const descricaoMaior = descricao.reduce((atual, proximo) => {
            if (atual && proximo && atual.descricao && proximo.descricao) {
                return (atual.descricao.length > proximo.descricao.length) ? atual : proximo;
            }

            return atual;
        });

        return descricaoMaior;
    }

    async tarefasAgrupa() {

        const tarefas = await tarefaModel.aggregate([
            {
                $group: {
                    _id: "$categoria",
                    tarefas: { $push: "$$ROOT" } 
                }
            }
        ]);
        return tarefas;
    }
}