import { Request, Response } from '../protocols/HttpProtocol'

export interface Controller {
  handle(request: Request): Promise<Response>
}
