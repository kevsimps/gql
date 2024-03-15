import { p as promiseResolve, b as bootstrapLazy } from './index-9e44e949.js';
export { s as setNonce } from './index-9e44e949.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.12.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["wxcc-altair_6",[[1,"wxcc-altair"],[1,"wxcc-auth-demo-widget",{"callbackUrl":[1,"callback-url"],"token":[32],"expStamp":[32],"hide":[32],"deets":[32],"request":[32],"showResponse":[32],"burp":[64]},[[16,"wxccAuthPop","onGetAuth"]]],[1,"wxcc-guide-panel",{"arttitle":[513],"opened":[1540],"lList":[513,"l-list"],"showNav":[32],"content":[32],"lessons":[32],"currentPage":[32]},[[16,"toggleGuide","onToggle"],[16,"wxccGuidePageTurn","onNext"]]],[1,"wxcc-page-controls",{"currentPage":[32]}],[1,"wxcc-time",{"td":[32],"fd":[32],"toSelected":[32],"fromSelected":[32],"tTime":[32],"tDate":[32],"fTime":[32],"fDate":[32],"to":[32],"from":[32],"hide":[32]},[[16,"wxccTimeWidget","onToggle"]]],[1,"wxcc-video-modal",{"vidId":[1537,"vid-id"],"vidBig":[32],"btnLable":[32],"backDrop":[32],"hide":[32]},[[16,"vidPop","onVidPop"]]]]],["wxcc-auth-widget",[[1,"wxcc-auth-widget",{"callbackUrl":[1,"callback-url"],"token":[32],"expStamp":[32],"hide":[32],"burp":[64]},[[16,"wxccAuthPop","onGetAuth"]]]]]], options);
});

//# sourceMappingURL=gql-classroom.js.map