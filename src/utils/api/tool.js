import {
    fetchGet,
    fetchPost
  } from "../api";

  export const GetUser = (params) => {
    return fetchGet('/api/user', params, '查看用户')
  }