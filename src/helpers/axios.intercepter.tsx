import { IRequestFetch } from "../interfaces";

export const request = async ({ url, method, body = null }: IRequestFetch) => {
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
        method,
        headers: token
            ? {
                authorization: token,
                'Content-Type': 'application/json'
            }
            : {
                'Content-Type': 'application/json'
            },
        body
    })
    const { ok, status, statusText, headers } = response;

    if (headers.get('authorization')) {
        localStorage.setItem("token", '' + headers.get('authorization'))
    }

    if (headers.get('utilisateur_id')) {
        localStorage.setItem("utilisateur_id", '' + headers.get('utilisateur_id'))
    }

    // const result = await response.text();
    const result = await response.json();

    return { ok, status, statusText, result };
}