import { r as registerInstance, h, c as createEvent } from './index-f1a1248c.js';

const wxccAltairCss = "#frame{height:92vh;bottom:0}";
const WxccAltairStyle0 = wxccAltairCss;

const wxccAltair = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '2c61a09b55eacd0b6bb1038d1edacaf2d14841cc', id: "frame" }, h("iframe", { key: '75b282f3c84c55a971e66401d8fe39d8ec16df24', src: "https://altair-gql.sirmuel.design/", height: "100%", width: "100%", frameborder: "0", loading: "lazy" })));
    }
};
wxccAltair.style = WxccAltairStyle0;

const wxccAuthDemoWidgetCss = ".frame{position:absolute;z-index:5;height:25vh;background:#ccc;left:20%;top:50%;padding:2em;width:60%}h1{text-align:center}.hidden{display:none}";
const WxccAuthDemoWidgetStyle0 = wxccAuthDemoWidgetCss;

const wxccAuth = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            tok = h("p", { key: '76cfff11222876b763227b5cf8ae6036148954c0' }, h("h1", { key: '6fb95434270d6a2fe0093af8ab5f9193a184fef2' }, "The code is sent with this information from the app "), "grant_type: ", this.request.grant_type, h("br", { key: '74bfb40589468a84122e33bad349e118af032ce7' }), "redirect_uri: ", this.request.redirect_uri, h("br", { key: 'f29b4667a6b7c0a26c24bafb8c461ecf0a2946bc' }), "client_id: ", this.request.client_id, h("br", { key: 'a1a7691b92bf1348769e29efb1f492fc2f25d414' }), "client_secret: ", this.request.client_secret, h("br", { key: 'c9732e2a0b149fb74d3989354d7731cb61b21595' }), h("strong", { key: '80e2bc17d5919db1eb261e50350fd3e376ae6d61' }, "code:", this.request.code), h("br", { key: '386edaf72a6d4fec7a6d5da6173374b1bd690d13' }));
            if (this.showResponse) {
                tok = h("p", { key: '5bb0e2432bde6822b821ad442a654b8ce8d4bf81' }, h("h1", { key: 'aca73ca9dbf95f11e49be060531e1d5a79c85142' }, "This is the response with the token information "), "access_token: ", this.deets.access_token, h("br", { key: '80a67649cacc1c5c12554e73d4309ed623be2c03' }), "expires_in: ", this.deets.expires_in, h("br", { key: '0be235acf34bf1de24d5f3949ee09cee5e05b9e7' }), "refresh_token: ", this.deets.refresh_token, h("br", { key: 'f8c8cafdba4944aa50e3b3193eae5c7aabf76924' }), "refresh_token_expires_in: ", this.deets.refresh_token_expires_in, h("br", { key: 'd4dccec318508e4b02611af4ce60bbf4a3f5423b' }), "token_type: ", this.deets.token_type, h("br", { key: '34f77777f333b27ec60eeb05256b77e19fb8a951' }), "scope: ", this.deets.scope);
            }
        }
        // deets: ${JSON.stringify(this.deets)}
        // {
        //     "headers":{
        //     "Authorization":"${this.token}"
        //     }
        // }`
        return [
            h("div", { key: '7d0d0b7a97804b99564a5939a6d64fb9ad48b397', class: "frame" + (this.hide ? " hidden" : "") }, h("p", { key: 'cbf5252bffb015e4a6b0704f48b9120dc8700fda' }, tok), h("button", { key: '7254d54eaf39767d2df54c273a3efd44c7a467bf', onClick: () => { this.showResponse = !this.showResponse; } }, this.showResponse ? "Show Request" : "Show Response"), h("button", { key: '52b2c2aec29e4b488dfc11bff736a6b82ae33556', onClick: () => { this.hide = !this.hide; } }, "close"))
        ];
    }
};
wxccAuth.style = WxccAuthDemoWidgetStyle0;

