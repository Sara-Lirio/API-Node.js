import dica from "../database/db.js"

const dicaController = (app) => {
    app.post('/create', (req, res) => { //salva a dica
        res.json({ "Dica": dica.push(), "erro": false })
    })

    app.get('/tips', (req, res) => { //devolve a dica
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

