import { Component, Node } from "cc";

/**
 * 节点帮助类
 */
export default class UNodeHelper {
    /**
     * 获取子节点（同一节点下面不能有重名的节点）
     * @param node 获取对象的子节点 
     * @param path 节点路径
     */
    static find(node: Node, path: string): Node {
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
    static getComponent<T extends Component>(node: Node, path: string, type: { prototype: T }): T {
        var child = UNodeHelper.find(node, path);
        if (child) {
            //cc.log("获取路径节点的组件",type)
            var com = child.getComponent(type);
            return com;
        }
        return null;
    }

}

