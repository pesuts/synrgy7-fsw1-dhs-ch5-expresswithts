import express from 'express'
const router = express.Router()

import peopleRouter from './peopleRouter'

router.use('/people', peopleRouter)

export = router
// module.exports = router