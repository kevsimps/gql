'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62e43576.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.12.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('gql-classroom.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["wxcc-altair_6.cjs",[[1,"wxcc-altair"],[1,"wxcc-auth-demo-widget",{"callbackUrl":[1,"callback-url"],"token":[32],"expStamp":[32],"hide":[32],"deets":[32],"request":[32],"showResponse":[32],"burp":[64]},[[16,"wxccAuthPop","onGetAuth"]]],[1,"wxcc-guide-panel",{"arttitle":[513],"opened":[1540],"lList":[513,"l-list"],"showNav":[32],"content":[32],"lessons":[32],"currentPage":[32],"lastScroll":[32]},[[16,"toggleGuide","onToggle"],[16,"wxccGuidePageTurn","onNext"]]],[1,"wxcc-page-controls",{"currentPage":[32]}],[1,"wxcc-time",{"td":[32],"fd":[32],"toSelected":[32],"fromSelected":[32],"tTime":[32],"tDate":[32],"fTime":[32],"fDate":[32],"to":[32],"from":[32],"hide":[32],"tab":[32],"lupStamp":[32],"tStamp":[32]},[[16,"wxccTimeWidget","onToggle"]]],[1,"wxcc-video-modal",{"vidId":[1537,"vid-id"],"vidBig":[32],"btnLable":[32],"backDrop":[32],"hide":[32]},[[16,"vodTog","onToggleHide"],[16,"vidPop","onVidPop"]]]]],["wxcc-auth-widget.cjs",[[1,"wxcc-auth-widget",{"callbackUrl":[1,"callback-url"],"token":[32],"expStamp":[32],"hide":[32],"burp":[64]},[[16,"wxccAuthPop","onGetAuth"]]]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=gql-classroom.cjs.js.map