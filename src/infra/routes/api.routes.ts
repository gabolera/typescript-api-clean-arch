import { ExampleController } from '../../presentation/controller/ExampleController'
import { Router } from '../core/Route'

// Arquivo de rotas
const route = new Router()
route.get('/', new ExampleController())
route.get('/teste', new ExampleController())

export default route