const wxccGuidePanelCss = "aside{position:fixed;bottom:0;right:-100%;width:40rem;max-width:34%;height:92vh;background:#d6c5c5;box-shadow:0 2px 8px rgba(0, 0, 0, 0.27);transition:right 1.3s ease-out;z-index:2;overflow:scroll}:host([opened]) aside{right:0}header{display:flex;padding:1rem;background:#2196F3;position:fixed;top:8%;width:100%}h1.post-title{font-size:1.5rem;color:white;margin:0}.post-content{margin-left:1em}h1{font-size:1.5rem;margin:0}header button{position:absolute;top:0;right:0;padding:1rem;color:white;background:transparent;font-size:1.5rem;border:none}header button:focus{outline:none}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;padding-top:4rem}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid black;font:inherit;padding:0.15rem 0}#tabs button.active,#tabs button:hover,#tabs button:active{background:#2196F3;color:white}#tabs button:focus{outline:none}#contact-information{padding:0 1rem}.site-header,.site-footer,.book-header,.book-summary,.search-results{display:none}ul.nav{margin:1em;padding:0;list-style:none}li.nav{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li.nav:hover,li.nav:active{background:#2196F3;color:white}";
const WxccGuidePanelStyle0 = wxccGuidePanelCss;

const SideDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showNav = false;
        this.arttitle = undefined;
        this.opened = undefined;
        this.content = undefined;
        this.lessons = [];
        this.currentPage = undefined;
        this.lList = undefined;
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
        console.log(event.detail);
        let url;
        const iHere = this.lessons.findIndex(x => x.title === this.currentPage);
        if (!iHere) {
            this.currentPage = this.lessons[0].title;
        }
        console.log(this.currentPage);
        console.log(iHere);
        this.currentPage = this.lessons[iHere + 1].title;
        if (event.detail === "next") {
            url = this.lessons[iHere + 1].url;
            this.currentPage = this.lessons[iHere + 1].title;
        }
        else {
            url = this.lessons[iHere - 1].url;
            this.currentPage = this.lessons[iHere - 1].title;
        }
        this.getHTML(url)
            .then(html => {
            if (html !== null) {
                this.content = html;
                this.content = h("div", { innerHTML: this.content });
                // console.log(html);
            }
        });
    }
    onChoice(url) {
        this.getHTML(url)
            .then(html => {
            if (html !== null) {
                this.content = html;
                this.content = h("div", { innerHTML: this.content });
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
    }
    render() {
        let mainContent = this.content || h("slot", { key: 'eb64168084102bd31bbedf80073fe00ed7f8200c' });
        if (this.showNav) {
            mainContent = h("ul", { key: '1e353be0c55037a40da74e2f724c52fcbe248822', class: "nav" }, this.lessons.map(lesson => (h("li", { class: "nav", onClick: this.onChoice.bind(this, lesson.url) }, h("strong", null, lesson.title)))));
        }
        return [
            // <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}/>,
            h("aside", { key: 'd859f13f969e9f8b6a7bcb0770da387fd5ee8a3c' }, h("header", { key: 'e0794cb4fcae971a708e0ec4bce6c2b27b4585d3' }, h("h1", { key: 'ffeeb8d36476dc32d94f47e25bf0a119da167bda', class: "post-title" }, this.currentPage || this.arttitle)), h("section", { key: '48414f20dcfd58ec5b80097986664258b45f8f63', id: "tabs" }, h("button", { key: '1dd4af9d1050dfe8b7693af33a709a13e07088d6', class: !this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "lesson") }, "Lesson"), h("button", { key: '2579e02395231dd4ee87b312e3a0fce5b1d280b1', class: this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "nav") }, "Navigation")), h("main", { key: 'fb1acdf703693aebc00131e19b51ed8797488f0a' }, mainContent))
        ];
    }
};
SideDrawer.style = WxccGuidePanelStyle0;

