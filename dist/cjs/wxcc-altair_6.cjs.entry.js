'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62e43576.js');

const wxccAltairCss = "#frame{height:92vh;bottom:0}";
const WxccAltairStyle0 = wxccAltairCss;

const wxccAltair = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '2c61a09b55eacd0b6bb1038d1edacaf2d14841cc', id: "frame" }, index.h("iframe", { key: '75b282f3c84c55a971e66401d8fe39d8ec16df24', src: "https://altair-gql.sirmuel.design/", height: "100%", width: "100%", frameborder: "0", loading: "lazy" })));
    }
};
wxccAltair.style = WxccAltairStyle0;

const wxccAuthDemoWidgetCss = ".frame{position:absolute;z-index:5;height:25vh;background:#ccc;left:20%;top:50%;padding:2em;width:60%}h1{text-align:center}.hidden{display:none}";
const WxccAuthDemoWidgetStyle0 = wxccAuthDemoWidgetCss;

const wxccAuth = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.token = undefined;
        this.expStamp = undefined;
        this.hide = true;
        this.callbackUrl = undefined;
        this.deets = undefined;
        this.request = undefined;
        this.showResponse = false;
    }
    async burp(x) {
        console.log(x);
        const code = x.slice(x.search("=") + 1, x.search("&"));
        // console.log(code)
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // let urlencoded = new URLSearchParams();
        // urlencoded.append("grant_type", "authorization_code")
        // urlencoded.append("redirect_uri", this.callbackUrl)
        // urlencoded.append("client_id", "C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f")
        // urlencoded.append("client_secret", "49aad1cd3ed0758755c69d818baf897923876854423dbc01d608fc8255d14044")
        // urlencoded.append("code", code)
        let urlencoded = { "grant_type": "authorization_code", "redirect_uri": this.callbackUrl, "client_id": "C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f", "client_secret": "49aad1cd3ed0758755c69d818baf897923876854423dbc01d608fc8255d14044", "code": code };
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(urlencoded)
        };
        // console.log(urlencoded.toString())
        this.request = urlencoded; //.toString() //.replace(/["&"]/g,"\r\n")
        let response = await fetch("https://webexapis.com/v1/access_token", requestOptions);
        this.deets = await response.json();
        // console.log(await this.deets)
        this.token = "Bearer " + this.deets.access_token;
        this.expStamp = new Date(Date.now() + (this.deets.expires_in * 1000));
        // sessionStorage.setItem("token", this.token)
        // sessionStorage.setItem("expStamp", this.expStamp)
        // console.log(this.token)
        // console.log(this.expStamp)
        this.hide = false;
        this.showResponse = false;
    }
    onGetAuth() {
        if (+new Date(sessionStorage.getItem("expStamp")) > Date.now()) {
            this.token = sessionStorage.getItem("token");
            this.hide = false;
            this.showResponse = false;
        }
        else {
            window.open(`https://webexapis.com/v1/authorize?response_type=code&client_id=C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f&state=new&scope=cjp%3Aconfig%20cjp%3Aconfig_read%20cjp%3Aconfig_write&redirect_uri=${this.callbackUrl}`, "steve", "popup");
        }
    }
    render() {
        let tok;
        if (this.request) {
            tok = index.h("p", { key: '76cfff11222876b763227b5cf8ae6036148954c0' }, index.h("h1", { key: '6fb95434270d6a2fe0093af8ab5f9193a184fef2' }, "The code is sent with this information from the app "), "grant_type: ", this.request.grant_type, index.h("br", { key: '74bfb40589468a84122e33bad349e118af032ce7' }), "redirect_uri: ", this.request.redirect_uri, index.h("br", { key: 'f29b4667a6b7c0a26c24bafb8c461ecf0a2946bc' }), "client_id: ", this.request.client_id, index.h("br", { key: 'a1a7691b92bf1348769e29efb1f492fc2f25d414' }), "client_secret: ", this.request.client_secret, index.h("br", { key: 'c9732e2a0b149fb74d3989354d7731cb61b21595' }), index.h("strong", { key: '80e2bc17d5919db1eb261e50350fd3e376ae6d61' }, "code:", this.request.code), index.h("br", { key: '386edaf72a6d4fec7a6d5da6173374b1bd690d13' }));
            if (this.showResponse) {
                tok = index.h("p", { key: '5bb0e2432bde6822b821ad442a654b8ce8d4bf81' }, index.h("h1", { key: 'aca73ca9dbf95f11e49be060531e1d5a79c85142' }, "This is the response with the token information "), "access_token: ", this.deets.access_token, index.h("br", { key: '80a67649cacc1c5c12554e73d4309ed623be2c03' }), "expires_in: ", this.deets.expires_in, index.h("br", { key: '0be235acf34bf1de24d5f3949ee09cee5e05b9e7' }), "refresh_token: ", this.deets.refresh_token, index.h("br", { key: 'f8c8cafdba4944aa50e3b3193eae5c7aabf76924' }), "refresh_token_expires_in: ", this.deets.refresh_token_expires_in, index.h("br", { key: 'd4dccec318508e4b02611af4ce60bbf4a3f5423b' }), "token_type: ", this.deets.token_type, index.h("br", { key: '34f77777f333b27ec60eeb05256b77e19fb8a951' }), "scope: ", this.deets.scope);
            }
        }
        // deets: ${JSON.stringify(this.deets)}
        // {
        //     "headers":{
        //     "Authorization":"${this.token}"
        //     }
        // }`
        return [
            index.h("div", { key: '7d0d0b7a97804b99564a5939a6d64fb9ad48b397', class: "frame" + (this.hide ? " hidden" : "") }, index.h("p", { key: 'cbf5252bffb015e4a6b0704f48b9120dc8700fda' }, tok), index.h("button", { key: '7254d54eaf39767d2df54c273a3efd44c7a467bf', onClick: () => { this.showResponse = !this.showResponse; } }, this.showResponse ? "Show Request" : "Show Response"), index.h("button", { key: '52b2c2aec29e4b488dfc11bff736a6b82ae33556', onClick: () => { this.hide = !this.hide; } }, "close"))
        ];
    }
};
wxccAuth.style = WxccAuthDemoWidgetStyle0;

