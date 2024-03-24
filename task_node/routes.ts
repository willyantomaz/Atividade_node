import { Router } from 'express'
import usuarioController from './src/task/domain/controller/usuario.controller'


const routes = Router()
    routes.post('/usuario', usuarioController.create)
    routes.get('/usuario', usuarioController.findAll)

export {
    routes
}