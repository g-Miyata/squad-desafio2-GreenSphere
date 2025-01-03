import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router()
const prisma = new PrismaClient()

router.get("/types", async (req: Request, res: Response) =>{
    try {
        const types = await prisma.type.findMany()
        res.status(200).json(types)
    } catch (error) {
        res.status(500).json({ error: "Erro ao encontrar os Types"})
    }
})

export default router