const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const deleteMensagem = await prisma.mensagem.delete({
    where: {
        id: '',
        remetente: '',
        destinatario: '',
        assunto: '',
        data: '',
        mensagem: '',
    }
})