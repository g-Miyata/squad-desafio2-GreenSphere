import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router()
const prisma = new PrismaClient()

router.get("/", async (req: Request, res: Response) =>{
    try {
        const plants = await prisma.plant.findMany()
        res.status(200).json(plants)
    } catch (error) {
        res.status(500).json({error: "Erro ao criar a planta"})
    }
})

router.get("/:id", async (req, res) => {
    try {
        const id = Number(req.params.id)
        const plantId = await prisma.plant.findUnique({where: {id}})
        res.status(200).json(plantId)    
    }
    catch{
        res.status(404).json({error: "Planta não encontrada"})
    }
})

export default router