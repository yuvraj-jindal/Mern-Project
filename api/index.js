import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.route.js'
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const app = express()

app.use(express.json())
app.use(cookieParser())

app.listen(3000,() => {
        console.log('Server is running at port 3000!!')
    }
);

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Server error: '

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})