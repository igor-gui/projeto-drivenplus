import axios from "axios";

const baseURL = 'https://mock-api.driven.com.br/api/v4/driven-plus'
const api = axios.create({baseURL})

export function cadastrar(data){
    const promise = api.post('/auth/sign-up', data)

    return promise
}

export function entrar(data){
    const promise = api.post('/auth/login', data)
    return promise
}

export function pegarPlanos(token){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = api.get('/subscriptions/memberships', config)
    return promise
}