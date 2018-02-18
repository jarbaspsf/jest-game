import Jogador from "./Jogador"

describe("Jogador", () => {

    it("Ao Iniciar um jogador o mesmo deve ter HP = 100 * lvl", ()=> {
        let jogador = new Jogador(3, "Petro");
        expect(jogador.hp).toBe(3 * 100);
    });

    it("Ao atacar o dano causado por um jogador deve ser igual a 12 * lvl", () => {
        let jogador = new Jogador(6, "Saiyt");
        expect(jogador.dano).toBe(6 * 12);
    });
});