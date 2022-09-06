import axios from "axios";

const getApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
})
export default getApi;