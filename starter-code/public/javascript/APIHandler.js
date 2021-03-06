class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister(characterId) {
    return axios.get(`${this.BASE_URL}/characters/${characterId}`)
  }

  createOneRegister(characterInfo) {
    return axios.post(`${this.BASE_URL}/characters`, characterInfo)
  }

  updateOneRegister() {

  }

  deleteOneRegister(characterId) {
    return axios.delete(`${this.BASE_URL}/characters/${characterId}`)
  }
}