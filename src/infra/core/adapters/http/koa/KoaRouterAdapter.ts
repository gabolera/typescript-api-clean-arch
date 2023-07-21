import { Controller } from '../../../../../presentation/controller/Controller'
import { Request } from '../../../../../presentation/protocols/HttpProtocol'

export class KoaRouterAdapter {
  static adapt(router: Controller) {
    return async (ctx: any) => {
      const request: Request = {
        body: ctx.request.body,
        headers: ctx.request.headers,
      }
      const httpResponse = await router.handle(request)
      ctx.response.status = httpResponse.statusCode
      ctx.response.body = httpResponse.data
    }
  }
}
