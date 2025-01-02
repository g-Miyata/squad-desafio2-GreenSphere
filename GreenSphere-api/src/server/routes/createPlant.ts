import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const router = Router()
const prisma = new PrismaClient()



router.post("/", async (req, res) =>{
    try {

        const plant = await prisma.plant.create({data: req.body})
        console.log("Dados recebidos:", req.body)
        res.status(201).json(plant)
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar a planta"})
    }
})

export default router