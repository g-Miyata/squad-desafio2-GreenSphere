import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const router = Router()
const prisma = new PrismaClient()

router.post("/", async (req: Request, res: Response) =>{
    try {
        const plant = await prisma.plant.create({data: req.body})
        res.status(200).json(plant)
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar a planta"})
    }
})

export default router