const wxccGuidePanelCss = "aside{position:fixed;bottom:0;right:-100%;width:40rem;max-width:34%;height:92vh;background:#d6c5c5;box-shadow:0 2px 8px rgba(0, 0, 0, 0.27);transition:right 1.3s ease-out;z-index:2;overflow:scroll}:host([flip]) aside{position:fixed;bottom:0;left:-100%;width:40rem;max-width:34%;height:92vh;background:#d6c5c5;box-shadow:0 2px 8px rgba(0, 0, 0, 0.27);transition:left 1.3s ease-out;z-index:2;overflow:scroll}:host([opened]) aside{right:0}:host([opened][flip]) aside{left:0;}main slot{margin:1rem}.flipper{float:right}.post-header{display:none;}header{display:block;padding:1rem;background:#2196F3;position:fixed;top:8%;width:31.75%}h1.post-title{font-size:1.5rem;color:white;margin:0}.post-content{margin:1em}h1{font-size:1.5rem;margin:0}header button{position:absolute;top:0;right:0;padding:1rem;color:white;background:transparent;font-size:1.5rem;border:none}header button:focus{outline:none}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;padding-top:4rem}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid  #2196F3;font:inherit;padding:0.15rem 0}#tabs :nth-child(1){border-top-left-radius:20px;border-bottom-left-radius:20px}#tabs :nth-last-child(1){border-top-right-radius:20px;border-bottom-right-radius:20px}#tabs button.active,#tabs button:hover,#tabs button:active{background:#2196F3;color:white;border:1px solid #2196F3}#tabs button:focus{outline:none}#contact-information{padding:0 1rem}.site-header,.site-footer,.book-header,.book-summary,.search-results{display:none}ul.nav{margin:1em;padding:0;list-style:none}li.nav{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li.nav:hover,li.nav:active{background:#2196F3;color:white}svg{fill:#c0c0c0;height:20px;width:80px}svg:hover{fill:#f0efef;}.btn{border-radius:30px;padding:5px 10px;border:1px #2196F3}.btn:hover{background:#2196F3;color:white}table td,table th{border:1px solid #404040}table{border-collapse:collapse}";
const WxccGuidePanelStyle0 = wxccGuidePanelCss;

const SideDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showNav = false;
        this.arttitle = undefined;
        this.opened = undefined;
        this.flip = undefined;
        this.content = undefined;
        this.lessons = [];
        this.currentPage = undefined;
        this.lList = undefined;
        this.lastScroll = 0;
    }
    async componentWillLoad() {
        const response = await fetch(this.lList);
        // sessionStorage.setItem("lessons", await response.text())
        const lessons = await response.json();
        this.lessons = await lessons.map(match => {
            return { title: match["title"], url: match["address"] };
        });
    }
    // onCloseDrawer(){
    //     this.opened=false;
    // }
    onContentChange(content) {
        this.showNav = content === "nav";
        // console.log(content)
    }
    // @Method()
    // async open(){
    //   this.opened=true 
    // }
    onToggle(event) {
        console.log(event.detail);
        this.opened = !this.opened;
    }
    onNext(event) {
        //  console.log(event.detail)
        let url;
        const iHere = this.lessons.findIndex(x => x.title === this.currentPage);
        if (!iHere) {
            this.currentPage = this.lessons[0].title;
        }
        //  console.log(this.currentPage)
        //  console.log(iHere)
        // this.currentPage = this.lessons[iHere + 1].title
        if (event.detail === "next") {
            url = this.lessons[iHere + 1].url;
            this.currentPage = this.lessons[iHere + 1].title;
            this.lastScroll = document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop;
            document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop = 0;
        }
        else {
            url = this.lessons[iHere - 1].url;
            this.currentPage = this.lessons[iHere - 1].title;
            document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop = this.lastScroll;
        }
        this.getHTML(url)
            .then(html => {
            if (html !== null) {
                this.content = html;
                this.content = index.h("div", { innerHTML: this.content });
                // console.log(html);
            }
        });
        this.showNav = false;
    }
    onChoice(url) {
        this.getHTML(url)
            .then(html => {
            if (html !== null) {
                this.content = html;
                this.content = index.h("div", { innerHTML: this.content });
                this.currentPage = this.lessons[this.lessons.findIndex(x => x.url === url)].title;
                this.showNav = false;
            }
        });
    }
    async getHTML(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const html = await response.text();
            return html;
        }
        catch (error) {
            console.error("Error during fetch:", error);
            return null;
        }
    }
    componentDidUpdate() {
        Array.from(document.querySelector("wxcc-guide-panel").shadowRoot.querySelectorAll("textarea")).forEach((element) => { element.value = element.value.replaceAll("\\", ""); });
        // document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop=0 
        // Remove style css from jekyll site
        document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("link[rel=stylesheet]").remove();
    }
    render() {
        const fIcon = index.h("svg", { key: '785f49a45583c475ac9390a80c177f28ce0849e7', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, index.h("path", { key: 'b3ff7b357ae4b75b774afd3c685add5ab39ccbb4', d: "M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z" }));
        let mainContent = this.content || index.h("slot", { key: '9e5afd3b33f0742d359a7df28a9b1d1298f4888f' });
        if (this.showNav) {
            mainContent = index.h("ul", { key: 'cc54d4382d70571707888dc09939b4bb8eda4c5b', class: "nav" }, this.lessons.map(lesson => (index.h("li", { class: "nav", onClick: this.onChoice.bind(this, lesson.url) }, index.h("strong", null, lesson.title)))));
        }
        return [
            // <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}/>,
            index.h("aside", { key: '53003b7470f3fcf82779e46bf90282142c997c3b' }, index.h("header", { key: 'e4f0126ad18f4a8e91728258c97edd944a8957c9' }, index.h("h1", { key: '688e98a2a7d0ebe657bd9fa720068e826805c39e', class: "post-title" }, this.currentPage || this.arttitle, " ", index.h("span", { key: 'fe5564506ae2a1b1cf417c375cf0b194c2fed0d9', class: "flipper", onClick: () => this.flip = !this.flip }, fIcon))), index.h("section", { key: '30ec08e3c769ccb99f84eda21fddf331396c398d', id: "tabs" }, index.h("button", { key: 'ba1f26d49770748687e414cb4fa9b237e7569bd7', class: !this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "lesson") }, "Lesson"), index.h("button", { key: 'ab6997d0f33ec3d571dafcbe5ab4b803d68f7ba5', class: this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "nav") }, "Navigation")), index.h("main", { key: '5c4fabf0b7cc05b2a4ddd9d79d0eb85e7ed1a5f7' }, mainContent))
        ];
    }
};
SideDrawer.style = WxccGuidePanelStyle0;

