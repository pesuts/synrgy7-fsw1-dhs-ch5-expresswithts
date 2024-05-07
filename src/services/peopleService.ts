// const data = require('../data/people')
import data from '../data/people'
import { Request, Response } from 'express'

export function getPeople(req: Request, res: Response): void { 
  res.json({message: 'success', data: data})
}

export function getPeopleById(req: Request, res: Response): void { 
  const { id } = req.params

  if (data.find((row) => row.id === +id) === undefined) { 
    res.status(404).json({ status: 'error', message: 'Id not found!' })
  }

  res.json({message: 'success', data: data.find((row) => row.id === +id)})
}

export function addPeople(req: Request, res: Response): void { 
  const newData = req.body
  data.push(newData)

  res.json({ message: 'Data added successfully', data: data })
}

export function updatePeopleById(req: Request, res: Response): void { 
  const { id } = req.params;
  const newData = req.body
  
  if (data.find((row) => row.id === +id) === undefined) { 
    res.status(404).json({ status: 'error', message: 'Id not found!' })
  }

  for (let i in data) { 
    if (data[i].id === +id) { 
      data[+i] = newData
    }
  }

  res.status(200).json({status: 'error', message: 'Data updated', data: data})
}

export function deletePeopleById(req: Request, res: Response): void { 
  const { id } = req.params;
  
  if (data.find((row) => row.id === +id) === undefined) { 
    res.status(404).json({ status: 'error', message: 'Id not found!' })
  }

  for (let i in data) { 
    if (data[i].id === +id) { 
      data.splice(+i, 1)
    }
  }

  res.status(200).json({status: 'error', message: 'Data deleted', data: data})
}

// exports = {
//   getPeople,
//   getPeopleById,
//   addPeople,
//   deletePeopleById
// }