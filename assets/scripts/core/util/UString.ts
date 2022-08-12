
/**
 * 字符串
 */
export default class UString {

    /**
     * 字符串是否是json格式
     * @param str 字符串
     * @returns 
     */
    static isJsonStr(str: string): boolean {
        try {
            let obj = JSON.parse(str);
            if (obj && typeof obj == 'object') {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }


}

