import { Controller } from '../../../../../presentation/controller/Controller'
import { HttpServer } from '../../../interface/HttpServer'
import { ExpressRouterAdapter } from './ExpressRouterAdapter'
import { Route, RouteMethod, Router } from '../../../Route'

export class ExpressServerAdapter implements HttpServer {
  constructor(private app: any) {
    this.app.use(app.json())
  }

  on(method: RouteMethod, url: string, controller: Controller): void {
    this.routeSetup(new Route(method, url, controller))
  }

  use(params: Route[] | Router | any) {
    if (Array.isArray(params)) {
      for (const param of params) {
        this.use(param)
      }
    } else if (params.constructor.name === 'Route') {
      this.routeSetup(params)
    } else if (params.constructor.name === 'Router') {
      this.routeSetup(params.routes())
    } else {
      this.app.use(params)
    }
  }

  listen(port: number, callback: Function): void {
    this.app.listen(port, () => {
      callback()
    })
  }

  routeSetup(routes: Route[] | Route | undefined) {
    if (!routes) {
      return
    }

    if (!Array.isArray(routes)) {
      this.app[routes.method](
        routes.url,
        ExpressRouterAdapter.adapt(routes.controller),
      )
    } else {
      for (const route of routes) {
        this.app[route.method](
          route.url,
          ExpressRouterAdapter.adapt(route.controller),
        )
      }
    }
  }
}
