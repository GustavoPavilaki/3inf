const deleteUser = await prisma.user.delete({
    where: {
      usuario: '',
      nome:'',
      senha:'',
    }
  })