const wxccPageControlsCss = ".controls {\r\n    width: 100%;\r\n    background-color: #555;\r\n    text-align: center;\r\n    transition: all 0.3s ease;\r\n    color: white;\r\n    font-size: 36px;\r\n    margin: auto;\r\n    height: 8vh;\r\n    overflow: hidden;\r\n    /* position: relative; */\r\n    /* display: grid; */\r\n    /* display:flex; */\r\n\r\n    /* justify-content: center; */\r\n    /* align-items: center; */\r\n    font-family:Arial, Helvetica, sans-serif;\r\n\r\n}\r\n\r\nbutton {\r\n    padding: 14px 28px;\r\n    margin: 15px;\r\n    width: 20%\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    padding: 5px 28px;\r\n    margin: 1.5vh;\r\n    width: 15%;\r\n    background: #998f8f;\r\n    cursor: pointer;\r\n    border-radius: 30px\r\n        /* height: 4vh; */\r\n\r\n}\r\n\r\nspan:hover {\r\n    /* background: #0c0a0a; */\r\n    background: #2196F3;\r\n    ;\r\n\r\n}\r\n\r\n.tools {\r\n    margin-top: -2vh;\r\n    /* padding: 5px 28px; */\r\n    position: absolute;\r\n    z-index: 10;\r\n    width: 18%;\r\n    background: #998f8f;\r\n    /* left: 21.65%; */\r\n    left: 31.33%;\r\n    display: none;\r\n    overflow: hidden;\r\n    /* transition: display ease-out 5s; */\r\n    font-size: 32px;\r\n\r\n}\r\n@media(width <= 1440px){\r\n    .tools{\r\n        left: 30.33%;\r\n        width: 19%;\r\n\r\n    }\r\n}\r\n\r\n.nav {\r\n    width: 5%\r\n}\r\n\r\n#tools:hover {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n.mag:hover~.tools {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n\r\n\r\n.controls:has(.tools:hover) #tools {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n\r\n.tools:hover {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n    transition: block ease-in-out 2s;\r\n}";
const WxccPageControlsStyle0 = wxccPageControlsCss;

