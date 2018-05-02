# Test Driven Development
1. Pensar en pruebas que garanticen la funcionalidad
2. Escribir el código mínimo necesario para que dicha funcionalidad se cumpla
3. Refactor

# Ventajas
1. Garantizar el mantenimiento del código
[5 SOLID javascript Developer](https://thefullstack.xyz/solid-javascript/)
    S - Single responsibility principle
    O - Open closed principle
    L - Liskov substitution principle
    I - Interface segregation principle
    D - Dependency Inversion principle
### No pruebas acopladas
```javascript
test('sum', () => {
    let a = 'c';
    let b = 'c';
    expect();
});
```
### librería para pruebas unitarias
**[Jest](https://facebook.github.io/jest/)**

### Objetos simulados
- **dummy:** Código harcodeado, son datos assertions y parámetros.
```javascript
    const dummy = {
        error: 'FATAL',
        message: 'Something is wrong ! :( 💩'
    };
```
- **mocks:** Instancias con características de pruebas 
```javascript
const db = require('moongose');
const mock = sinon.mock(db);
    const mock = {
    };
```
- **spies:** Llamadas a las funciones
```javascript
const spy = sinon.spy(db, 'short'); 
spy.called();
```
- **stubs:** Manejo de las funciones
```javascript
const spy = sinon.stub(db, 'short').callsFake(() => {
    return 5;
}); 
```

### Consejos
- Exportar todas las funciones
- por cada  `lib/index.js` tener `index.test.js`
- crear carpeta dummy
- mock, stub and spy use `dirStub.restore()` in object, in case of mock use `mock.verify()`