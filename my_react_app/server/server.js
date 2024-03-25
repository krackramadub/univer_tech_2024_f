import express from 'express' ;
import testRouter from './routers/testRouter/testRouter.js'
import postRouter from './routers/postRouter/postRouter.js'
import authRouter from './routers/authRouter/authRouter.js'

const app = express()

const PORT = 3555

app.use(express.json())



app.use('/test/',  testRouter)
app.use('/posts/',  postRouter)
app.use('/auth/',  authRouter)


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})