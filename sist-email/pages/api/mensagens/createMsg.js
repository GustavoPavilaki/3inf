const user = await prisma.user.create({
    data: {
      id: '',
      remetente: '',
      destinatario:'',
      assunto:'',
      data:'',
      mensagem:'',
        }
  })