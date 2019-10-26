import { Jugador } from './clases';



describe('Prueba de clases', () => {

    const jugador = new Jugador();

    beforeEach(() => {
        jugador.hp = 100;
    });

    it('Debe regresar 80 si el jugador recibe 20 de daño', () => {
        // const jugador = new Jugador();
        const res = jugador.recibeDanio(20);
        expect(res).toBe(80);
    });

    it('Debe regresar 50 si el jugador recibe 50 de daño', () => {
        // const jugador = new Jugador();
        const res = jugador.recibeDanio(50);
        expect(res).toBe(50);
    });

    it('Debe regresar 0 si el jugador recibe 100 de daño', () => {
        // const jugador = new Jugador();
        const res = jugador.recibeDanio(100);
        expect(res).toBe(0);
    });


});
