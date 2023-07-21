import { Controller } from '../../../presentation/controller/Controller'
import { HttpServer } from '../../core/interface/HttpServer'
import { Route, RouteMethod } from '../../core/Route'
import koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { KoaRouterAdapter } from './KoaRouterAdapter'
import koaRouter from '@koa/router'

export class KoaServerAdapter implements HttpServer {
  private _app: koa
  private _router: koaRouter

  constructor() {
    this._app = new koa()
    this._router = new koaRouter()
    this._app.use(bodyParser())
  }

  on(method: RouteMethod, url: string, controller: Controller): void {
    this.routeSetup(new Route(method, url, controller))
  }

  use(params: any): void {
    if (Array.isArray(params)) {
      for (const param of params) {
        this.use(param)
      }
    } else if (params.constructor.name === 'Route') {
      this.routeSetup(params)
    } else if (params.constructor.name === 'Router') {
      this.routeSetup(params.routes())
    } else {
      this._app.use(params)
    }
  }

  listen(port: number, callback: () => void): void {
    this._app.use(this._router.routes())
    this._app.listen(port)
    callback()
  }

  routeSetup(routes: Route[] | Route | undefined) {
    if (!routes) {
      return
    }

    if (!Array.isArray(routes)) {
      this._router[routes.method](
        routes.url,
        KoaRouterAdapter.adapt(routes.controller),
      )
    } else {
      for (const route of routes) {
        this._router[route.method](
          route.url,
          KoaRouterAdapter.adapt(route.controller),
        )
      }
    }
  }
}
