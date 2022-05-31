const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const mensagem = await prisma.mensagem.create({
    data: {
      id: '',
      remetente: '',
      destinatario:'',
      assunto:'',
      data:'',
      mensagem:'',
        }
  })