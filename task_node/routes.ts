import { Router } from 'express'
import usuarioController from './src/task/domain/controller/usuario.controller'


const routes = Router()
    routes.post('/usuario', usuarioController.create)
    routes.get('/usuario', usuarioController.findAll)
    routes.get('/usuario/:id', usuarioController.findById)
    routes.delete('/usuario/delete/:id', usuarioController.delete)
    routes.put('/usuario/update/:id', usuarioController.update)

export {
    routes
}