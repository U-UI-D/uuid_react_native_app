import axios from "axios";
import Qs from 'qs';

//https://jsonplaceholder.typicode.com/posts/1
let host = "47.112.252.228";
let port = "8000";
let prefix = "/api/v1";
let baseURL = "http://" + host + ':' + port + "/" + prefix;



export function request(config) {
  let contentType = 'application/json';
  if (config.method === "get" || config.method === "GET"){
    if (JSON.stringify(config.data) !== "{}"){
      config.url += "?" + Qs.stringify(config.data);
    }
  }else {
    config.data = Qs.stringify(config.data);
    contentType = "application/x-www-form-urlencoded";
  }

  console.log("request config", config);
  const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    headers: {
      "Accept": "application/json",
      "Content-Type": contentType
    },

  });

  return axiosInstance(config);
}

export const HttpRequest = {

  /**
   * 通用网络请求
   * @param url
   * @param type
   * @param data
   * @param env
   * @returns {Promise<*|{data: null, err: null}>}
   */
  async commonRequest({url="", method="get", data={}, env="dev", headers={}, log=false}){
    let _url = url;
    let result = {
      data: null,
      err: null
    }
    let promise = request({
      url: _url,
      method,
      data,
      headers
    }).then(res => {
      if (log){
        console.log("commonRequest data", res.data);
      }
      result.data = res.data;
      return result;
    }).catch(err => {
      console.log(err);
      result.err = err;
      return result;
    });

    result = await promise;
    return result;
  },

  async get({url='', data={}, headers={}}){
    let promise = this.commonRequest({
      url,
      method: 'GET',
      data,
      headers
    }).then(res => {
      return res;
    });
    return await promise;
  },

  async post({url='', data={}, headers={}}){
    let promise = this.commonRequest({
      url,
      method: 'POST',
      data,
      headers
    }).then(res => {
      return res;
    });
    return await promise;
  },

  async put({url='', data={}, headers={}}){
    let promise = this.commonRequest({
      url,
      method: 'PUT',
      data,
      headers
    }).then(res => {
      return res;
    });
    return await promise;
  },

  async delete({url='', data={}, headers={}}){
    let promise = this.commonRequest({
      url,
      method: 'DELETE',
      data,
      headers
    }).then(res => {
      return res;
    });
    return await promise;
  }
}

function stringifyParams(data){
  if (typeof data !== 'object'){
    return ;
  }


  let res = "";
  console.log("len", Object.keys(data).length);
  let len = Object.keys(data).length;
  let i = 0;
  for (const key in data) {
    res += key + "=" + data[key] + (++i === len ? "" : "&");
  }
  console.log("stringifyParams", res);
  return res;
}
