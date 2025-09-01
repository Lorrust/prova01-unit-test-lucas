const Library = require("../src/library");

describe("Library", () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  test("Deve adicionar um livro corretamente", () => {
    library.addBook({ title: "Clean Code", author: "Robert C. Martin" });
    expect(library.getTotalBooks()).toBe(1);
  });

  test("Deve lançar erro ao adicionar livro inválido", () => {
    expect(() => library.addBook({})).toThrow("Livro inválido");
  });

  test("Deve lançar erro ao adicionar livro duplicado", () => {
    library.addBook({ title: "Clean Code", author: "Robert C. Martin" });
    expect(() =>
      library.addBook({ title: "Clean Code", author: "Robert C. Martin" })
    ).toThrow("Livro já cadastrado");
  });

  test("Deve remover um livro corretamente", () => {
    library.addBook({ title: "Refactoring", author: "Martin Fowler" });
    library.removeBook("Refactoring");
    expect(library.getTotalBooks()).toBe(0);
  });

  test("Deve lançar erro ao tentar remover livro inexistente", () => {
    expect(() => library.removeBook("Não existe")).toThrow(
      "Livro não encontrado"
    );
  });

  test("Deve encontrar um livro pelo título", () => {
    library.addBook({ title: "Domain-Driven Design", author: "Eric Evans" });
    const book = library.findBook("Domain-Driven Design");
    expect(book).toEqual({
      title: "Domain-Driven Design",
      author: "Eric Evans",
    });
  });

  test("Deve retornar null ao não encontrar livro", () => {
    expect(library.findBook("Não existe")).toBeNull();
  });

  test("Deve retornar todos os livros de um autor", () => {
    library.addBook({ title: "Book1", author: "AutorX" });
    library.addBook({ title: "Book2", author: "AutorX" });
    library.addBook({ title: "Book3", author: "AutorY" });

    const books = library.getBooksByAuthor("AutorX");
    expect(books).toHaveLength(2);
  });

  test("Deve limpar toda a biblioteca", () => {
    library.addBook({ title: "Livro A", author: "Autor A" });
    library.addBook({ title: "Livro B", author: "Autor B" });
    library.clearLibrary();
    expect(library.getTotalBooks()).toBe(0);
  });
});
