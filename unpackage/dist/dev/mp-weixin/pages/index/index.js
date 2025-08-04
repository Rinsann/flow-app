"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    handleApply(url, title = "文章详情") {
      common_vendor.index.navigateTo({
        // 将标题也编码后传递给webview页面
        url: "/pages/webview/webview?url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(title)
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_vendor.o(($event) => $options.handleApply("https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw", "爆款推荐")),
    d: common_vendor.o(($event) => $options.handleApply("https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw", "本地号码")),
    e: common_vendor.o(($event) => $options.handleApply("https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw", "长期套餐")),
    f: common_vendor.o(($event) => $options.handleApply("https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw", "5G高速")),
    g: common_vendor.o(($event) => $options.handleApply("https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw", "广电升G卡29元192G")),
    h: common_vendor.o(($event) => $options.handleApply("https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw", "电信星卡29元80G")),
    i: common_vendor.o(($event) => $options.handleApply("https://mp.weixin.qq.com/s/pc_pRWvh-m0yG0k9ulpYUw", "联通鸿鵠卡135G+"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
