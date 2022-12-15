import express, { Request, Response } from "express"
import cors from "cors"
import router from './routers/portafolio'
const app = express();

app.use(cors())
app.use(express.json())

const PORT = 3000;

/* app.get("/portfolio", (_req:Request, res:Response) => {
    console.log('hola'),
    res.send('return the whole content of the portfolio');
}) */

app.use('/portfolio' ,router)

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})