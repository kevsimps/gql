import{r as e,h as t,c as i}from"./p-927dfcde.js";const a="#frame{height:92vh;bottom:0}";const s=a;const c=class{constructor(t){e(this,t)}render(){return t("div",{key:"2c61a09b55eacd0b6bb1038d1edacaf2d14841cc",id:"frame"},t("iframe",{key:"75b282f3c84c55a971e66401d8fe39d8ec16df24",src:"https://altair-gql.sirmuel.design/",height:"100%",width:"100%",frameborder:"0",loading:"lazy"}))}};c.style=s;const n=".frame{position:absolute;z-index:5;height:25vh;background:#ccc;left:20%;top:50%;padding:2em;width:60%}h1{text-align:center}.hidden{display:none}";const d=n;const o=class{constructor(t){e(this,t);this.token=undefined;this.expStamp=undefined;this.hide=true;this.callbackUrl=undefined;this.deets=undefined;this.request=undefined;this.showResponse=false}async burp(e){console.log(e);const t=e.slice(e.search("=")+1,e.search("&"));let i=new Headers;i.append("Content-Type","application/json");let a={grant_type:"authorization_code",redirect_uri:this.callbackUrl,client_id:"C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f",client_secret:"49aad1cd3ed0758755c69d818baf897923876854423dbc01d608fc8255d14044",code:t};let s={method:"POST",headers:i,body:JSON.stringify(a)};this.request=a;let c=await fetch("https://webexapis.com/v1/access_token",s);this.deets=await c.json();this.token="Bearer "+this.deets.access_token;this.expStamp=new Date(Date.now()+this.deets.expires_in*1e3);this.hide=false;this.showResponse=false}onGetAuth(){if(+new Date(sessionStorage.getItem("expStamp"))>Date.now()){this.token=sessionStorage.getItem("token");this.hide=false;this.showResponse=false}else{window.open(`https://webexapis.com/v1/authorize?response_type=code&client_id=C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f&state=new&scope=cjp%3Aconfig%20cjp%3Aconfig_read%20cjp%3Aconfig_write&redirect_uri=${this.callbackUrl}`,"steve","popup")}}render(){let e;if(this.request){e=t("p",{key:"76cfff11222876b763227b5cf8ae6036148954c0"},t("h1",{key:"6fb95434270d6a2fe0093af8ab5f9193a184fef2"},"The code is sent with this information from the app "),"grant_type: ",this.request.grant_type,t("br",{key:"74bfb40589468a84122e33bad349e118af032ce7"}),"redirect_uri: ",this.request.redirect_uri,t("br",{key:"f29b4667a6b7c0a26c24bafb8c461ecf0a2946bc"}),"client_id: ",this.request.client_id,t("br",{key:"a1a7691b92bf1348769e29efb1f492fc2f25d414"}),"client_secret: ",this.request.client_secret,t("br",{key:"c9732e2a0b149fb74d3989354d7731cb61b21595"}),t("strong",{key:"80e2bc17d5919db1eb261e50350fd3e376ae6d61"},"code:",this.request.code),t("br",{key:"386edaf72a6d4fec7a6d5da6173374b1bd690d13"}));if(this.showResponse){e=t("p",{key:"5bb0e2432bde6822b821ad442a654b8ce8d4bf81"},t("h1",{key:"aca73ca9dbf95f11e49be060531e1d5a79c85142"},"This is the response with the token information "),"access_token: ",this.deets.access_token,t("br",{key:"80a67649cacc1c5c12554e73d4309ed623be2c03"}),"expires_in: ",this.deets.expires_in,t("br",{key:"0be235acf34bf1de24d5f3949ee09cee5e05b9e7"}),"refresh_token: ",this.deets.refresh_token,t("br",{key:"f8c8cafdba4944aa50e3b3193eae5c7aabf76924"}),"refresh_token_expires_in: ",this.deets.refresh_token_expires_in,t("br",{key:"d4dccec318508e4b02611af4ce60bbf4a3f5423b"}),"token_type: ",this.deets.token_type,t("br",{key:"34f77777f333b27ec60eeb05256b77e19fb8a951"}),"scope: ",this.deets.scope)}}return[t("div",{key:"7d0d0b7a97804b99564a5939a6d64fb9ad48b397",class:"frame"+(this.hide?" hidden":"")},t("p",{key:"cbf5252bffb015e4a6b0704f48b9120dc8700fda"},e),t("button",{key:"7254d54eaf39767d2df54c273a3efd44c7a467bf",onClick:()=>{this.showResponse=!this.showResponse}},this.showResponse?"Show Request":"Show Response"),t("button",{key:"52b2c2aec29e4b488dfc11bff736a6b82ae33556",onClick:()=>{this.hide=!this.hide}},"close"))]}};o.style=d;const r="aside{position:fixed;bottom:0;right:-100%;width:40rem;max-width:34%;height:92vh;background:#d6c5c5;box-shadow:0 2px 8px rgba(0, 0, 0, 0.27);transition:right 1.3s ease-out;z-index:2;overflow:scroll}:host([opened]) aside{right:0}header{display:flex;padding:1rem;background:#2196F3;position:fixed;top:8%;width:100%}h1.post-title{font-size:1.5rem;color:white;margin:0}.post-content{margin-left:1em}h1{font-size:1.5rem;margin:0}header button{position:absolute;top:0;right:0;padding:1rem;color:white;background:transparent;font-size:1.5rem;border:none}header button:focus{outline:none}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;padding-top:4rem}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid  #2196F3;font:inherit;padding:0.15rem 0}#tabs :nth-child(1){border-top-left-radius:20px;border-bottom-left-radius:20px}#tabs :nth-last-child(1){border-top-right-radius:20px;border-bottom-right-radius:20px}#tabs button.active,#tabs button:hover,#tabs button:active{background:#2196F3;color:white;border:1px solid #2196F3}#tabs button:focus{outline:none}#contact-information{padding:0 1rem}.site-header,.site-footer,.book-header,.book-summary,.search-results{display:none}ul.nav{margin:1em;padding:0;list-style:none}li.nav{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li.nav:hover,li.nav:active{background:#2196F3;color:white}";const h=r;const f=class{constructor(t){e(this,t);this.showNav=false;this.arttitle=undefined;this.opened=undefined;this.content=undefined;this.lessons=[];this.currentPage=undefined;this.lList=undefined;this.lastScroll=0}async componentWillLoad(){const e=await fetch(this.lList);const t=await e.json();this.lessons=await t.map((e=>({title:e["title"],url:e["address"]})))}onContentChange(e){this.showNav=e==="nav"}onToggle(e){console.log(e.detail);this.opened=!this.opened}onNext(e){let i;const a=this.lessons.findIndex((e=>e.title===this.currentPage));if(!a){this.currentPage=this.lessons[0].title}if(e.detail==="next"){i=this.lessons[a+1].url;this.currentPage=this.lessons[a+1].title;this.lastScroll=document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop;document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop=0}else{i=this.lessons[a-1].url;this.currentPage=this.lessons[a-1].title;document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop=this.lastScroll}this.getHTML(i).then((e=>{if(e!==null){this.content=e;this.content=t("div",{innerHTML:this.content})}}));this.showNav=false}onChoice(e){this.getHTML(e).then((i=>{if(i!==null){this.content=i;this.content=t("div",{innerHTML:this.content});this.currentPage=this.lessons[this.lessons.findIndex((t=>t.url===e))].title;this.showNav=false}}))}async getHTML(e){try{const t=await fetch(e);if(!t.ok){throw new Error(`HTTP error! Status: ${t.status}`)}const i=await t.text();return i}catch(e){console.error("Error during fetch:",e);return null}}componentDidUpdate(){Array.from(document.querySelector("wxcc-guide-panel").shadowRoot.querySelectorAll("textarea")).forEach((e=>{e.value=e.value.replaceAll("\\","")}))}render(){let e=this.content||t("slot",{key:"2f1080d655cefe28ada4ba2c53e1c8cad8ebfefe"});if(this.showNav){e=t("ul",{key:"4b625c8889025f23832bffac706fd2f868de2d0e",class:"nav"},this.lessons.map((e=>t("li",{class:"nav",onClick:this.onChoice.bind(this,e.url)},t("strong",null,e.title)))))}return[t("aside",{key:"9504a9d0bdc6d544ad1e3bad06afcaae38507fdf"},t("header",{key:"4ca6bd07272ffd253ab14c196bf8d7c230eba4c3"},t("h1",{key:"ff14e2ec52f27c1d6aa9202649492ddf1ada1412",class:"post-title"},this.currentPage||this.arttitle)),t("section",{key:"3fc2bb65826523cdf4d7ec87b5cde36501ac8905",id:"tabs"},t("button",{key:"a9e3e45a9c26750e28765309367ecc01e18146b8",class:!this.showNav?"active":"",onClick:this.onContentChange.bind(this,"lesson")},"Lesson"),t("button",{key:"8a4dcfcaed3a61c4fd0fae18cb094d790130a258",class:this.showNav?"active":"",onClick:this.onContentChange.bind(this,"nav")},"Navigation")),t("main",{key:"c379d4b6ab6591d295175395ccb2a0815c4172a0"},e))]}};f.style=h;const b=".controls {\r\n    width: 100%;\r\n    background-color: #555;\r\n    text-align: center;\r\n    transition: all 0.3s ease;\r\n    color: white;\r\n    font-size: 36px;\r\n    margin: auto;\r\n    height: 8vh;\r\n    overflow: hidden;\r\n    /* position: relative; */\r\n    /* display: grid; */\r\n    /* display:flex; */\r\n\r\n    /* justify-content: center; */\r\n    /* align-items: center; */\r\n    font-family:Arial, Helvetica, sans-serif;\r\n\r\n}\r\n\r\nbutton {\r\n    padding: 14px 28px;\r\n    margin: 15px;\r\n    width: 20%\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    padding: 5px 28px;\r\n    margin: 1.5vh;\r\n    width: 15%;\r\n    background: #998f8f;\r\n    cursor: pointer;\r\n    border-radius: 30px\r\n        /* height: 4vh; */\r\n\r\n}\r\n\r\nspan:hover {\r\n    /* background: #0c0a0a; */\r\n    background: #2196F3;\r\n    ;\r\n\r\n}\r\n\r\n.tools {\r\n    margin-top: -2vh;\r\n    /* padding: 5px 28px; */\r\n    position: absolute;\r\n    z-index: 10;\r\n    width: 18%;\r\n    background: #998f8f;\r\n    /* left: 21.65%; */\r\n    left: 31.33%;\r\n    display: none;\r\n    overflow: hidden;\r\n    /* transition: display ease-out 5s; */\r\n    font-size: 32px;\r\n\r\n}\r\n@media(width <= 1440px){\r\n    .tools{\r\n        left: 30.33%;\r\n        width: 19%;\r\n\r\n    }\r\n}\r\n\r\n.nav {\r\n    width: 5%\r\n}\r\n\r\n#tools:hover {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n.mag:hover~.tools {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n\r\n\r\n.controls:has(.tools:hover) #tools {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n\r\n.tools:hover {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n    transition: block ease-in-out 2s;\r\n}";const l=b;const p=class{constructor(t){e(this,t);this.wxccGuidePageTurn=i(this,"wxccGuidePageTurn",7);this.toggleGuide=i(this,"toggleGuide",7);this.wxccTimeWidget=i(this,"wxccTimeWidget",7);this.wxccAuthPop=i(this,"wxccAuthPop",7);this.vidPop=i(this,"vidPop",7);this.vodTog=i(this,"vodTog",7);this.currentPage=undefined}onToggleGuide(){this.toggleGuide.emit()}onNext(){this.wxccGuidePageTurn.emit("next")}onBack(){this.wxccGuidePageTurn.emit("back")}onTimeWidget(){this.wxccTimeWidget.emit()}render(){return t("div",{key:"25e29195bcc21f14f1179de524360f437002c743",class:"controls"},t("span",{key:"c69713131e0ed6acf64913aa4fe153f2dd707164",id:"back",onClick:this.onBack.bind(this),class:"nav btn"},"Back"),t("span",{key:"69e6eb74ee56da45455fc439b8c66b179907b9b9",id:"tools",class:"mag btn"},"Tools"),t("div",{key:"c4fc126e1e23caba2d5b0ea282eb2f6d73b4ab31",class:"tools"},t("span",{key:"ce746b81f7387b9a6a452c8d4f130b04e86c73d3",onClick:this.onTimeWidget.bind(this)},"Time Widget"),t("span",{key:"fd935b97295f3fc10fbc96f4366aeed90f26582e",onClick:()=>{this.vodTog.emit()}},"Toggle Video"),t("span",{key:"d5343aa8765831b5b6f140c5a8aab475d02998a0",onClick:()=>{this.wxccAuthPop.emit()}},"Authorization")),t("span",{key:"5512d14e8e093411dd26b2589a82d7eb73673118",class:"btn",id:"guide",onClick:this.onToggleGuide.bind(this)},"Guide"),t("span",{key:"f960bec77f358d038dacefc8f7baf344f3ae2d72",id:"next",onClick:this.onNext.bind(this),class:"nav btn"},"Next"))}};p.style=l;const u=".frame{position:absolute;z-index:5;height:250px;background:#ccc;left:40%;width:410px}label{color:black}header{background:#2196F3;color:white;text-align:center;padding:10px;margin-top:0}.widgets{padding:10px;margin-top:20px}.title{font-size:1.5rem}.widgets select,.widgets input{float:right}svg{fill:#c0c0c0}svg:hover{fill:#f0efef}.hideMe{float:left;margin-top:.25rem;cursor:pointer}.hidden{display:none}p{margin:1rem}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid  #2196F3;font:inherit;padding:0.15rem 0}#tabs :nth-child(1){border-top-left-radius:20px;border-bottom-left-radius:20px}#tabs :nth-last-child(1){border-top-right-radius:20px;border-bottom-right-radius:20px}#tabs button.active,#tabs button:hover,#tabs button:active{background:#2196F3;color:white;border:1px solid  #2196F3}#tabs button:focus{outline:none}#lup{float:left;padding:1rem}#lup button{float:right;background:white;color:black;border-radius:20px;text-align:center;border:1px solid black;font:inherit;padding:.1rem 1rem;margin-left:.25rem}#lup button:hover{background:#2196F3;color:white}#tmstp{background-color:#e9e7e7}";const g=u;const k=class{constructor(t){e(this,t);this.td=new Date;this.fd=new Date;this.toSelected=undefined;this.fromSelected=undefined;this.tTime=undefined;this.tDate=undefined;this.fTime=undefined;this.fDate=undefined;this.to=undefined;this.from=undefined;this.hide=true;this.tab="create";this.lupStamp=undefined;this.tStamp=undefined}onToSelect(e){console.log(e);if(e==="from"){if(!this.fromSelected.value){console.log(this.fDate.value+"T"+this.fTime.value);this.fd=new Date(this.fDate.value+"T"+this.fTime.value)}else if(this.fromSelected.value==="now"){this.fd=new Date(Date.now())}else{this.fd=new Date(Date.now()-+this.fromSelected.value)}let e=("0"+(this.fd.getMonth()+1)).slice(-2,3);let t=("0"+this.fd.getDate()).slice(-2,3);this.fDate.value=this.fd.getFullYear()+"-"+e+"-"+t;this.fTime.value=this.fd.toTimeString().slice(0,8);this.from=this.fd.valueOf()}else{if(!this.toSelected.value){this.td=new Date(this.tDate.value+"T"+this.tTime.value)}else if(this.toSelected.value==="now"){this.td=new Date(Date.now())}else{this.td=new Date(Date.now()-+this.toSelected.value)}let e=("0"+(this.td.getMonth()+1)).slice(-2,3);let t=("0"+this.td.getDate()).slice(-2,3);this.tDate.value=this.td.getFullYear()+"-"+e+"-"+t;this.tTime.value=this.td.toTimeString().slice(0,8);this.to=this.td.valueOf()}}onManSet(e){if(e==="from"){this.fromSelected.value=null}else{this.toSelected.value=null}this.onToSelect(e)}onToggle(){this.hide=!this.hide;this.tStamp=null}epochToTime(){this.tStamp=new Date(+this.lupStamp.value).toString()}render(){const e=t("svg",{key:"703da3d402f68e9e30be970b34042404ad3ab7a4",xmlns:"http://www.w3.org/2000/svg",height:"20",width:"17.5",viewBox:"0 0 640 512"},t("path",{key:"2297e2243e7390de6a6b483392bfbf7caf8a9f39",d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z"}));let i=t("div",{key:"f364d4350288d6e0d26a6a1d281f94fc90232066"}," ",t("section",{key:"5377ba55beead18bd912c14f05c9692d450373b9",class:"widgets"},t("div",{key:"2afe2273e7685f79e1eabdf154d1a8f0e5abf3de"},t("label",{key:"7ac1c5209ee0af8c44a1659eff5027c72cc6432e",id:"from"},"From: "),t("input",{key:"f54cf44c92416a840d20dfe0f177db5db470cea4",type:"date",onChange:this.onManSet.bind(this,"from"),ref:e=>this.fDate=e}),t("input",{key:"fae136494fc3c877854ad9c5456666ba3a54fb88",type:"time",onChange:this.onManSet.bind(this,"from"),ref:e=>this.fTime=e}),t("select",{key:"83df687abcf2467839ba3579c0efb09923ba10e5",ref:e=>this.fromSelected=e,onChange:this.onToSelect.bind(this,"from")},t("option",{key:"950f7464aa969344ab557c2bf904c9a98dd8f340"}),t("option",{key:"2275b4e77c0b23411cc8a4ff9c29e01be1a04dbb",value:"600000"},"10 minutes ago"),t("option",{key:"20d8ea78a04831e7e03cf8a9f167a6fb0621ffae",value:"3600000"},"1 hour ago"),t("option",{key:"d5a8481e73a2fe2e739a2192e1b6d2af20312506",value:"86400000"},"1 day ago"),t("option",{key:"e65c147f161ec2cf50266a45fcc4c474f9a87e86",value:"604800000"},"1 week ago"),t("option",{key:"59230e509e89c239d9b1a301ecab49d0fffb1a8c",value:"2629800000"},"1 month ago"))),t("br",{key:"f7c2d969f751edf20a622e2afccb2fce689f88c4"}),t("div",{key:"649b3b8e9b6c807291d7556f242987c0b09f6c67"},t("label",{key:"874d195ae2082b06806f12a457ca54d5f14c9164",id:"to"},"To: "),t("input",{key:"7c363d95babc39d37e39fbef9ad83164ac4b806f",type:"date",onChange:this.onManSet.bind(this,"to"),ref:e=>this.tDate=e}),t("input",{key:"587daa13d23c6fd202eaf01c523bd5e6bc5cf61b",type:"time",onChange:this.onManSet.bind(this,"to"),ref:e=>this.tTime=e}),t("select",{key:"db4ace5f16c55f63bcf3ae1f72b54817dec0b279",ref:e=>this.toSelected=e,onChange:this.onToSelect.bind(this,"to")},t("option",{key:"6e024aac1a34620a6a0ea17cca95932434b62337"}),t("option",{key:"ed3e75d8ca2d97314000670f66585d12be16f5a5",value:"now"},"Now"),t("option",{key:"f4dba7047a04f7ba0bee9515990da150e5681f09",value:"600000"},"10 minutes ago"),t("option",{key:"f94e5b61b6beda837422e8d44a283f785b895f69",value:"3600000"},"1 hour ago"),t("option",{key:"3232c929de0ba2bdc3a6456e9a32229e31f3efb5",value:"86400000"},"1 day ago"),t("option",{key:"68cef4719fbc00e71df708dab8fbf7b51a1f3cb9",value:"604800000"},"1 week ago")))),t("section",{key:"83325d470551639ccea41074b993cfa93f15f8ff"},t("p",{key:"53056599f7f21d0f13544c45bf97015ad8dd80e9"},'from: "',this.from,'"',t("br",{key:"9faf4c0b586770165fb271538099c6cb365a3850"}),'to: "',this.to,'"')));if(this.tab=="lookup"){i=t("div",{key:"8b091bcf95e290a2d6a7e466276ad8bcb7708192"},t("section",{key:"1cb77b24bc74b88fb60a47c14dd958c87ba337b2",id:"lup"},t("label",{key:"638490e570f306683763558342aca5449e3ea71b"},"Epoch Timestamp:  "),t("input",{key:"8e513edd5f6fa6929451820c280218199f299ff5",ref:e=>this.lupStamp=e}),t("button",{key:"86b5cfb66835ab59e8966782cc81ca820731be40",onClick:this.epochToTime.bind(this)},"Convert")),t("section",{key:"73a83beb13d32faa5fff8ea5259f7073fa996834"},t("p",{key:"5f5c7f2c5bc8d0da79cb5089e4ffd53492d0e7ba"},"Timestamp: ",t("br",{key:"8c397fd5ddf8224266241c2672043573b77a712d"}),t("br",{key:"5e863f76c327aaeb538515c41e3b6b9612145c2f"}),t("div",{key:"bced169da0ad6f52ef76aa610477df8423c2bec3",id:"tmstp"},this.tStamp))))}return[t("div",{key:"3d917ffba1114e232d3c4639d734ccbe67b272e6",class:"frame"+(this.hide?" hidden":"")},t("header",{key:"e79fbae861aad47d143eff2b1dae014837bd0b5c"},t("span",{key:"e9ab095c2a8f0a0252e3c6c850250c6d92f991c1",class:"hideMe",onClick:this.onToggle.bind(this)},e),t("div",{key:"a9c91abbe125ecb651a0a77e9f5457c153ad8f7b",class:"title"},"Time Widget")),t("section",{key:"c6c7805ad7b0f9406c3824f5db61665658538ea1",id:"tabs"},t("button",{key:"e90f759c3ff693e968661c28aaa10e7b36cc6546",class:this.tab!="lookup"?"active":"",onClick:()=>this.tab="create"},"Create"),t("button",{key:"86ed22d03622fd67b7226e3424b34ed930cc10b7",class:this.tab=="lookup"?"active":"",onClick:()=>this.tab="lookup"},"Lookup")),i)]}};k.style=g;const y="#cover{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:9;display:none;opacity:0;transition:opacity 0.5s ease-out}#cover.covered{display:block}#my-div{position:absolute;z-index:200;background-color:#f1f1f1;text-align:center;border:1px solid #d3d3d3;top:25%;left:25%}#my-div-header{padding:10px;z-index:10;background-color:#2196F3;color:#fff;height:20px}.sizeBar{float:right;cursor:pointer}.bigBoi{width:50%;height:50%}.hidden{display:none}.hideMe{float:right;cursor:pointer}#move{float:left;cursor:grab}svg{fill:#c0c0c0}svg:hover{fill:#f0efef;}";const m=y;const w=class{constructor(t){e(this,t);this.vidBig=true;this.btnLable="Bigger";this.vidId=undefined;this.backDrop=false;this.hide=false}onToggleSize(){this.vidBig=!this.vidBig}onToggleHide(){this.hide=!this.hide}onVidPop(e){console.log(e);if(e.detail){console.log(e);this.vidId=e.detail}this.hide=false}moveIt(e){e.preventDefault();this.boxxie.style.top=Math.abs(e["clientY"])+"px";this.boxxie.style.left=Math.abs(e["clientX"])+"px";this.backDrop=false}render(){let e=`https://app.vidcast.io/share/embed/${this.vidId}`;this.btnLable=this.vidBig?t("div",null,t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",width:"17.5",viewBox:"0 0 448 512"},t("path",{d:"M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"}))," "):t("div",null," ",t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",width:"17.5",viewBox:"0 0 448 512"},t("path",{d:"M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"}))," ");return[t("div",{key:"0a371030387a373bbdfb68d7c2276bb84212bed4",id:"cover",class:this.backDrop?"covered":""}),t("div",{key:"70cc6c985e83e8847a1840bdd9edc09a7bbeef53",draggable:true,id:"my-div",ref:e=>this.boxxie=e,onDragStart:()=>{this.backDrop=true},onDragEnd:this.moveIt.bind(this),class:(this.vidBig?"bigBoi":"")+(this.hide?" hidden":"")},t("div",{key:"64c27fe08a56b1cdeaf734cb473c01992b79c526",id:"my-div-header"},t("span",{key:"2c81b6dcb534c3a8ac94517a8ef71d9c1b98b58c",class:"hideMe",onClick:this.onToggleHide.bind(this)},t("svg",{key:"cfe14e7f24faa351d1dcf93098fdcfbfe5555716",xmlns:"http://www.w3.org/2000/svg",height:"20",width:"17.5",viewBox:"0 0 640 512"},t("path",{key:"3ad1cacae31eb0930b03a76e99571c784ac94e74",d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z"}))),t("svg",{key:"62aa8e699dbb8d0454dce78133221a4bfa7052a2",id:"move",xmlns:"http://www.w3.org/2000/svg",height:"20",width:"20",viewBox:"0 0 512 512"},t("path",{key:"c39863e8e90e19328fcefbe9c28c2c2e9fc73536",d:"M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4V224H109.3l9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4H224V402.7l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4V288H402.7l-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4H288V109.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z"})),t("span",{key:"21d79b2cd23baa2d639e460a80a372be7244c8c7",class:"sizeBar",onClick:this.onToggleSize.bind(this)},this.btnLable)),t("iframe",{key:"f8119e810f98341c60766e88109e46182238d979",src:e,height:"100%",width:"100%",frameborder:"0",loading:"lazy",allowFullScreen:true}))]}};w.style=m;export{c as wxcc_altair,o as wxcc_auth_demo_widget,f as wxcc_guide_panel,p as wxcc_page_controls,k as wxcc_time,w as wxcc_video_modal};
//# sourceMappingURL=p-d4405d70.entry.js.map