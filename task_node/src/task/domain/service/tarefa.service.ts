import tarefaModel from '../schema/tarefa.schema';
import categoriaModel from '../schema/categoria.schema';

export class TarefasService {
    async create(tarefa: any) {
        const createTarefas = await tarefaModel.create(tarefa);
        if(createTarefas.statusTarefa == "concluido"){
            createTarefas.dataConclusao = new Date();
        }
        return createTarefas;
    }

    async findAll() {
        const findTarefas = await tarefaModel.find();
        return findTarefas;
    }

    async findVencimento(){

        const data = new Date();
        //const dataBr = new Date(data.toLocaleDateString("pt-BR"));
        var vencidas;

        const findTarefas = await tarefaModel.find({statusTarefa: {$in:["pendente","em_andamento"]}});
        
        findTarefas.forEach((tarefa) =>{
           const venciData = tarefa.vencimento;

           if(venciData <= data){
            console.log("venceu"+tarefa)
            vencidas = tarefa
           }

           

        })
        //terminar de testar
        console.log(vencidas);
        return vencidas;
        
    }

    async findStatus(status: String) {
        const findTarefas = await tarefaModel.find({statusTarefa: status});
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
        if(updateTarefa?.statusTarefa == "concluido"){
            updateTarefa.dataConclusao = new Date();
        }
        return updateTarefa;
    }

    async getUsuarioTarefa(userID: any) {
        const tarefas = await tarefaModel.find({userID});
        return tarefas;
    }

}