const wxccPageControlsCss = ".controls {\r\n    width: 100%;\r\n    background-color: #555;\r\n    text-align: center;\r\n    transition: all 0.3s ease;\r\n    color: white;\r\n    font-size: 36px;\r\n    margin: auto;\r\n    height: 8vh;\r\n    overflow: hidden;\r\n    /* position: relative; */\r\n    /* display: grid; */\r\n    /* display:flex; */\r\n\r\n    /* justify-content: center; */\r\n    /* align-items: center; */\r\n\r\n}\r\n\r\nbutton {\r\n    padding: 14px 28px;\r\n    margin: 15px;\r\n    width: 20%\r\n}\r\n\r\nspan {\r\n    display: inline-block;\r\n    padding: 5px 28px;\r\n    margin: 1.5vh;\r\n    width: 15%;\r\n    background: #998f8f;\r\n    cursor: pointer;\r\n    border-radius: 30px\r\n        /* height: 4vh; */\r\n\r\n}\r\n\r\nspan:hover {\r\n    /* background: #0c0a0a; */\r\n    background: #2196F3;\r\n    ;\r\n\r\n}\r\n\r\n.tools {\r\n    margin-top: -2vh;\r\n    padding: 5px 28px;\r\n    position: absolute;\r\n    z-index: 10;\r\n    width: 15%;\r\n    background: #998f8f;\r\n    /* left: 21.65%; */\r\n    left: 31.33%;\r\n    display: none;\r\n    /* transition: display ease-out 5s; */\r\n\r\n}\r\n@media(width <= 1440px){\r\n    .tools{\r\n        left: 30.33%;\r\n    }\r\n}\r\n.tools span {\r\n    margin: 2px;\r\n    /* width: auto; */\r\n    width: 13vw;\r\n\r\n}\r\n\r\n.nav {\r\n    width: 5%\r\n}\r\n\r\n#tools:hover {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n.mag:hover~.tools {\r\n    display: block;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n\r\n\r\n.controls:has(.tools:hover) #tools {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n\r\n.tools:hover {\r\n    display: block;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n    transition: block ease-in-out 2s;\r\n}";
const WxccPageControlsStyle0 = wxccPageControlsCss;

const PageControls = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.wxccGuidePageTurn = createEvent(this, "wxccGuidePageTurn", 7);
        this.toggleGuide = createEvent(this, "toggleGuide", 7);
        this.wxccTimeWidget = createEvent(this, "wxccTimeWidget", 7);
        this.wxccAuthPop = createEvent(this, "wxccAuthPop", 7);
        this.vidPop = createEvent(this, "vidPop", 7);
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
        return (h("div", { key: 'c330ccb4b877fe57dd1f559c5ac0c24d92cad815', class: "controls" }, h("span", { key: 'c6a56a22234cc05eacd342cec729909cd8642e0f', id: "back", onClick: this.onBack.bind(this), class: "nav" }, "Back"), h("span", { key: '2c5b492d362ad50c5ad54db9112391b3ea0638b5', id: "tools", class: "mag" }, "Tools"), h("div", { key: '69c47c3712bb33216791a022f375c43d9466ca73', class: "tools" }, h("span", { key: '3a6b1e74038d213e6eef006a8cf8987b1061da09', onClick: this.onTimeWidget.bind(this) }, "Time Tool"), h("span", { key: 'b7458b7c177e06f9d6fcd04de2b9553c55bbe107', onClick: () => { this.vidPop.emit(); } }, "Show Video"), h("span", { key: '8fbc4e1efdb4464b16b79b5978c5ffcafcb0f7c7', onClick: () => { this.wxccAuthPop.emit(); } }, "Authorization")), h("span", { key: '541a3de47cf3cd8d937820c3d083d3738c7997c4', id: "guide", onClick: this.onToggleGuide.bind(this) }, "Guide"), h("span", { key: 'c9f87a06de1f93fa518aa72a7f20866fbb7a2501', id: "next", onClick: this.onNext.bind(this), class: "nav" }, "Next")));
    }
};
PageControls.style = WxccPageControlsStyle0;

