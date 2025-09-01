class WeatherApp {
  constructor(apiClient) {
    this.apiClient = apiClient; // dependência injetada (mockável)
    this.cache = {};
  }

  async getWeather(city) {
    if (this.cache[city]) {
      return { ...this.cache[city], fromCache: true };
    }

    const data = await this.apiClient.fetchWeather(city);

    if (!data || typeof data.temp !== "number") {
      throw new Error("Dados inválidos da API");
    }

    this.cache[city] = { city, temp: data.temp, condition: data.condition };
    return { ...this.cache[city], fromCache: false };
  }

  clearCache() {
    this.cache = {};
  }

  getCachedCities() {
    return Object.keys(this.cache);
  }
}

module.exports = WeatherApp;
