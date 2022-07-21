import dica from "../database/db.js"

const dicaController = (app) => {
    app.post('/create', (req, res) => { //salva a dica
        res.json({ "Dicas": dica.push(dica) })
    })

    app.get('/tips', (req, res) => { //devolve a dica
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

