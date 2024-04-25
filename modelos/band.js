const {v4: uuidV4} = require('uuid');



class Banda {

    constructor(name = 'no-name'){  
        this.id =uuidV4();  /// genera identeficador único
        this.name = name;
        this.votos =0;

    }
}

module.exports = Banda;