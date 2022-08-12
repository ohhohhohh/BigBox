import ULog from "../util/ULog";
import UString from "../util/UString";

/**
 * Http管理类
 */
export default class HttpMgr {
    private static _ins: HttpMgr = null;
    static get ins(): HttpMgr {
        if (!this._ins) {
            this._ins = new HttpMgr();
        }
        return this._ins;
    }

    /**
     * http get请求
     * @param url 请求地址
     * @param callback 回调
     * @param isEncript 是否加密
     */
    sendGet(url: string, callback?: Function, isEncript?: boolean) {
        ULog.debug('http get请求 url => ', encodeURI(url));
        let xhr = new XMLHttpRequest();
        xhr.timeout = 20000;
        xhr.open("GET", encodeURI(url), true);
        let intervalId = setTimeout(() => {
            xhr.abort()
        }, 20000);
        xhr.ontimeout = (event) => {
            clearInterval(intervalId);
            ULog.debug('http get请求 超时！！！url => ', url)
        }
        xhr.onerror = (event) => {
            ULog.debug('http get请求 错误！！！url => ', url)
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    let response = xhr.responseText;
                    if (UString.isJsonStr(response)) {
                        let responseJson = JSON.parse(response);
                        callback && callback(responseJson);
                    } else {
                        ULog.debug('返回的数据不是JSON的字符串，解析出错！！！')
                    }
                } else {
                    ULog.debug('http get请求 error ', xhr.statusText);
                }
            }
        };
        xhr.send();
    }

    /**
     * http post请求
     * @param url 请求地址
     * @param params 参数
     * @param callback 回调
     * @param isEncript 是否加密
     */
    sendPost(url: string, params: Object, callback?: Function, isEncript?: boolean) {
        ULog.debug('http post请求 url => ', encodeURI(url));
        ULog.debug('http post请求 params => ', params);
        let xhr = new XMLHttpRequest();
        xhr.timeout = 20000;
        let paramsStr = JSON.stringify(params);
        xhr.open("POST", encodeURI(url), true);
        let intervalId = setTimeout(() => {
            xhr.abort()
        }, 20000);
        xhr.ontimeout = (event) => {
            clearInterval(intervalId);
            ULog.debug('http post请求 超时！！！url => ', url)
        }
        xhr.onerror = (event) => {
            ULog.debug('http post请求 错误！！！url => ', url)
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    let response = xhr.responseText;
                    if (UString.isJsonStr(response)) {
                        let responseJson = JSON.parse(response);
                        callback && callback(responseJson);
                    } else {
                        ULog.debug('http post请求 返回的数据不是JSON的字符串，解析出错！！！')
                    }
                } else {
                    ULog.debug('http post请求 status error, url => ', url);
                }
            }
        };
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        xhr.send(paramsStr);
    }
}

