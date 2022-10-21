import { history } from 'umi';
import { toLoginPath, loginPath } from './utils/util';

// 此文件是运行时文件
//可进行用户验证；

// 全局初始状态
import { getCurrentUser } from '@/services/initial';

export async function getInitialState() {
  const initialPath = history.location.pathname;
  if (initialPath === loginPath) return undefined
  try {
    const { code, currentUser } = await getCurrentUser();
    if (code === "0000") {
      return currentUser;
    } else {
      toLoginPath(initialPath);
      return undefined
    }
  } catch (error) {
    toLoginPath(initialPath);
    return undefined
  }

}

// 请求的运行时配置
import type { RequestConfig } from 'umi';

export const request: RequestConfig = {
  timeout: 15000,
  // other axios options you want
  errorConfig: {
    errorHandler() {
    },
    errorThrower() {
    }
  },
  requestInterceptors: [],
  responseInterceptors: []
};