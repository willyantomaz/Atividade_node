import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export const tarefaSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },

    descricao: {
        type: String
    },
    tipo: {
        type: String,
        required: true
    },
    categoria:{
        type: mongoose.Types.ObjectId,
        ref: "Categoria",
        required: true
    } ,
    statusTarefa: {
        type: String,
        enum: ["pendente", "em_andamento", "concluido"],
        required: true
    },
    dataConclusao: {
        type: Date
    },
    vencimento:{
        type: Date,
        required: true,
    },
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
}, {
    timestamps: true
})

export default model('Tarefas', tarefaSchema)


