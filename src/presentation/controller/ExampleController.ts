import { HttpProtocol, Request, Response } from '../protocols/HttpProtocol'
import { Controller } from './Controller'

export class ExampleController implements Controller {
  async handle(request: Request): Promise<Response> {
    return HttpProtocol.send({ message: 'Usuário cadastrado com sucesso' })
  }
}