const wxccTimeCss = ".frame{position:absolute;z-index:5;height:229px;background:#ccc;left:40%}label{color:black}header{background:#2196F3;color:white;text-align:center;padding:10px;margin-top:0}.widgets{padding:10px;margin-top:20px}.title{font-size:1.5rem}select,input{float:right}svg{fill:#c0c0c0}svg:hover{fill:#f0efef}.hideMe{float:left;margin-top:.25rem;cursor:pointer}.hidden{display:none}p{margin:1rem}";
const WxccTimeStyle0 = wxccTimeCss;

const wxccTime = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    }
    render() {
        const hideIcon = h("svg", { key: 'a9aed2d4c02b44400a1b2790c0e3cfdb6a01be69', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 640 512" }, h("path", { key: '096c500be383ed7fa6ef7f4c212cac637ee14a3c', d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" }));
        return [
            h("div", { key: 'f761823afa01286a6ee70b7472541145972f6cfb', class: "frame" + (this.hide ? " hidden" : "") }, h("header", { key: '129507c17f76a9e89dd4f8bf8fdf329934d5e170' }, h("span", { key: 'c4fb5790ab685437c75d6a14c10ca2f1f01a2016', class: "hideMe", onClick: this.onToggle.bind(this) }, hideIcon), h("div", { key: 'bcf7da6f416978248ce1c2e4bbd144e0e412282f', class: "title" }, "Time Widget")), h("section", { key: 'b1e35dd41960216a6e7a7658a04ce499e60b5268', class: "widgets" }, h("div", { key: '82d1ffd161c6d9bcaacbf6189238016d7c15560d' }, h("label", { key: '0faf8a632e10a188201a0d5b71f05c58db27c59a', id: "from" }, "From: "), h("input", { key: '5a531e463271153b51426eee63f4c4160d046aab', type: "date", onChange: this.onManSet.bind(this, "from"), ref: el => this.fDate = el }), h("input", { key: '5002141fea24ccc594e38aa81030b4cfa772d290', type: "time", onChange: this.onManSet.bind(this, "from"), ref: el => this.fTime = el }), h("select", { key: '20281f8797885bc005bc433c74c7886567081bc3', ref: el => this.fromSelected = el, onChange: this.onToSelect.bind(this, "from") }, h("option", { key: '297c4b2b552ec6124d03e8841acb2cd631c0a3c0' }), h("option", { key: 'ea80009d0dae3ac6d93bbaf05b03ab8651c83a1e', value: "600000" }, "10 minutes ago"), h("option", { key: '89d3b0f6a59559be1012fb0c856c0f6b8b4d24ee', value: "3600000" }, "1 hour ago"), h("option", { key: '78435478e0360359c1325b6f71061ead1c9700c9', value: "86400000" }, "1 day ago"), h("option", { key: '5719a4c7d48c4d5bdedff7ada315d8d11857ec7d', value: "604800000" }, "1 week ago"))), h("br", { key: 'bff8e3586291b6d73b1f601d6e5b345a12959350' }), h("div", { key: '8fe94c0d82781ef00d0337f5cc3b2ab3852820af' }, h("label", { key: 'c87acae309a9841e60d9c1478c283486c10f014a', id: "to" }, "To: "), h("input", { key: '475304ec1de471c22b1c4822b2bc98f01f43a7fc', type: "date", onChange: this.onManSet.bind(this, "to"), ref: el => this.tDate = el }), h("input", { key: '260bcc4c531097e0ba5cfbefdbe2825d84fed729', type: "time", onChange: this.onManSet.bind(this, "to"), ref: el => this.tTime = el }), h("select", { key: 'db3616750f6203bc5b61a67273d565edeb43ca53', ref: el => this.toSelected = el, onChange: this.onToSelect.bind(this, "to") }, h("option", { key: 'b6b64cef2003cb6f4e3546970a3aca7611b7b1a7' }), h("option", { key: 'e478c3e06f9cc3fd1223ff2ae07d3f8a532a5b20', value: "now" }, "Now"), h("option", { key: 'bc7a812434cdf236d1675af714a11dc3c7eafd10', value: "600000" }, "10 minutes ago"), h("option", { key: 'a1dcded76bb75a7da2a0b86571ce0f4a6572a9d3', value: "3600000" }, "1 hour ago"), h("option", { key: '91d3ca3985c51c1797d6fd0eb17a5c2d8d73a839', value: "86400000" }, "1 day ago"), h("option", { key: 'e90390275678de997f0045853cb01f7b658d41f9', value: "604800000" }, "1 week ago")))), h("br", { key: '210162dba2b1b5847eb359c33cf01fac57a73ad3' }), h("section", { key: '96675969a674843d6915a3eac7282014aabbebc1' }, h("p", { key: 'f633ef2a0e598b430300b820978b2d141446f8a6' }, "from: \"", this.from, "\"", h("br", { key: 'b39ff2ef959d3c3b64bd7510d49110c1fa8ce5fb' }), "to: \"", this.to, "\"")))
        ];
    }
};
wxccTime.style = WxccTimeStyle0;

