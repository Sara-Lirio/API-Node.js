const dicaController = (app) => {
    app.get('/dica',(req,res) => {
        res.json("Rota da Dica")
    })

    app.post('/dica',(req,res) => {
        res.json('Rodando post')
    })
}

export default dicaController

