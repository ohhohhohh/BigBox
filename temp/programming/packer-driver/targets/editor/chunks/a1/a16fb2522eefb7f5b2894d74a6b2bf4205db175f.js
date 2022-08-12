System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, cfg_url;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7fb4cvZEDhCNLPJbFmX/Ycr", "cfg_url", undefined);

      /**
       * 地址配置
       */
      cfg_url = {
        /**开发 */
        develop: {
          /**socket地址集合 */
          socketUrls: ["develop-socketUrls1", "develop-socketUrls2"],

          /**热更地址集合 */
          hotUrls: ["develop-hotUrls1", "develop-hotUrls2"],

          /**充值地址集合 */
          rechargeUrls: ["develop-rechargeUrls1", "develop-rechargeUrls2"],

          /**客服地址集合 */
          serviceUrls: ["develop-serviceUrls1", "develop-serviceUrls2"]
        },

        /**测试 */
        test: {
          /**socket地址集合 */
          socketUrls: ["test-socketUrls1", "test-socketUrls2"],

          /**热更地址集合 */
          hotUrls: ["test-hotUrls1", "test-hotUrls2"],

          /**充值地址集合 */
          rechargeUrls: ["test-rechargeUrls1", "test-rechargeUrls2"],

          /**客服地址集合 */
          serviceUrls: ["test-serviceUrls1", "test-serviceUrls2"]
        },

        /**预发布 */
        prerelease: {
          /**socket地址集合 */
          socketUrls: ["prerelease-socketUrls1", "prerelease-socketUrls2"],

          /**热更地址集合 */
          hotUrls: ["prerelease-hotUrls1", "prerelease-hotUrls2"],

          /**充值地址集合 */
          rechargeUrls: ["prerelease-rechargeUrls1", "prerelease-rechargeUrls2"],

          /**客服地址集合 */
          serviceUrls: ["prerelease-serviceUrls1", "prerelease-serviceUrls2"]
        },

        /**线上发布 */
        release: {
          /**socket地址集合 */
          socketUrls: ["master-socketUrls1", "master-socketUrls2"],

          /**热更地址集合 */
          hotUrls: ["master-hotUrls1", "master-hotUrls2"],

          /**充值地址集合 */
          rechargeUrls: ["master-rechargeUrls1", "master-rechargeUrls2"],

          /**客服地址集合 */
          serviceUrls: ["master-serviceUrls1", "master-serviceUrls2"]
        }
      };

      _export("default", cfg_url);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a16fb2522eefb7f5b2894d74a6b2bf4205db175f.js.map