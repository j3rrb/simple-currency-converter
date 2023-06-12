import axios from "axios"
import { CURRENCIES_SIGNS } from "../enums"

const BASE_URL = 'https://api.freecurrencyapi.com'

const API = axios.create({
    baseURL: BASE_URL,
    params: {
        apikey: process.env.REACT_APP_API_KEY
    }
})

export async function convert(base: keyof typeof CURRENCIES_SIGNS, toCurrencies: (keyof typeof CURRENCIES_SIGNS)[]) {
    const req = await API.get('/v1/latest', {
        params: {
            base_currency: base,
            currencies: toCurrencies.join(',')
        }
    })

    return req.data.data
}
