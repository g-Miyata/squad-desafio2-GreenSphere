import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router()
const prisma = new PrismaClient()

router.get("/", async (_: Request, res: Response) =>{
    try {
        const plants = await prisma.plant.findMany()
        const plantsWithLabels = plants.map((plant) => {
        const labels = plant.label.split(',').map((label) => label.trim())
        return { ...plant, label: labels }
    })
    res.status(200).json(plantsWithLabels)
    } catch (error) {
        res.status(500).json({error: "Erro ao encontrar planta"})
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