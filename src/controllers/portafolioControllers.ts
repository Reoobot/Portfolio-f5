import {Router} from 'express'
import { getPortfolios, getProjects } from '../model/curriculumModel'

const router = Router()

router.get('/portfolio', (request, response) => {
  response.send(getPortfolios())
})

router.get('/portfolio/project', (request, response) => {
  response.send(getProjects())
})

// router.post('/portfolio/project', (request, response) => {
//   response.send(addProject(request.body))
// })

// router.get('/portfolio/project/:id', (request, response) => {
//     response.send('Porta')
// })

// router.put('/portfolio/project/:id', (request, response) => {
// })

// router.delete('/portfolio/project/:id', (request, response) => {

// })


export default router