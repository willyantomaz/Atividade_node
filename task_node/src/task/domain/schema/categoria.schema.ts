import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

export const CategoriaSchema = new Schema({
    nome: { 
        type: String,
         required: true 
        },
    cor: {
         type: String, 
         required: true 
        },
    //tarefas:[{
    //    type: mongoose.Types.ObjectId,
    //    ref: 'Tarefas',
    //    required: true,        
    //    }],    
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
        require: true
        
    }

})

export default model('Categoria', CategoriaSchema)

