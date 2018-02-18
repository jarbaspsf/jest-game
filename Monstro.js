class Monstro{

    constructor(level, nome){
        this.level = level;
        this.nome = nome;
        this.hp = this.level * 1000;
    }

    get taxaDeDefesa(){
        return this.level * 2;
    }

    calcularDano(dano){
        let danoReal = (dano * ((100 - this.taxaDeDefesa)/100)).toFixed(2);
        this.reduzirHp(danoReal);
    }

    reduzirHp(dano){
        this.hp -= dano;
    }
}

export default Monstro