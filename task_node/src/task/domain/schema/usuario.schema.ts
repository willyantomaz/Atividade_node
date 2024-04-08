import {Schema,model} from 'mongoose';

export const UsuarioSchema = new Schema({
    username: {
        type: String,
         required: true},
    senha: {
        type: String,
         required: true},
    email: {
        type: String,
         required: true},
    peso: {
        type: Number,
         required: true},
},{
    timestamps: true
})

export default model('Usuario', UsuarioSchema)