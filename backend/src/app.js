import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import devsRoutes from './app/routes/devs.routes'

import databaseConfig from './config/database'

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV === 'development'
    this.database()
    this.middlewares()
    this.routes()
  }

  database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  routes () {
    this.express.use(devsRoutes)
  }
}

export default new App().express