const wxccVideoModalCss = "#cover{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:9;display:none;opacity:0;transition:opacity 0.5s ease-out}#cover.covered{display:block}#my-div{position:absolute;z-index:200;background-color:#f1f1f1;text-align:center;border:1px solid #d3d3d3;top:25%;left:25%}#my-div-header{padding:10px;z-index:10;background-color:#2196F3;color:#fff;height:20px}.sizeBar{float:right;cursor:pointer}.bigBoi{width:50%;height:50%}.hidden{display:none}.hideMe{float:right;cursor:pointer}#move{float:left;cursor:grab}svg{fill:#c0c0c0}svg:hover{fill:#f0efef;}";
const WxccVideoModalStyle0 = wxccVideoModalCss;

const wxccVideoModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.btnLable = this.vidBig ? h("div", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { d: "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z" })), "\u2003") : h("div", null, " ", h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { d: "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" })), "\u2003");
        return [
            h("div", { key: '7c581c91feb1a143e330cd5956d02d6f5607d7e0', id: "cover", class: this.backDrop ? "covered" : "" }),
            h("div", { key: '68f38f707591cfb6dc60d60be7bb3b9b7abe367b', draggable: true, id: "my-div", ref: el => this.boxxie = el, onDragStart: () => { this.backDrop = true; }, onDragEnd: this.moveIt.bind(this), class: (this.vidBig ? "bigBoi" : "") + (this.hide ? " hidden" : "") }, h("div", { key: 'c8ee4d0f86177edcc69aeefb09eafd17bc0d0a69', id: "my-div-header" }, h("span", { key: '8d78a3eba45548e406e46cf4cc7bb370c930521d', class: "hideMe", onClick: this.onToggleHide.bind(this) }, h("svg", { key: '7879d7dd7851a9acd167b7ab9079f6d2ae072c88', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 640 512" }, h("path", { key: '74a9d00a62fdcdf97f9c76b731ade70fb286bc88', d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" }))), h("svg", { key: 'b516ec12c8400f102bc3c6bb343c2f969456f24e', id: "move", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: 'a39c345ba07bea0b79c8f1cb91bbc38c118ae6e7', d: "M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4V224H109.3l9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4H224V402.7l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4V288H402.7l-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4H288V109.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z" })), h("span", { key: '30c96d77a65a1e7dc8d2c2fd34b57bd647d5e5d6', class: "sizeBar", onClick: this.onToggleSize.bind(this) }, this.btnLable)), h("iframe", { key: '145e4233e3cde2a7e1f4e1282fa2c33cc9ca334b', src: url, height: "100%", width: "100%", frameborder: "0", loading: "lazy", allowFullScreen: true }))
        ];
    }
};
wxccVideoModal.style = WxccVideoModalStyle0;

export { wxccAltair as wxcc_altair, wxccAuth as wxcc_auth_demo_widget, SideDrawer as wxcc_guide_panel, PageControls as wxcc_page_controls, wxccTime as wxcc_time, wxccVideoModal as wxcc_video_modal };

//# sourceMappingURL=wxcc-altair_6.entry.js.map