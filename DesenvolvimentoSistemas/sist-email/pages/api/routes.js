const Router = require("express") 
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const router = Router();

router.post("/usuario", async (req, res) => {
    const { usuario, nome, senha } = req.body

    const user = await prisma.usuario.create({
        data: {
            usuario,
            nome,
            senha
        }
    })

    return res.json(user)

})

module.exports = router