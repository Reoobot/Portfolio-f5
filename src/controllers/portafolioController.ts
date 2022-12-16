import {Router} from 'express'
import { addProject, getPortfolios, getProjects } from '../model/curriculumModel'

const router = Router()

router.get('/portfolio', (_req, res) => {
  
  res.send(getPortfolios())
})

router.get('/portfolio/project', (_req, res) => {
  
  res.send(getProjects())
})

router.post('/portfolio/project', (_req, res) => {
  
  res.send(addProject(_req.body))
})

router.post('/', (_req, res) => {
    res.send('Porta')
})


export default router