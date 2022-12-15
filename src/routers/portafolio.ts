import {Router} from 'express'
import { getEntries } from '../services/curricuServices'

const router = Router()

router.get('/1', (_req, res) => {
  
  res.send(getEntries())
})

router.post('/', (_req, res) => {
    res.send('Porta')
})


export default router