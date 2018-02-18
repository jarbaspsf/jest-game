class Jogador{

    constructor(level, nome){
        this.level = level;
        this.nome = nome;
        this.hp = level * 100;
    }

    get dano(){
        return this.level * 12;
    }

    atacar(monstro){
       mostro.calcularDano(this.dano)
    }

}

export default Jogador