import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod"


const router = Router()
const prisma = new PrismaClient()

const createPlantSchema = z.object({
    name: z.string().min(3, "O nome da planta deve ter pelo menos 3 letas"),
    subtitle: z.string().min(3, "O subtitulo deve ter pelo menos 3 letras"),
    price: z.number().positive("O preço deve ser um número positivo."),
    isInSale: z.boolean(),
    discountPercentage: z.number().min(0).max(100, "O desconto deve estar entre 0 e 100."),
    label: z.string().min(3, "Os tipos da planta deve ter pelo menos 3 letras"),
    features: z.string().min(10, "As características devem ter pelo menos 10 caracteres."),
    description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres.")
})


router.post("/", async (req, res) =>{
    try {
        const validatedData = createPlantSchema.parse(req.body)
        const plant = await prisma.plant.create({ data: validatedData})
        res.status(201).json(plant)
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: "Dados inválidos", detailes: error.errors })
        } else {
            res.status(500).json({ error: "Erro ao criar a planta" })
        }
    }
})

export default router