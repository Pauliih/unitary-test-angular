import { mensaje } from './string';

describe('Pruebas de Strings', () => {

    it('Debe regresar un string', () => {
        const res = mensaje('Paula');

        expect( typeof(res)).toBe('string');
    });

    it('Debe contener el nombre enviado en el saludo', () => {
        const nombre = 'Juan';
        const res = mensaje(nombre);

        expect(res).toContain(nombre);
    });

});

