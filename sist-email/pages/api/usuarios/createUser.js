const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const usuario = await prisma.usuario.create({
  data: {
    usuario: '',
    nome: '',
    senha: ''
  }
})
