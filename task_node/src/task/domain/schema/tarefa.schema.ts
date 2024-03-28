import { Schema, model } from "mongoose";
import { Usuario } from "../interface/usuario.interface";
import usuarioSchema from "./usuario.schema";
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
    // categoria: ,
    statusTarefa: {
        type: String,
        enum: ["pendente", "em_andamento", "concluido"],
        required: true
    },
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario'
    }

}, {
    timestamps: true
})

export default model('Tarefas', tarefaSchema)


