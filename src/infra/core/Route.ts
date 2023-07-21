import { Controller } from '../../presentation/controller/Controller'

export class Route {
  private _method: RouteMethod
  private _url: string
  private _controller: Controller

  constructor(method: RouteMethod, url: string, controller: Controller) {
    this._method = method
    this._url = url
    this._controller = controller
  }

  public get method(): RouteMethod {
    return this._method
  }

  public get url(): string {
    return this._url
  }

  public get controller(): Controller {
    return this._controller
  }
}

interface RouterInterface {
  get(url: string, controller: Controller): void
  post(url: string, controller: Controller): void
  patch(url: string, controller: Controller): void
  put(url: string, controller: Controller): void
  options(url: string, controller: Controller): void
  all(url: string, controller: Controller): void
}

export class Router implements RouterInterface {
  private _routes: Route[] = []

  get(url: string, controller: Controller): void {
    this._routes.push(new Route('get', url, controller))
  }

  post(url: string, controller: Controller): void {
    this._routes.push(new Route('post', url, controller))
  }

  put(url: string, controller: Controller): void {
    this._routes.push(new Route('put', url, controller))
  }

  delete(url: string, controller: Controller): void {
    this._routes.push(new Route('delete', url, controller))
  }

  patch(url: string, controller: Controller): void {
    this._routes.push(new Route('patch', url, controller))
  }

  options(url: string, controller: Controller): void {
    this._routes.push(new Route('options', url, controller))
  }

  all(url: string, controller: Controller): void {
    this._routes.push(new Route('all', url, controller))
  }

  routes() {
    return this._routes
  }
}

export type RouteMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'options'
  | 'all'
