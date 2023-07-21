import knex from 'knex'

export const KnexDriver = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'meuclubinho',
  },
})
