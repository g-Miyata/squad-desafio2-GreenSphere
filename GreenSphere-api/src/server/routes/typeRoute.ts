import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  try {
    const types = await prisma.type.findMany();
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: "Erro ao encontrar os tipos de plantas" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { typeName } = req.body;
    const type = await prisma.type.create({
      data: {
        typeName,
      },
    });
    res.status(201).json(type);
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar o tipo de planta" });
  }
});

export default router;