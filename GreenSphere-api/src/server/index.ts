import express from "express";
import { PrismaClient } from '@prisma/client'
import createPlant from "./routes/createPlant"
import getPlants from "./routes/getPlants"
import deletePlant from "./routes/deletePlant"

const app = express()
const PORT = 3000
const prisma = new PrismaClient();
app.use(express.json())

// app.get('/', (req, res) => {
//     res.json({ message: 'teste com typescript' })
// })  

app.use("/", getPlants)
app.use("/", createPlant)
app.use("/", deletePlant)

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})