const PageControls = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.wxccGuidePageTurn = index.createEvent(this, "wxccGuidePageTurn", 7);
        this.toggleGuide = index.createEvent(this, "toggleGuide", 7);
        this.wxccTimeWidget = index.createEvent(this, "wxccTimeWidget", 7);
        this.wxccAuthPop = index.createEvent(this, "wxccAuthPop", 7);
        this.vidPop = index.createEvent(this, "vidPop", 7);
        this.vodTog = index.createEvent(this, "vodTog", 7);
        this.currentPage = undefined;
    }
    onToggleGuide() {
        this.toggleGuide.emit();
    }
    onNext() {
        // let iHere = this.lessons.findIndex(x => x.title === this.currentPage)
        // if (!iHere){
        //     this.currentPage = this.lessons[0].title
        // }
        // console.log(this.currentPage)
        // console.log(iHere)
        // this.currentPage = this.lessons[iHere + 1].title
        // const url = this.lessons[iHere + 1].address
        // this.wxccGuidePageTurn.emit(url)
        this.wxccGuidePageTurn.emit("next");
    }
    onBack() {
        // let iHere = this.lessons.findIndex(x => x.title === this.currentPage)
        // if (!iHere){
        //     this.currentPage = this.lessons[0].title
        // }
        // console.log(this.currentPage)
        // console.log(iHere)
        // this.currentPage = this.lessons[iHere - 1].title
        // const url = this.lessons[iHere - 1].address
        // this.wxccGuidePageTurn.emit(url)
        this.wxccGuidePageTurn.emit("back");
    }
    onTimeWidget() {
        this.wxccTimeWidget.emit();
    }
    render() {
        // console.log(this.lessons[0])
        return (index.h("div", { key: 'f60b293f722588fcfbb347c9e846653105eaf34f', class: "controls" }, index.h("span", { key: '56c6c36db9092c3efc7f8a9e8f18289b3eb0d128', id: "back", onClick: this.onBack.bind(this), class: "nav btn" }, "Back"), index.h("span", { key: 'f372c88b0988b9d4025d7069f4335106566d941e', id: "tools", class: "mag btn" }, "Tools"), index.h("div", { key: '5ab3045c0fe5fa48007d17a45f5f9a248c8f01e9', class: "tools" }, index.h("span", { key: 'e94f6869bf36a98b8c1c8a43f6011ddd679750c4', onClick: this.onTimeWidget.bind(this) }, "Time Widget"), index.h("span", { key: 'c5502fc835443b1239aac553c275835f4158c8c0', onClick: () => { this.vodTog.emit(); } }, "Toggle Video"), index.h("span", { key: '48056414914cf8c2321307cc0155025ecbacf4ee', onClick: () => { this.wxccAuthPop.emit(); } }, "Authorization")), index.h("span", { key: '713b811463419772358327663214b03c4979decc', class: "btn", id: "guide", onClick: this.onToggleGuide.bind(this) }, "Guide"), index.h("span", { key: 'e771ccf18f615c42f6866dac417543e7b81d7c97', id: "next", onClick: this.onNext.bind(this), class: "nav btn" }, "Next")));
    }
};
PageControls.style = WxccPageControlsStyle0;

const wxccTimeCss = ".frame{position:absolute;z-index:5;height:250px;background:#ccc;left:40%;width:410px}label{color:black}header{background:#2196F3;color:white;text-align:center;padding:10px;margin-top:0}.widgets{padding:10px;margin-top:20px}.title{font-size:1.5rem}.widgets select,.widgets input{float:right}svg{fill:#c0c0c0}svg:hover{fill:#f0efef}.hideMe{float:left;margin-top:.25rem;cursor:pointer}.hidden{display:none}p{margin:1rem}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid  #2196F3;font:inherit;padding:0.15rem 0}#tabs :nth-child(1){border-top-left-radius:20px;border-bottom-left-radius:20px}#tabs :nth-last-child(1){border-top-right-radius:20px;border-bottom-right-radius:20px}#tabs button.active,#tabs button:hover,#tabs button:active{background:#2196F3;color:white;border:1px solid  #2196F3}#tabs button:focus{outline:none}#lup{float:left;padding:1rem}#lup button{float:right;background:white;color:black;border-radius:20px;text-align:center;border:1px solid black;font:inherit;padding:.1rem 1rem;margin-left:.25rem}#lup button:hover{background:#2196F3;color:white}#tmstp{background-color:#e9e7e7}";
const WxccTimeStyle0 = wxccTimeCss;

