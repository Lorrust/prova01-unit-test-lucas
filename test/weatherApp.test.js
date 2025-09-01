const WeatherApp = require("../src/weatherApp");

describe("WeatherApp", () => {
  let mockApiClient;
  let app;

  beforeEach(() => {
    // Criando mock do cliente de API
    mockApiClient = {
      fetchWeather: jest.fn(),
    };
    app = new WeatherApp(mockApiClient);
  });

  test("Deve buscar clima chamando o API client", async () => {
    mockApiClient.fetchWeather.mockResolvedValue({
      temp: 25,
      condition: "Sunny",
    });

    const result = await app.getWeather("São Paulo");

    expect(mockApiClient.fetchWeather).toHaveBeenCalledWith("São Paulo");
    expect(result).toEqual({
      city: "São Paulo",
      temp: 25,
      condition: "Sunny",
      fromCache: false,
    });
  });

  test("Deve salvar resultado no cache e reutilizar", async () => {
    mockApiClient.fetchWeather.mockResolvedValue({
      temp: 30,
      condition: "Cloudy",
    });

    const firstCall = await app.getWeather("Rio");
    expect(firstCall.fromCache).toBe(false);

    const secondCall = await app.getWeather("Rio");
    expect(secondCall.fromCache).toBe(true);

    expect(mockApiClient.fetchWeather).toHaveBeenCalledTimes(1);
  });

  test("Deve lançar erro se API retornar dados inválidos", async () => {
    mockApiClient.fetchWeather.mockResolvedValue({ condition: "Rainy" });

    await expect(app.getWeather("Lisboa")).rejects.toThrow(
      "Dados inválidos da API"
    );
  });

  test("Deve limpar o cache corretamente", async () => {
    mockApiClient.fetchWeather.mockResolvedValue({
      temp: 15,
      condition: "Cold",
    });
    await app.getWeather("Porto");

    expect(app.getCachedCities()).toContain("Porto");

    app.clearCache();

    expect(app.getCachedCities()).toEqual([]);
  });
});
