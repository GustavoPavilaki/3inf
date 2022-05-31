const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res){
    const usuario = await prisma.usuario.findMany();

    res.json(usuario)
}