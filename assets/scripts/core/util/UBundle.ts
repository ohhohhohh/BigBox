import { Asset, AssetManager, assetManager } from "cc";
import ULog from "./ULog";

/**
 * bundle工具类
 */
export default class UBundle {

    /**
     * 加载bundle
     * @param bundleName bundle名称
     * @param callback 回调
     */
    static loadBundle(bundleName: string, callback?: Function) {
        let bundle = assetManager.getBundle(bundleName);
        if (bundle) {
            ULog.log('loadBundle 已存在 bundleName:', bundleName);
            callback && callback(bundle);
        } else {
            assetManager.loadBundle(bundleName, (error: Error, bundle: AssetManager.Bundle) => {
                if (!error) {
                    ULog.log('loadBundle 成功 bundleName:', bundleName);
                    callback && callback(bundle);
                } else {
                    ULog.error('loadBundle 失败 bundleName:', bundleName, ' error:', error);
                    callback && callback(null);
                }
            })
        }
    }

    /**
    * 释放Bundle
    * @param bundleName bundle名称
    */
    static releaseBundle(bundleName: string) {
        let bundle = assetManager.getBundle(bundleName);
        if (bundle) {
            bundle.releaseAll();
            assetManager.removeBundle(bundle);
            ULog.log('releaseBundle 成功 bundleName:', bundleName)
        } else {
            ULog.warn('releaseBundle 失败 bundleName:', bundleName)
        }
    }

    /**
     * 加载bundle资源
     * @param bundleName bundle名称
     * @param path 路径
     * @param callback 回调
     */
    static loadBundleRes(bundleName: string, path: string, onProgress?: Function, onComplete?: Function) {
        let bundle = assetManager.getBundle(bundleName);
        let loadedFunc = (bundle: AssetManager.Bundle) => {
            bundle.load(path, Asset, (finish: number, total: number, item: AssetManager.RequestItem) => {
                // ULog.log('loadBundleRes progeress:', finish, ' / ', total);
                onProgress && onProgress(finish, total, item);
            }, (error: Error, asset: Asset) => {
                if (error) {
                    ULog.error('loadBundleRes 失败 path:', path, ' error:', error);
                } else {
                    ULog.log('loadBundleRes 成功 path:', path)
                }
                onComplete && onComplete(error, asset);
            })
        }
        if (bundle) {
            loadedFunc(bundle);
        } else {
            this.loadBundle(bundleName, (bundle: AssetManager.Bundle | null) => {
                if (bundle) {
                    loadedFunc(bundle);
                } else {
                    ULog.error('加载bundle资源 失败 bundleName:', bundleName)
                }
            })
        }
    }

    /**
     * 加载Bundle目录
     * @param bundleName bundle名称
     * @param callback 回调
     */
    static loadBundleDir(bundleName: string, path: string, callback?: Function) {
        this.loadBundle(bundleName, (bundle: AssetManager.Bundle | null) => {
            if (bundle) {
                bundle.loadDir(path, Asset, (finish: number, total: number, item: AssetManager.RequestItem) => {
                    ULog.log('loadBundleDir progeress:', finish, ' / ', total)
                }, (error: Error, assets: Asset[]) => {
                    callback && callback(error, assets);
                });
            } else {
                ULog.error('loadBundleDir 失败 bundleName:', bundleName)
            }
        })
    }

}

