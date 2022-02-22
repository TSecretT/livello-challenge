import axios, { AxiosResponse, AxiosError } from 'axios';
import config from '../config';

axios.defaults.baseURL = config.BASE_URL;

const searchMovie = async (name: string) => {
    return await axios.get("/", { params: { s: name, apikey: config.API_KEY } })
    .then((res: AxiosResponse) => res.data.Search || [])
    .catch((err: AxiosError) => { console.error(err); return [] })
}

const parseMoviesDetails = async (movieIDs: string[]) => {
    return await axios.all(movieIDs.map((id: string) => axios.get("/", { params: { i: id, apikey: config.API_KEY } })))
    .then((res: AxiosResponse[]) => res.map((res: AxiosResponse) => res.data));
}

export default {
    searchMovie,
    parseMoviesDetails
}