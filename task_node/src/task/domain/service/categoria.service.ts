import categoriaModel from '../schema/categoria.schema';

export class CategoriaService {
    async create(categoria: any) {
        const createCategoria = await categoriaModel.create(categoria);
        return createCategoria;
    }

    async findAll() {
        const findCategorias = await categoriaModel.find();
        return findCategorias;
    }

    async findById(id: String) {
        const findIdCategoria = await categoriaModel.findById(id);
        return findIdCategoria;
    }

    async delete(id: String){
        const deleteCategoria = await categoriaModel.findByIdAndDelete(id);
        return deleteCategoria;
    }

    async update(id: String, categoria: any) {
        const updateCategoria = await categoriaModel.findByIdAndUpdate(id,categoria,{new:true});
        return updateCategoria;
    }

}