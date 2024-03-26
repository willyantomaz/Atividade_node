import usuarioModel from '../schema/usuario.schema';

export class UsuarioService {
    async create(usuario: any) {
        const createUsuario = await usuarioModel.create(usuario);
        return createUsuario;
    }

    async findAll() {
        const findUsuarios = await usuarioModel.find();
        return findUsuarios;
    }

    async findById(id: String) {
        const findIdUsuario = await usuarioModel.findById(id);
        return findIdUsuario;
    }

    async delete(id: String){
        const deleteUsuário = await usuarioModel.findByIdAndDelete(id);
        return deleteUsuário;
    }

    async update(id: String, usuario: any) {
        const updateUsuario = await usuarioModel.findByIdAndUpdate(id,usuario,{new:true});
        return updateUsuario;
    }

}
