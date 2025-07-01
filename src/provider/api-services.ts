import API, { ApiMethodType } from './api-config';
import { EndPoints } from '../constant/api-endpoints';

export const loginWithOtp = async (params: {} | undefined) => {
  return new Promise(async (resolve, reject) => {
    const res = await API.request<any, any>(
      EndPoints.login,
      ApiMethodType.post,
      params,
    );
    if (res.code == 200) {
      resolve(res.data);
    }
    resolve({});
  });
};

export const otpVerification = async (params: {} | undefined) => {
  return new Promise(async (resolve, reject) => {
    const res = await API.request<any, any>(
      EndPoints.verification,
      ApiMethodType.post,
      params,
    );
    if (res.code == 200) {
      resolve(res.data);
    }
    resolve({});
  });
};

export const fetchAppLanguage = async (params: {} | undefined) => {
  return new Promise(async (resolve, reject) => {
    const res = await API.request<any, any>(
      EndPoints.switchLanguage,
      ApiMethodType.post,
      params,
    );
    if (res.code == 200) {
      resolve(res.data);
    }
    resolve({});
  });
};
