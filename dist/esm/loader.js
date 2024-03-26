import { b as bootstrapLazy } from './index-f1a1248c.js';
export { s as setNonce } from './index-f1a1248c.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["wxcc-altair_6",[[1,"wxcc-altair"],[1,"wxcc-auth-demo-widget",{"callbackUrl":[1,"callback-url"],"token":[32],"expStamp":[32],"hide":[32],"deets":[32],"request":[32],"showResponse":[32],"burp":[64]},[[16,"wxccAuthPop","onGetAuth"]]],[1,"wxcc-guide-panel",{"arttitle":[513],"opened":[1540],"lList":[513,"l-list"],"showNav":[32],"content":[32],"lessons":[32],"currentPage":[32]},[[16,"toggleGuide","onToggle"],[16,"wxccGuidePageTurn","onNext"]]],[1,"wxcc-page-controls",{"currentPage":[32]}],[1,"wxcc-time",{"td":[32],"fd":[32],"toSelected":[32],"fromSelected":[32],"tTime":[32],"tDate":[32],"fTime":[32],"fDate":[32],"to":[32],"from":[32],"hide":[32],"tab":[32],"lupStamp":[32],"tStamp":[32]},[[16,"wxccTimeWidget","onToggle"]]],[1,"wxcc-video-modal",{"vidId":[1537,"vid-id"],"vidBig":[32],"btnLable":[32],"backDrop":[32],"hide":[32]},[[16,"vidPop","onVidPop"]]]]],["wxcc-auth-widget",[[1,"wxcc-auth-widget",{"callbackUrl":[1,"callback-url"],"token":[32],"expStamp":[32],"hide":[32],"burp":[64]},[[16,"wxccAuthPop","onGetAuth"]]]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map