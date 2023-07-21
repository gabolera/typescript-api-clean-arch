import { HttpServer } from './core/interface/HttpServer'
import route from './routes/api.routes'


// Using Express
// npm install express
import { ExpressServerAdapter } from './core/adapters/http/express/ExpressServerAdapter'
import express from 'express';
const app: HttpServer = new ExpressServerAdapter(express)


// Using Koa
// npm install koa @koa/router koa-bodyparser
// import { KoaServerAdapter } from './http/koa/KoaServerAdapter'
// import koa from 'koa';
// import koaRouter from '@koa/router';
// import bodyParser from 'koa-bodyparser';
// const app: HttpServer = new KoaServerAdapter(koa, koaRouter)
// app.use(bodyParser())


// Set routes

app.use(route)

const port = 15151
app.listen(port, () => {
  console.log(`Rodando na porta ${port} :)`)
})
