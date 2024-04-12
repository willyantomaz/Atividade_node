import { Router } from 'express'
import usuarioController from './src/task/domain/controller/usuario.controller'
import categoriaController from './src/task/domain/controller/categoria.controller'
import tarefaController from './src/task/domain/controller/tarefa.controller'


const routes = Router()
routes.post('/usuario', usuarioController.create)
routes.get('/usuario', usuarioController.findAll)
routes.delete('/usuario/delete/:id', usuarioController.delete)
routes.put('/usuario/update/:id', usuarioController.update)
routes.get('/usuario/login',usuarioController.loginUser)
routes.get('/usuario/:id', usuarioController.findById)

routes.post('/categoria', categoriaController.create)
routes.get('/categoria', categoriaController.findAll)
routes.put('/categoria/update/:id', categoriaController.update)
routes.delete('/categoria/delete/:id', categoriaController.delete)
routes.get('/categoria/usuario/:userID', categoriaController.findCatUs)
routes.get('/categoria/:id', categoriaController.findById)


routes.post('/tarefa', tarefaController.create)
routes.get('/tarefa', tarefaController.findAll)
routes.put('/tarefa/update/:id', tarefaController.update)
routes.delete('/tarefa/delete/:id', tarefaController.delete)
routes.get('/tarefa/usuario/:userID', tarefaController.findBYUserTarefa)
routes.get('/tarefa/categoria/:nomeCat', tarefaController.findByCategoria)
routes.get('/tarefa/status/:status', tarefaController.findStatus)
routes.get('/tarefa/vencimento',tarefaController.findVencimento)
routes.get('/tarefa/:id', tarefaController.findById)


export {
    routes
}