import express from 'express'
import Jsons from '../models/jsons'

const router = express.Router()

router.get('/get', async (req, res, next)=>{
    try {
        const jsons = await Jsons.find().limit(100)
        res.status(200).json({
            status : 'success',
            data: jsons
        })
    } catch (error) {
        next(error)
    }
})

export default router;