
import cfg_global from "../../config/cfg_global";
import UTime from "./UTime";

/**
 * 日志输出
 */
export default class ULog {

    /**初始化 */
    public static init() {
        ULog.log('enableLog:', cfg_global.enableLog)
        if (!cfg_global.enableLog) {
            console.log = () => { };
            console.debug = () => { };
            console.warn = () => { };
            console.error = () => { };
            console.info = () => { };
        }
    }

    /**格式后的当前时间 */
    private static getCurTimeFormat() {
        return "[" + UTime.dateFormat(new Date(), "hh:mm:ss.S") + "]";
    }

    /**默认输出（绿色） */
    public static log(param?: any, ...optionalParams: any[]) {
        console.log("%c" + this.getCurTimeFormat(), "color:#08C91F", param, ...optionalParams);
    }

    /**输出（红色） */
    public static logRed(param?: any, ...optionalParams: any[]) {
        console.log("%c" + this.getCurTimeFormat(), "color:#FF0000", param, ...optionalParams);
    }

    /**输出（蓝色） */
    public static logBlue(param?: any, ...optionalParams: any[]) {
        console.log("%c" + this.getCurTimeFormat(), "color:#055AF1", param, ...optionalParams);
    }

    /**输出（橙色） */
    public static logOrange(param?: any, ...optionalParams: any[]) {
        console.log("%c" + this.getCurTimeFormat(), "color:#FF8500", param, ...optionalParams);
    }

    /**输出（灰色） */
    public static logGray(param?: any, ...optionalParams: any[]) {
        console.log("%c" + this.getCurTimeFormat(), "color:#666666", param, ...optionalParams);
    }

    public static debug(param?: any, ...optionalParams: any[]) {
        console.debug(param, ...optionalParams);
    }

    public static warn(param?: any, ...optionalParams: any[]) {
        console.warn(param, ...optionalParams);
    }

    public static error(param?: any, ...optionalParams: any[]) {
        console.error(param, ...optionalParams);
    }

    public static info(param?: any, ...optionalParams: any[]) {
        console.info(param, ...optionalParams);
    }

    public static trace(param?: any, ...optionalParams: any[]) {
        console.trace(param, ...optionalParams);
    }

    public static assert(condition?: boolean, param?: any, ...optionalParams: any[]) {
        console.assert(condition, param, ...optionalParams);
    }

    public static count(label?: string) {
        console.count(label);
    }

    public static countReset(label?: string) {
        console.countReset(label);
    }

    public static dir(item?: any, options?: any) {
        console.dir(item, options);
    }

    public static dirxml(param?: any, ...optionalParams: any[]) {
        console.dirxml(param, ...optionalParams);
    }

    public static group(param?: any, ...optionalParams: any[]) {
        console.group(param, ...optionalParams);
    }

    public static groupCollapsed(param?: any, ...optionalParams: any[]) {
        console.groupCollapsed(param, ...optionalParams);
    }

    public static groupEnd() {
        console.groupEnd();
    }

    public static table(tabularData?: any, properties?: string[]) {
        console.table(tabularData, properties);
    }

    public static time(label?: string) {
        console.time(label);
    }

    public static timeEnd(label?: string) {
        console.timeEnd(label);
    }

    public static timeLog(label?: string, ...optionalParams: any[]) {
        console.timeLog(label, ...optionalParams);
    }

    public static timeStamp(label?: string) {
        console.timeStamp(label);
    }

    public static clear() {
        console.clear();
    }
}
