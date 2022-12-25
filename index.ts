import express, {Request, Response, Errback} from "express";
import path from 'path'
import cors from 'cors';
import AppError from './utils/appError'
import router from './routes'

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: '10kb'}))
app.use('*', cors())

app.use(express.static(path.join(__dirname, 'public')))

// View

// API
app.use('/api/v1/', router);

app.use((err: AppError, req : Request, res: Response)=>{
    // Small error handler
    const statusCode = err.statusCode || 500;
    const status = err.status
    const message = err.message
    const isOperational = err.isOperational;
    const stack = err.stack;
    if(req.originalUrl.startsWith('/api')){
        if(isOperational){
            return res.status(statusCode).json({
                status,
                message,
                stack
            })
        }
        return res.status(500).json({
            status: 'error',
            message: 'Please try again later!',
            stack
        })
    }
    res.sendFile(__dirname + '/public/index.html');
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})
