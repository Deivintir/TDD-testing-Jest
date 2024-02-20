const formatDate = require('../main');

describe('Comprobación del formateado de fecha', () => {
    it('Debería devolver la fecha en el formato correcto', () => {        
        const date = new Date(2024, 1, 20);
        const expectDateString = 'martes, 20/02/2024';
        expect(formatDate(date)).toBe(expectDateString);
    }),
    
    it('Debería devolver "Error en el formato de fecha"', () => {
        const invalidDate = new Date('invalid');
        const expectedWarning = "Invalid Date";
        expect(formatDate(invalidDate)).toBe(expectedWarning);
    })
})