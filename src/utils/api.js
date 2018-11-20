import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'
import router from '@/router'

import * as tool from './api/tool' // 方案模块


// 取消令牌
let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) { //当当前请求在数组中存在时执行函数体
      pending[p].f(); //执行取消操作
      pending.splice(p, 1); //把这条记录从数组中移除
    }
  }
}

// test
let serverObj = window.localStorage.getItem(`${location.host}ApiUrl`)
if (!serverObj && process.env.NODE_ENV === 'production') {
  axios.get("serverconfig.json").then((result) => {
    window.localStorage.setItem(`${location.host}ApiUrl`, result.data.ApiUrl)
    axios.defaults.baseURL = result.data.ApiUrl
    console.log('result.data', result.data)
    console.log('config baseURL', axios.defaults.baseURL)
  }).catch((error) => {
    console.log(error)
  });
}

// 是否正在刷新的标志
window.isRefreshing = false;



/**
 *  axios 配置
 *  https://www.kancloud.cn/yunye/axios/234845
 */
axios.defaults.timeout = 50000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

const api_url = 'http://192.168.23.251:8997'
axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? (window.localStorage.getItem(`${location.host}ApiUrl`) || api_url) : api_url


// 传参序列化
// axios.interceptors.request.use((config) => {
//     removePending(config); //在一个ajax发送前执行一下取消操作
//     config.cancelToken = new cancelToken((c) => {
//       // 这里的ajax标识我是用请求地址&请求方式拼接的字符串
//       pending.push({
//         u: config.url + '&' + config.method,
//         f: c
//       });
//     })
  
//     // 判断是否存在token，如果存在的话，则每个http header都加上token
//     // if (Vue.cookie.get('TOKEN')) {
//     //   config.headers.Authorization = 'Bearer ' + Vue.cookie.get('TOKEN')
//     // }
// let _ax = config.url.split('/')[1]
// let Creator = 'F1750EA0-EBC3-4F25-9A92-F48C34C05FCB'
// // 发请求前组装data
// if (config.headers['Content-Type'] === 'multipart/form-data;') {
//   config.data.Creator = Creator
//   return config
// }
// if (config.method === 'post' && _ax !== 'jsonapi') {
//   let data = qs.parse(config.data)
//   config.data = qs.stringify({
//     Creator,
//     ...data
//   })
// } else if (config.method === 'get') {
//   config.params = {
//     Creator,
//     ...config.params
//   }
// } else if (_ax === 'jsonapi') {
//   config.headers['Content-Type'] = 'application/json;charset=UTF-8'
//   if (typeof config.data === 'undefined') config.data = {}
//   Object.assign(config.data, {
//     Creator
//   })
// }
// if (Vue.cookie.get('TOKEN')) {
//   if (window.localStorage.getItem(`${location.host}refreshToken_in`) <= Math.round(new Date().getTime() / 1000)) {
//     if (!window.isRefreshing) {
//       window.isRefreshing = true
//       register.Refresh({
//         Token: Vue.cookie.get('TOKEN'),
//         RefreshToken: window.localStorage.getItem(`${location.host}refreshToken`)
//       }).then(res => {
//         if (res.ResultType === 200) {
//           window.isRefreshing = false
//           console.log('res', res)
//           let
//             expiresTime = (res.AppendData.expires_in - 60) / 60, // 比服务器少一分钟
//             token = res.AppendData.access_token
//           Vue.cookie.set('TOKEN', token, {
//             expires: `${expiresTime}m`
//           });
//           window.localStorage.setItem(`${location.host}refreshToken`, res.AppendData.refreshToken)
//           window.localStorage.setItem(`${location.host}refreshToken_in`, res.AppendData.refreshToken_in)
//         }
//       }).catch(error => {
//           window.isRefreshing = false
//         }

//       )
//       return config;
//     } else {
//       return config;
//     }
//   } else {
//     return config;
//   }

// } else {
//   return config
// }

// }, (error) => {
// return Promise.reject(error)
// })

// 返回状态
axios.interceptors.response.use((res) => {
// 大于400 表示token过期或丢失
if (res.data && res.data.code > 400) {
//   Vue.cookie.delete('TOKEN')
  router.replace({
    path: 'login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
  return false
}
if (!res.data) {
  return Promise.reject(res)
}
return res
}, (error) => {
return Promise.reject(error); //返回一个空对象，主要是防止控制台报错
})

export function fetchPost(url, params, text = '') {
    try {
      return new Promise((resolve, reject) => {
        axios.post(url, params)
          .then(response => {
            // console.log(text, response.data)
            resolve(response.data)
          }, err => {
            reject(err)
          })
          .catch((error) => {
            reject(error)
          })
      })
    } catch (e) {
      console.log(e.message)
    }
  }
  
  export function fetchGet(url, params, text = '') {
    return new Promise((resolve, reject) => {
      axios.get(url, params)
        .then(response => {
          response.config.asxsText = text
          console.log(text, response.data)
          resolve(response.data)
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  export default {
    /**
     * 工具模块
     */
    tool,
  
  }
  
