import xior from 'xior';

export const xiorInstance = xior.create({
  baseURL: "https://api.nttreservation.com/services/v1",
  headers: {
    "accept-language": "tr"
  },
});

export function setAccessToken(token: string) {
  xiorInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export function removeUserToken() {
  delete xiorInstance.defaults.headers['Authorization'];
}

export function setAcceptLanguage(lang: string) {
  xiorInstance.defaults.headers['accept-language'] = lang;
}