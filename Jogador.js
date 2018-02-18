class Jogador{

    constructor(level, nome){
        this.level = level;
        this.nome = nome;
        this.hp = level * 100;
    }

    atacar(){
        return this.level * 12;
    }

}

export default Jogador