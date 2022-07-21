import dica from "../database/db.js"

class Dicas {
    constructor(dicas){
        this.dicas=dicas
    }

    insereDicas = (dicas) => {
        dica.dicas.push(dicas)
    }
}

export default Dicas