import express from 'express'
const router = express.Router()

import { idChecker } from '../middleware/idChecker'
// import idChecker from '../middleware/idChecker'
import { getPeople, getPeopleById, addPeople, deletePeopleById, updatePeopleById } from '../services/peopleService'

router.get('/', getPeople)
router.get('/:id', idChecker, getPeopleById)
router.post('/', addPeople)
router.put('/:id', idChecker, updatePeopleById)
router.delete('/:id', idChecker, deletePeopleById)

export = router