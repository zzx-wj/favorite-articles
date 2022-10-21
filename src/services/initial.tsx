import { request } from 'umi';
import { baseUrl } from '@/utils/util';

export const getCurrentUser = () => {
  return request(`${baseUrl}/api/user/getCurrentUser`, {
    method: "get"
  })
}