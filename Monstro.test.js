describe("Monstro", () => {

    it("Ao Iniciar um monstro ele deve ter hp = 1000 * seu level", () => {
        let monstro = new Monstro(6, "Rathian");
        expect(monstro.hp).toBe(6 * 1000);
    });

    it("A taxa de defesa de um monstro deve ser igual a seu level * 2", () =>{
        let monstro = new Monstro(18, "Kushala Daora");
        expect(monstro.taxaDeDefesa).toBe(18 * 2);
    });

    it("Ao receber um golpe, será deduzido do hp do monstro o valor do ataque subtraido da porcentagem da sua taxa de defesa", () => {

        let monstro = new Monstro(2, "Kulu-Ya-Ku");
        let jogador = new Jogador(18, "Saiyt");
        
        let hpInicialMonstro = 2 * 1000; //2000
        let jogadorDano = jogador.dano; // 18 * 12 = 216
        let taxaDeDefesa = monstro.taxaDeDefesa; // 2 * 2 = 4;
        let danoMonstro = (jogadorDano * ((100 - taxaDeDefesa)/100)).toFixed(2); //216 * 0.96 = 207.36
        
        expect(monstro.hp).toBe(hpInicialMonstro);
        jogador.atacar(monstro);
        expect(monstro.hp).toBe(hpInicialMonstro - danoMonstro);

        
        
    });
});