import { Controller } from '../../../presentation/controller/Controller'
import { Request as RequestExpress, Response as ResponseExpress } from 'express'
import { Request } from '../../../presentation/protocols/HttpProtocol'

export class ExpressRouterAdapter {
  static adapt(router: Controller) {
    return async (req: RequestExpress, res: ResponseExpress) => {
      const request: Request = {
        body: req.body,
        headers: req.headers,
      }
      const httpResponse = await router.handle(request)
      res.status(httpResponse.statusCode).json(httpResponse.data)
    }
  }
}
