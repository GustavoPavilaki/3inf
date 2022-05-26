const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const deleteusuario = await prisma.usuario.delete({
    where: {
      usuario: '',
      nome:'',
      senha:'',
    }
  })