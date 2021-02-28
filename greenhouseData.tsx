const URL = ‘XXXX
const greenhouseAuth = Bearer ‘Token’ -> here you replace Token with your admin api key.

export default class GreenhouseData {

async getdata(): Promise<AxiosResponse<any>> {
return axios.get(‘url/endpoint’, {
headers: {
Authorization: greenhouseAuth
}
});
}
}
