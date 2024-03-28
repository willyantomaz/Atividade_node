import { Schema, model } from 'mongoose';

export const CategoriaSchema = new Schema({
    nome: { type: String, required: true },
    cor: { type: String, required: true },

})

export default model('Categoria', CategoriaSchema)

