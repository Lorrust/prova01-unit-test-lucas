# Guia Rápido de Testes Unitários com Jest

## 2. Estrutura básica de testes no Jest

```js
describe("Nome da classe ou módulo", () => {
  let objeto;

  beforeEach(() => {
    objeto = new MinhaClasse();
  });

  test("deve fazer algo", () => {
    expect(objeto.minhaFuncao()).toBe("resultado esperado");
  });
});
```

- **`describe`**: agrupa testes relacionados.\
- **`beforeEach`**: roda antes de cada teste (bom para resetar
  estado).\
- **`test` ou `it`**: define um caso de teste.\
- **`expect`**: faz a asserção (validação do resultado).

---

## 3. Matchers principais (`expect`)

### Igualdade

```js
expect(2 + 2).toBe(4);
expect({ a: 1 }).toEqual({ a: 1 });
```

### Comparação numérica

```js
expect(10).toBeGreaterThan(5);
expect(5).toBeLessThanOrEqual(5);
expect(3.1415).toBeCloseTo(3.14, 2);
```

### Arrays

```js
expect([1, 2, 3]).toContain(2);
expect([{ x: 1 }]).toContainEqual({ x: 1 });
```

### Strings

```js
expect("javascript").toMatch(/script/);
```

### Nulos e booleanos

```js
expect(null).toBeNull();
expect(undefined).toBeUndefined();
expect(true).toBeTruthy();
expect("").toBeFalsy();
```

### Exceções

```js
function erro() {
  throw new Error("Falhou");
}
expect(() => erro()).toThrow("Falhou");
```

## Testes assíncronos

```js
test("deve resolver uma promessa", async () => {
  const data = await Promise.resolve("ok");
  expect(data).toBe("ok");
});
```

## 5. Mocks

```js
const service = {
  enviarEmail: jest.fn(),
};

service.enviarEmail("teste@dominio.com");

expect(service.enviarEmail).toHaveBeenCalled();
expect(service.enviarEmail).toHaveBeenCalledWith("teste@dominio.com");
```

- **`jest.fn()`** cria uma função fake.
- **`mockReturnValue`** ou **`mockResolvedValue`** definem retornos.

```js
const mockApi = { get: jest.fn().mockResolvedValue({ data: 123 }) };
```

---

## AAA Pattern (Arrange, Act, Assert)

1.  **Arrange (preparar)** → criar objeto, mocks, estado inicial.\
2.  **Act (agir)** → executar o método.\
3.  **Assert (validar)** → verificar com `expect`.

```js
test("sacar valor válido", () => {
  // Arrange
  const banco = new Banco("Conta", 100);

  // Act
  banco.sacar(50);

  // Assert
  expect(banco.saldo).toBe(50);
});
```

## Checklist

- `toBe`, `toEqual`, `toContain`, `toContainEqual`\
- `toBeNull`, `toBeUndefined`, `toBeTruthy`, `toBeFalsy`\
- `toThrow`, `rejects.toThrow`\
- `toBeGreaterThan`, `toBeCloseTo`\
- `jest.fn()`, `toHaveBeenCalled`, `toHaveBeenCalledWith`\
- `mockReturnValue`, `mockResolvedValue`
