"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const url = common_vendor.ref("http://10.162.243.254:5174/");
    function onMessage(e) {
      common_vendor.index.__f__("log", "at pages/webview/index.vue:14", "收到消息");
    }
    return (_ctx, _cache) => {
      return {
        a: url.value,
        b: common_vendor.o(onMessage)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/webview/index.js.map
