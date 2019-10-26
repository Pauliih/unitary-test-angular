import { incrementar } from './numeros';

describe('Pruebas de números', () => {

    it('Debe regresar un número', () => {
        const res = incrementar(200);

        expect( typeof(res)).toBe('number');
    });

    it('Debe regresar 100 si el n° ingresado es mayor a 100', () => {
        const res = incrementar(200);

        expect( res).toBe(100);
    });

    it('Debe regresar n° + 1', () => {
        const num = 85;
        const res = incrementar(num);

        expect(res).toBe(num + 1);
    });

});
