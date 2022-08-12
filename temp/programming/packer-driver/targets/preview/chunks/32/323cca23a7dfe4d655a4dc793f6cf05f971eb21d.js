System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, UNodeHelper, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69abbve0+tNpbwiGtnn/tbb", "UNodeHelper", undefined);

      /**
       * 节点帮助类
       */
      _export("default", UNodeHelper = class UNodeHelper {
        /**
         * 获取子节点（同一节点下面不能有重名的节点）
         * @param node 获取对象的子节点 
         * @param path 节点路径
         */
        static find(node, path) {
          if (!node || !path) return null;
          if (path == '') return node;
          var pts = path.split('/');
          var idx = 0;
          var len = pts.length;
          var tempNode = node;

          while (idx < len) {
            tempNode = tempNode.getChildByName(pts[idx]);

            if (tempNode == null) {
              break;
            }

            idx++;
          }

          return tempNode;
        }
        /**
         * 获取路径节点的组件
         * @param node 
         * @param path 
         * @param type 
         */


        static getComponent(node, path, type) {
          var child = UNodeHelper.find(node, path);

          if (child) {
            //cc.log("获取路径节点的组件",type)
            var com = child.getComponent(type);
            return com;
          }

          return null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=323cca23a7dfe4d655a4dc793f6cf05f971eb21d.js.map