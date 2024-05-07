import { NextFunction, Request, Response } from 'express'

export function idChecker(req: Request, res: Response, next: NextFunction): void { 
  const { id } = req.params;
  
  const newId = +id;

  if (newId > 0) next()
  else res.status(400).json({status: 'error', message: 'Id not valid!'})
}

// module.exports = idChecker