import { Controller } from '../../presentation/controller/Controller'
import { RouteMethod } from './Route'

export interface HttpServer {
  on(method: RouteMethod, url: string, controller: Controller): void
  listen(port: number, callback?: Function): void
  use(params: any): void
}
