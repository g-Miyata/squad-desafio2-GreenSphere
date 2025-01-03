import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const router = Router();
const prisma = new PrismaClient();

const PlantSchema = z.object({
  name: z.string().min(3),
  subtitle: z.string().min(3),
  price: z.number().positive(),
  isInSale: z.boolean(),
  discountPercentage: z.number().min(0).max(100),
  label: z.enum(['Indoor', 'Outdoor']),
  features: z.string().min(10),
  description: z.string().min(10),
  imgUrl: z.string(),
  type: z.number(),
});

type Plant = z.infer<typeof PlantSchema>;


router.post('/', async (req, res) => {
  try {
    const validatedData = PlantSchema.parse(req.body);

    const plant = await prisma.plant.create({
      data: {
        ...validatedData,
        type: {
          connect: {
            id: validatedData.type,
          },
        },
      },
    }); 

    res.status(201).json(plant);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: 'Dados inválidos', details: error.errors });
    } else {
      console.error('Erro ao criar a planta:', error); // Log do erro
      res.status(500).json({ error: 'Erro ao criar   a planta' });
    }
  }
});

export default router;
