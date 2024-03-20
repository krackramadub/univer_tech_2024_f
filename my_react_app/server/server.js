import express from 'express' ;
import testRouter from './routers/testRouter/testRouter.js'

const app = express()

const PORT = 3555

app.use(express.json())



app.use('/test/',  testRouter)


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})