import { API } from "@mra/utility";

export const AuthenService = {
  async login(certifi: Certificate) {
    const response = await API.post(`/authen/login`, { certificate: certifi });
    return response.data;
  },
  async changePwFirstTime(payload) {
    const response = await API.post(`/authen/change-first-time`, payload);
    return response.data;
  },
};
