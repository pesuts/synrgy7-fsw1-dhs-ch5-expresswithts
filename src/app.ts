import express from 'express'

import router from './routes/index'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(router)

// app.get('/', (req: Request, res: Response) => {
//   res.json({ message: 'Success' })
// })

// app.get('/:id', (req: Request, res: Response) => { 
//   const id = req.params.id

//   res.json({message: 'Success', id})
// })

app.listen(8000, () => console.log('Server is running...'))