import { Router } from 'express'
import usuarioController from './src/task/domain/controller/usuario.controller'
import categoriaController from './src/task/domain/controller/categoria.controller'
import tarefaController from './src/task/domain/controller/tarefa.controller'


const routes = Router()
routes.post('/usuario', usuarioController.create)
routes.get('/usuario', usuarioController.findAll)
routes.get('/usuario/:id', usuarioController.findById)
routes.delete('/usuario/delete/:id', usuarioController.delete)
routes.put('/usuario/update/:id', usuarioController.update)

routes.post('/categoria', categoriaController.create)
routes.get('/categoria', categoriaController.findAll)
routes.get('/categoria/:id', categoriaController.findById)
routes.delete('/categoria/delete/:id', categoriaController.delete)
routes.put('/categoria/update/:id', categoriaController.update)

routes.post('/tarefas', tarefaController.create)
routes.get('/tarefas', tarefaController.findAll)
routes.get('/tarefas/:id', tarefaController.findById)
routes.delete('/tarefas/delete/:id', tarefaController.delete)
routes.put('/tarefas/update/:id', tarefaController.update)


export {
    routes
}