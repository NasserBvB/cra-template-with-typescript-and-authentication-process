import { IRequestFetch } from "../interfaces";

export const request = async ({ url, method, token, body = null }: IRequestFetch) => {
    const response = await fetch(url, {
        method,
        headers: token
            ? {
                authorization: `Bearer ${token}`
            }
            : {},
        body: JSON.stringify(body)
    })
    const { ok, status, statusText } = response;

    const result = /**  await response.json(); */ '';

    return { ok, status, statusText, result };
}