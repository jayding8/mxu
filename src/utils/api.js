import http from "./http";

export const login = (params, headers) => http.get('auth/login', params, headers)