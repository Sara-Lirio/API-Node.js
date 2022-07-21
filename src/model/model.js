import dica from "../database/db.js"

let id = 1
class Dicas {
    constructor(d) {
        this.id = id++
        this.d = d
    }

    insereDicas = (dicas) => {
        dica.dica.push(dicas)
    }

}

export default Dicas