const wxccTime = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.td = new Date();
        this.fd = new Date();
        this.toSelected = undefined;
        this.fromSelected = undefined;
        this.tTime = undefined;
        this.tDate = undefined;
        this.fTime = undefined;
        this.fDate = undefined;
        this.to = undefined;
        this.from = undefined;
        this.hide = true;
        this.tab = "create";
        this.lupStamp = undefined;
        this.tStamp = undefined;
    }
    onToSelect(zzz) {
        console.log(zzz);
        if (zzz === "from") {
            if (!this.fromSelected.value) {
                console.log(this.fDate.value + "T" + this.fTime.value);
                this.fd = new Date(this.fDate.value + "T" + this.fTime.value);
            }
            else if (this.fromSelected.value === "now") {
                this.fd = new Date(Date.now());
            }
            else {
                this.fd = new Date(Date.now() - +this.fromSelected.value);
            }
            // this.fDate.value = this.fd.toISOString().slice(0, 10)
            let month = ("0" + (this.fd.getMonth() + 1)).slice(-2, 3);
            let date = ("0" + (this.fd.getDate())).slice(-2, 3);
            // console.log(month)
            this.fDate.value = (this.fd.getFullYear() + "-" + month + "-" + date);
            this.fTime.value = this.fd.toTimeString().slice(0, 8);
            this.from = this.fd.valueOf();
        }
        else {
            if (!this.toSelected.value) {
                this.td = new Date(this.tDate.value + "T" + this.tTime.value);
            }
            else if (this.toSelected.value === "now") {
                this.td = new Date(Date.now());
            }
            else {
                this.td = new Date(Date.now() - +this.toSelected.value);
            }
            // this.tDate.value = this.td.toISOString().slice(0, 10)
            let month = ("0" + (this.td.getMonth() + 1)).slice(-2, 3);
            let date = ("0" + (this.td.getDate())).slice(-2, 3);
            // console.log(month)
            this.tDate.value = (this.td.getFullYear() + "-" + month + "-" + date);
            this.tTime.value = this.td.toTimeString().slice(0, 8);
            this.to = this.td.valueOf();
            // console.log(this.td.getDate())
        }
    }
    onManSet(zzz) {
        if (zzz === "from") {
            this.fromSelected.value = null;
        }
        else {
            this.toSelected.value = null;
        }
        this.onToSelect(zzz);
    }
    onToggle() {
        this.hide = !this.hide;
        this.tStamp = null;
    }
    epochToTime() {
        this.tStamp = new Date(+this.lupStamp.value).toString();
    }
    render() {
        const hideIcon = index.h("svg", { key: 'd381be7ebe9aaef11cb26e1cd8fcbf7e891e5d5d', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 640 512" }, index.h("path", { key: '9c68a4da70e3d6efb7b47d92dfe02184c9bdbf63', d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" }));
        let mainContent = index.h("div", { key: '8a31f9258300775817c5616d528bcb124cf222f9' }, " ", index.h("section", { key: '1db33c3d589c0a06cee12dde60727b04d60e5b0c', class: "widgets" }, index.h("div", { key: '2ab15127a5e234e599a6d49f7a3e8300aa6c50ec' }, index.h("label", { key: '45e78dc0f80e925765b3bb4b03420a09e1908f55', id: "from" }, "From: "), index.h("input", { key: 'c376054de5cb140f644e8f9a141cd5372f13316b', type: "date", onChange: this.onManSet.bind(this, "from"), ref: el => this.fDate = el }), index.h("input", { key: '0ea8825ed5816f2cbb7e057743ac709f0dfd94a2', type: "time", onChange: this.onManSet.bind(this, "from"), ref: el => this.fTime = el }), index.h("select", { key: 'ecab1ad3f2356f0eab8d122001e1ca88031261f7', ref: el => this.fromSelected = el, onChange: this.onToSelect.bind(this, "from") }, index.h("option", { key: 'f9c9b08ce9052afbe9e2e1bd44f41448c1a6ba7b' }), index.h("option", { key: 'f5273427f80a67272dd50b88f3e278ac10a2b5cb', value: "600000" }, "10 minutes ago"), index.h("option", { key: 'f3d7fde1d789cc1f1036508bc58585c475c0f95d', value: "3600000" }, "1 hour ago"), index.h("option", { key: '122f9e9d169693d7a5b41a4dcb0d59218c0e711f', value: "86400000" }, "1 day ago"), index.h("option", { key: '7eeab1cd2a6b8cc84851f8b39a6d5970193f322f', value: "604800000" }, "1 week ago"), index.h("option", { key: '845a3b10612d459a6916cb63c3a6463c5c9a654f', value: "2629800000" }, "1 month ago"))), index.h("br", { key: '77789ca0df8cc7ff439e9aad0969277c4839389d' }), index.h("div", { key: 'f1edecbc528466eb25d847fac38dd6c3716435ed' }, index.h("label", { key: 'cb0468aea4f1ee37fa4228eb4b9a15e9246be117', id: "to" }, "To: "), index.h("input", { key: 'b113e1612a9855f04a66983c17a326e9d614e230', type: "date", onChange: this.onManSet.bind(this, "to"), ref: el => this.tDate = el }), index.h("input", { key: 'a108bf956658b7a07ad773187991492e7c6bb385', type: "time", onChange: this.onManSet.bind(this, "to"), ref: el => this.tTime = el }), index.h("select", { key: '67e22b288237cc1130977093597c15cbf435e175', ref: el => this.toSelected = el, onChange: this.onToSelect.bind(this, "to") }, index.h("option", { key: 'b46e57b78882b17e73badd9863f91ffc37c3d44f' }), index.h("option", { key: '1a5bd5979e93c52417c6ac2f9be2692648610ef3', value: "now" }, "Now"), index.h("option", { key: '8dc9b8638d11711b5fd284623f2efbea8b4e15e4', value: "600000" }, "10 minutes ago"), index.h("option", { key: '248d97c61615de12a26c2984555c4d04c4085485', value: "3600000" }, "1 hour ago"), index.h("option", { key: '91de30f5db3e3de5559aefb91b5eef2ee1b8fdf8', value: "86400000" }, "1 day ago"), index.h("option", { key: '6c4b737f8e269ac7994512d9cb334d5e9ea5899a', value: "604800000" }, "1 week ago")))), index.h("section", { key: '4e954780d3901b290600f7c004cb66d2ed207734' }, index.h("p", { key: 'dda8d5b245675fc33fb06e792d6534fd86454fca' }, "from: \"", this.from, "\"", index.h("br", { key: 'b2380958acacb90a44d2ba842f3f005da0aa33c7' }), "to: \"", this.to, "\"")));
        if (this.tab == "lookup") {
            mainContent = index.h("div", { key: 'e9ff32ff5b7feb8813640ce36c3f71353c27c6d0' }, index.h("section", { key: '51efee1e502da886d88c5f7a212eeab7b14cf2d6', id: "lup" }, index.h("label", { key: '0a41eae4cd477b1b15da6742589d1fddb7c494a3' }, "Epoch Timestamp: \u00A0"), index.h("input", { key: '05e424af57be6b8e9560e16082a586afd69e276b', ref: el => this.lupStamp = el }), index.h("button", { key: 'c595f740b14f66d33e3c9800054ad9243f7783f1', onClick: this.epochToTime.bind(this) }, "Convert")), index.h("section", { key: '956f6de2b509cb5968af38cab795a5b031e7c69e' }, index.h("p", { key: '0f343a9acc01aef5cb9fd596ec19d3d01da52912' }, "Timestamp: ", index.h("br", { key: '37711be0cd14b46da745fafa767398b893797be8' }), index.h("br", { key: 'e07f6419b80e34c0cfbf85f5e1f9358c5408a3a3' }), index.h("div", { key: '033d9a404f85971933872d0454dd48130284cb97', id: "tmstp" }, this.tStamp))));
        }
        return [
            index.h("div", { key: '219b19a38efbdd7092f574b67a807af754c58011', class: "frame" + (this.hide ? " hidden" : "") }, index.h("header", { key: 'ef4d3127e2a3e94ceb88989c8a405da52bf3a869' }, index.h("span", { key: '07b69ed72757899c7f209f987911f95f4e322bdb', class: "hideMe", onClick: this.onToggle.bind(this) }, hideIcon), index.h("div", { key: 'f172eb198e07c0a296ec6e5e63f19848dc2dab67', class: "title" }, "Time Widget")), index.h("section", { key: '8f6f55e603f461c77bf3c47202f3981412c8d507', id: "tabs" }, index.h("button", { key: '5834ccc68aa371ac8ee56af729523aab3b76fcac', class: this.tab != "lookup" ? "active" : "", onClick: () => this.tab = "create" }, "Create"), index.h("button", { key: '34da2ec0f2fe3888d3f31ed9ddd435d5f2099d5f', class: this.tab == "lookup" ? "active" : "", onClick: () => this.tab = "lookup" }, "Lookup")), mainContent)
        ];
    }
};
wxccTime.style = WxccTimeStyle0;

