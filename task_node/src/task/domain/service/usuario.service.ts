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
}
