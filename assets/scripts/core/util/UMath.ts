
/**
 * 数学
 */
export default class UMath {
    /**
     * 0~1随机数
     * @returns 返回数值
     */
    static random(): number {
        return Math.random();
    }

    /**
    * 在min到max的数值范围内取随机整数
     * @param min 最小值
     * @param max 最大值
     * @returns 返回数值
     */
    static randomRange(min: number, max: number): number {
        let num = min + Math.floor(Math.random() * (max - min + 1));
        return num;
    }

    /**
     * 十进制转其他进制
     * @param num 十进制数字
     * @param otherType 几进制
     * @returns 返回进制字符串
     */
    static convertDecimalToOther(num: number, otherType: number): string {
        return num.toString(otherType);
    }

    /**
     * 其他进制转十进制
     * @param char 其他进制字符
     * @param otherType 几进制
     * @returns 返回十进制数字
     */
    static convertOtherToDecimal(char: any, otherType: number): number {
        return parseInt(char, otherType);
    }

    /**
     * 二维向量旋转 顺时针旋转
     * @param from 起始向量
     * @param angele 旋转角度(角度)
     */
    // static vec2Rot(from: cc.Vec2, angele: number): cc.Vec2 {
    //     let ro = (angele / 180) * Math.PI;
    //     var x = from.x * Math.cos(ro) - from.y * Math.sin(ro);
    //     var y = from.x * Math.sin(ro) + from.y * Math.cos(ro);
    //     return cc.v2(x, y);
    // }
}