const wxccVideoModalCss = "#cover{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:9;display:none;opacity:0;transition:opacity 0.5s ease-out}#cover.covered{display:block}#my-div{position:absolute;z-index:200;background-color:#f1f1f1;text-align:center;border:1px solid #d3d3d3;top:25%;left:25%}#my-div-header{padding:10px;z-index:10;background-color:#2196F3;color:#fff;height:20px}.sizeBar{float:right;cursor:pointer}.bigBoi{width:50%;height:50%}.hidden{display:none}.hideMe{float:right;cursor:pointer}#move{float:left;cursor:grab}svg{fill:#c0c0c0}svg:hover{fill:#f0efef;}";
const WxccVideoModalStyle0 = wxccVideoModalCss;

const wxccVideoModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.vidBig = true;
        this.btnLable = "Bigger";
        this.vidId = undefined;
        this.backDrop = false;
        this.hide = false;
    }
    onToggleSize() {
        this.vidBig = !this.vidBig;
        // this.btnLable =  this.vidBig ? "Smaller": "Bigger"
    }
    onToggleHide() {
        this.hide = !this.hide;
    }
    // backDrop(event: Event){
    // this.boxxie.classList.add()
    // }
    onVidPop(event) {
        console.log(event);
        if (event.detail) {
            console.log(event);
            this.vidId = event.detail;
        }
        this.hide = false;
    }
    moveIt(event) {
        event.preventDefault();
        // console.log(event)
        // console.log(this.boxxie.offsetTop)
        // console.log(this.boxxie.offsetLeft)
        this.boxxie.style.top = Math.abs(event["clientY"]) + "px";
        this.boxxie.style.left = Math.abs(event["clientX"]) + "px";
        this.backDrop = false;
    }
    render() {
        let url = `https://app.vidcast.io/share/embed/${this.vidId}`;
        this.btnLable = this.vidBig ? index.h("div", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, index.h("path", { d: "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z" })), "\u2003") : index.h("div", null, " ", index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, index.h("path", { d: "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" })), "\u2003");
        return [
            index.h("div", { key: '7a7135e0a35f3d130e6e723555b347eb9992cb15', id: "cover", class: this.backDrop ? "covered" : "" }),
            index.h("div", { key: 'f151bf62708649cca34617ee9cad0bb382fec06b', draggable: true, id: "my-div", ref: el => this.boxxie = el, onDragStart: () => { this.backDrop = true; }, onDragEnd: this.moveIt.bind(this), class: (this.vidBig ? "bigBoi" : "") + (this.hide ? " hidden" : "") }, index.h("div", { key: 'a6dc6a35141bd22d1339fb93c642845648f2e87f', id: "my-div-header" }, index.h("span", { key: '24614fbfeb900b38e27395fc5b8c2027134e4f18', class: "hideMe", onClick: this.onToggleHide.bind(this) }, index.h("svg", { key: '9137f17575b7e239cc68b1409e913d2d841b421a', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 640 512" }, index.h("path", { key: '9f10a3ae3d4db7a8eaf67622d9763a345b1a11f5', d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" }))), index.h("svg", { key: 'b94a316400090c2cdbbf049828eff2e29dd4e8ad', id: "move", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, index.h("path", { key: 'a69ca0859385f7e307bd25a08937a8c180282eef', d: "M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4V224H109.3l9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4H224V402.7l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4V288H402.7l-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4H288V109.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z" })), index.h("span", { key: '470c29a6832a0e93c0aeff7e20bffb0babd8bade', class: "sizeBar", onClick: this.onToggleSize.bind(this) }, this.btnLable)), index.h("iframe", { key: '4234208a172183af2c907c0dfbc0044927e5bd42', src: url, height: "100%", width: "100%", frameborder: "0", loading: "lazy", allowFullScreen: true }))
        ];
    }
};
wxccVideoModal.style = WxccVideoModalStyle0;

exports.wxcc_altair = wxccAltair;
exports.wxcc_auth_demo_widget = wxccAuth;
exports.wxcc_guide_panel = SideDrawer;
exports.wxcc_page_controls = PageControls;
exports.wxcc_time = wxccTime;
exports.wxcc_video_modal = wxccVideoModal;

//# sourceMappingURL=wxcc-altair_6.cjs.entry.js.map