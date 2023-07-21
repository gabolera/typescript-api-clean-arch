import { HttpServer } from './core/interface/HttpServer'
import { ExpressServerAdapter } from './http/express/ExpressServerAdapter'
import { KoaServerAdapter } from './http/koa/KoaServerAdapter'
import route from './routes/api.routes'

const app: HttpServer = new ExpressServerAdapter()
// const app: HttpServer = new KoaServerAdapter()

app.use(route)

const port = 15151
app.listen(port, () => {
  console.log(`Rodando na porta ${port} :)`)
})
