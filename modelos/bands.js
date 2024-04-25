
class Bandas {

        constructor (){

              this.bandas = [];
        }

        addBanda(banda = new Banda()){

                this.bandas.push(banda);
        }

        getBandas(){
            return this.bandas;
        }

        borrarBanda(id = ''){
             this.bandas = this.bandas.filter(banda => banda.id !== id);
             return this.bandas;
        }

        votoAbanda(id = ''){
                this.bandas = this.bandas.map(banda =>{
                    if (banda.id === id){
                        banda.votos++;
                        return banda;

                    }
                    else {
                        return banda;
                    }
                })

        }

}

module.exports = Bandas;