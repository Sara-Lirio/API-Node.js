import dica from "../database/db.js"

const dicaController = (app) => {
    app.get('/dica', (req, res) => {
        res.json({ "Dica": dica, "erro": false })
    })

    app.post('/dica', (req, res) => {
        const body = req.body
        try {
            res.json({ "msg": "Dica aleatória", "Dica": dica[parseInt(Math.random()*dica.length)], "erro": false }
            )
        } catch (error) {
            res.json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    })
}

export default dicaController

