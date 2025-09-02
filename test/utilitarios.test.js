const Utilitarios = require("../src/utilitarios");

describe("Testes da classe Utilitários - Avaliação 01", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios();
  });

  test("Deve inverter os caracteres de uma string", () => {
    let stringInvertida = utilitarios.inverterString("invertido");
    expect(stringInvertida).toBe("oditrevni");
  });

  test("Deve contar os caracteres de uma string corretamente", () => {
    let string = "contagem de caracteres";
    expect(utilitarios.contarCaracteres(string)).toBe(22);
  });

  test("Deve converter os caracteres de uma string para maiúsculo", () => {
    let stringMaiusculas = utilitarios.paraMaiusculas("maiusculas");
    expect(stringMaiusculas).toBe("MAIUSCULAS");
  });

  test("Deve converter os caracteres de uma string para minúsculo", () => {
    let stringMinusculas = utilitarios.paraMinusculas("MINUSCULAS");
    expect(stringMinusculas).toBe("minusculas");
  });

  test("Deve converter o primeiro caractere da string para maiúsculo", () => {
    let primeiraLetraMaiuscula =
      utilitarios.primeiraLetraMaiuscula("primeiraLetra");
    expect(primeiraLetraMaiuscula).toBe("PrimeiraLetra");
  });

  test("Deve somar dois números válidos", () => {
    let soma = utilitarios.somar(5, 3);
    expect(soma).toBe(8);
  });

  test("Deve subtrair dois números válidos", () => {
    let subtracao = utilitarios.subtrair(10, 4);
    expect(subtracao).toBe(6);
  });

  test("Deve multiplicar dois números válidos", () => {
    let multiplicacao = utilitarios.multiplicar(6, 7);
    expect(multiplicacao).toBe(42);
  });

  test("Deve dividir dois números válidos", () => {
    let divisao = utilitarios.dividir(15, 3);
    expect(divisao).toBe(5);
  });

  test("Deve lançar erro ao tentar dividir por zero", () => {
    let divisaoPorZero = () => utilitarios.dividir(10, 0);
    expect(divisaoPorZero).toThrow("Divisão por zero");
  });

  test("Deve retornar true para números pares", () => {
    let numeroPar = utilitarios.ehPar(8);
    expect(numeroPar).toBe(true);
  });

  test("Deve retornar false para números ímpares", () => {
    let numeroImpar = utilitarios.ehPar(7);
    expect(numeroImpar).toBe(false);
  });

  test("Deve retornar o primeiro elemento de um array", () => {
    let primeiroElemento = utilitarios.primeiroElemento([
      "banana",
      "abacaxi",
      "uva",
      "laranja",
    ]);
    expect(primeiroElemento).toBe("banana");
  });
  test("Deve retornar o último elemento de um array", () => {
    let ultimoElemento = utilitarios.ultimoElemento([
      "banana",
      "abacaxi",
      "uva",
      "laranja",
    ]);
    expect(ultimoElemento).toBe("laranja");
  });
  test("Deve retornar o tamanho de um array quando quantidade for maior que zero", () => {
    let tamanhoArray = utilitarios.tamanhoArray([
      "banana",
      "abacaxi",
      "uva",
      "laranja",
    ]);
    expect(tamanhoArray).toBe(4);
  });

  test("Deve retornar tamanho zero quando um array for vazio", () => {
    let tamanhoArrayVazio = utilitarios.tamanhoArray([]);
    expect(tamanhoArrayVazio).toBe(0);
  });

  test("Deve ordenar os elementos de um array", () => {
    let arrayOrdenado = utilitarios.ordenarArray([
      "banana",
      "abacaxi",
      "uva",
      "laranja",
    ]);
    expect(arrayOrdenado).toEqual(["abacaxi", "banana", "laranja", "uva"]);
  });

  test("Deve inverter os elementos de um array", () => {
    let arrayInvertido = utilitarios.inverterArray([
      "banana",
      "abacaxi",
      "uva",
      "laranja",
    ]);
    expect(arrayInvertido).toEqual(["laranja", "uva", "abacaxi", "banana"]);
  });

  test("Deve retornar um número aleatório", () => {
    let numeroAleatorio = utilitarios.gerarNumeroAleatorio();

    expect(typeof numeroAleatorio).toBe("number");
    expect(numeroAleatorio).toBeGreaterThanOrEqual(0);
    expect(numeroAleatorio).toBeLessThanOrEqual(100);
  });

  test("Deve verificar se o valor é um número", () => {
    expect(utilitarios.ehNumero(10)).toBe(true);
    expect(utilitarios.ehNumero(3.14)).toBe(true);
    expect(utilitarios.ehNumero("texto")).toBe(false);
    expect(utilitarios.ehNumero(null)).toBe(false);
    expect(utilitarios.ehNumero(undefined)).toBe(false);
  });

  test("Deve remover espaços externos de uma string", () => {
    let stringComEspacos = utilitarios.removerEspacos(
      "   texto com espaços   "
    );
    expect(stringComEspacos).toBe("texto com espaços");
  });

  test("Deve repetir uma string um número válido de vezes", () => {
    let textoRepetido = utilitarios.repetirTexto("repetir ", 3);
    expect(textoRepetido).toBe("repetir repetir repetir ");
  });

  test("Deve retornar string vazia ao repetir uma string zero vezes", () => {
    let textoRepetidoZeroVezes = utilitarios.repetirTexto("repetir ", 0);
    expect(textoRepetidoZeroVezes).toBe("");
  });

  test("Deve lançar erro de intervalo ao repetir uma string por um número inválido", () => {
    let textoRepetidoZeroVezes = () => utilitarios.repetirTexto("repetir ", -3);
    expect(textoRepetidoZeroVezes).toThrow(RangeError);
  });

  test("Deve juntar os elementos de um array em uma string com separador", () => {
    let arrayJunto = utilitarios.juntarArray([
      "banana",
      "abacaxi",
      "uva",
      "laranja",
    ]);
    expect(arrayJunto).toBe("banana,abacaxi,uva,laranja");
  });

  test("Deve retornar o número de palavras em uma string", () => {
    let numeroDePalavras = utilitarios.contarPalavras(
      "Contar o número de palavras nesta string"
    );
    expect(numeroDePalavras).toBe(7);
  });

  test("Deve retornar a média de um array de números", () => {
    let media = utilitarios.mediaArray([10, 20, 30, 40]);
    expect(media).toBe(25);
  });

  test("Deve retornar zero ao calcular a média de um array vazio", () => {
    let mediaArrayVazio = utilitarios.mediaArray([]);
    expect(mediaArrayVazio).toBe(0);
  });

  test("Deve remover elementos duplicados de um array", () => {
    let arraySemDuplicados = utilitarios.removerDuplicados([
      "banana",
      "abacaxi",
      "uva",
      "laranja",
      "banana",
      "uva",
    ]);

    expect(arraySemDuplicados).toEqual(["banana", "abacaxi", "uva", "laranja"]);
  });

  test("Deve manter array inalterado se não houver duplicados", () => {
    let arraySemDuplicados = utilitarios.removerDuplicados([
      "banana",
      "abacaxi",
      "uva",
      "laranja",
    ]);

    expect(arraySemDuplicados).toEqual(["banana", "abacaxi", "uva", "laranja"]);
  });

  test("Deve retornar true para strings que são palíndromos", () => {
    let palindromo = utilitarios.ehPalindromo("arara");
    expect(palindromo).toBe(true);
  });

  test("Deve retornar false para strings que não são palíndromos", () => {
    let naoPalindromo = utilitarios.ehPalindromo("banana");
    expect(naoPalindromo).toBe(false);
  });

  test("Deve retornar dois objetos corretamente", () => {
    let obj1 = { a: 1, b: 2 };
    let obj2 = { b: 3, c: 4 };

    let objetoMesclado = utilitarios.mesclarObjetos(obj1, obj2);

    expect(objetoMesclado).toEqual({ a: 1, b: 3, c: 4 });
  });

  test("Deve retornar um objeto igual ao primeiro se o segundo for vazio", () => {
    let obj1 = { laranja: 1, uva: 2 };
    let obj2 = {};

    let objetoMesclado = utilitarios.mesclarObjetos(obj1, obj2);

    expect(objetoMesclado).toEqual({ laranja: 1, uva: 2 });
  });
});
