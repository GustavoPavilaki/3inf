const deleteUser = await prisma.user.delete({
    where: {
        id: '',
        remetente: '',
        destinatario: '',
        assunto: '',
        data: '',
        mensagem: '',
    }
})