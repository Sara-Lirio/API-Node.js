import dica from "../database/db.js"
import Dicas from "../model/model.js"
import dicaAleatoria from "../database/dicasAleatorias.js"

const dicaController = (app) => {
    app.post('/create', (req, res) => { //cria e salva a dica
        const body = req.body
        try {
            const dicas = new Dicas(body.dica)
            dicas.insereDicas(dicas) 
            res.json({ "msg":"Dica adicionada com sucesso","Dicas": dicas,"erro":false }
            )
        } catch(error){
            res.json(
                {
                    "msg":error.message,
                    "erro":true
                }
            )
        }})
    

    app.get('/tips', (req, res) => { //devolve a dica
        const dicas = dicaAleatoria[parseInt(Math.random() * dicaAleatoria.length)]
        res.json({ "msg": "Dica aleatória", "Dica": dicas, "erro": false }
        )

    })
}

export default dicaController

