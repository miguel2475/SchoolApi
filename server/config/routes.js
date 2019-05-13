import express from 'express'
import * as UserController from '../controllers/user.js'

let routes = express.Router()

routes.get('/user', UserController.get )

export default routes