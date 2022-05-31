const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res){
    const mensagem = await prisma.mensagem.findMany();

    res.json(mensagem)
}