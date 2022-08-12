
/**
 * 正则检测
 */
export default class URegex {

    /**
     * 检测 手机号
     * @param phoneNum 手机号码
     * @returns 是否是手机号
     */
    static isPhoneNumber(phoneNum: string): boolean {
        let regex = /^1[3456789]\d{9}$/;
        if (regex.test(phoneNum)) {
            return true;
        }
        return false;
    }

    /**
     * 检测 邮箱
     * @param email 邮箱
     * @returns 是否是邮箱
     */
    static isEmail(email: string): boolean {
        let regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (regex.test(email)) {
            return true;
        }
        return false;
    }

    /**
     * 检测 纯数字
     * @param num 数字
     * @returns 是否是纯数字
     */
    static isNumer(num: string): boolean {
        let regex = /^[0-9]+$/;
        if (regex.test(num)) {
            return true;
        }
        return false;
    }

    /**
     * 检测 身份证(15位一代身份证和18位二代身份证都包含在内)
     * @param id 身份证
     * @returns 是否是身份证
     */
    static isIdNumber(id: string): boolean {
        let regex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (regex.test(id)) {
            return true;
        }
        return false;
    }

    /**
     * 检测 汉字
     * @param str 字符串
     * @returns 是否是汉字
     */
    static isChinese(str: string): boolean {
        let regex = /^[\u2E80-\u9FFF]+$/;
        if (regex.test(str)) {
            return true;
        }
        return false;
    }

    /**
     * 检测 密码（字母和数字）
     * @param password 密码
     * @returns 是否是密码
     */
    static isPassword(password: string): boolean {
        let regex = /^[A-Za-z0-9]+$/;
        if (regex.test(password)) {
            return true;
        }
        return false;
    }
}

