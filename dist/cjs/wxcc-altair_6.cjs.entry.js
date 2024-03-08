'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88a1a3cb.js');

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

const wxccGuidePanelCss = "aside{position:fixed;bottom:0;right:-100%;width:40rem;max-width:34%;height:92vh;background:#d6c5c5;box-shadow:0 2px 8px rgba(0, 0, 0, 0.27);transition:right 1.3s ease-out;z-index:2;overflow:scroll}:host([opened]) aside{right:0}header{display:flex;padding:1rem;background:black;position:fixed;top:8%;width:100%}h1.post-title{font-size:1.5rem;color:white;margin:0}.post-content{margin-left:1em}h1{font-size:1.5rem;margin:0}header button{position:absolute;top:0;right:0;padding:1rem;color:white;background:transparent;font-size:1.5rem;border:none}header button:focus{outline:none}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;padding-top:4rem}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid black;font:inherit;padding:0.15rem 0}#tabs button.active,#tabs button:hover,#tabs button:active{background:black;color:white}#tabs button:focus{outline:none}#contact-information{padding:0 1rem}.site-header,.site-footer,.book-header,.book-summary,.search-results{display:none}ul.nav{margin:1em;padding:0;list-style:none}li.nav{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li.nav:hover,li.nav:active{background:black;color:white}";
const WxccGuidePanelStyle0 = wxccGuidePanelCss;

const SideDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        console.log(content);
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
                this.content = index.h("div", { innerHTML: this.content });
                // console.log(html);
            }
        });
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
    render() {
        let mainContent = this.content || index.h("slot", { key: '7a87471f301689b2e910228a3ee887af0281a3ae' });
        if (this.showNav) {
            mainContent = index.h("ul", { key: 'e1a7741ac9b9e9165937ce6c0f0cca098cca66bd', class: "nav" }, this.lessons.map(lesson => (index.h("li", { class: "nav", onClick: this.onChoice.bind(this, lesson.url) }, index.h("strong", null, lesson.title)))));
        }
        // ( 
        //     <div id="contact-information">
        //       <h2> Contact Information</h2>
        //     <p>You can reach us via phone or email</p>  
        //     <ul>
        //         <li>Phone: 8144557771</li>
        //         <li>EMail: <a href="mailto:something@something.com">something@something.com</a></li>
        //         </ul>
        //     </div>
        //  )}
        return [
            // <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}/>,
            index.h("aside", { key: '0318ee33f3de4dc468676ec8527eb70469638ad1' }, index.h("header", { key: '863b6746eeee9b265307274445f56fb2d836085b' }, index.h("h1", { key: '8bbc29d61215ba87ccca27f7ec9e1d16f4bbd038', class: "post-title" }, this.currentPage || this.arttitle)), index.h("section", { key: 'a6a5ca8c78d0ed5757f48d0408a091752d042dfb', id: "tabs" }, index.h("button", { key: '4ed4cf72031b2e00cab638bfe54b861dfcb18abf', class: !this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "lesson") }, "Lesson"), index.h("button", { key: '1b6cfd848bf64e37022f9b4068053d8ec2809e5e', class: this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "nav") }, "Navigation")), index.h("main", { key: '4f128600315092df5614eb5c6b08982c4025db19' }, mainContent))
        ];
    }
};
SideDrawer.style = WxccGuidePanelStyle0;

const wxccPageControlsCss = ".controls{width:100%;background-color:#555;text-align:center;transition:all 0.3s ease;color:white;font-size:36px;margin:auto;height:8vh;overflow:hidden;}button{padding:14px 28px;margin:15px;width:20%}span{display:inline-block;padding:5px 28px;margin:1.5vh;width:15%;background:#998f8f;cursor:pointer;}span:hover{background:#0c0a0a}.tools{margin-top:-1.5vh;padding:5px 28px;position:absolute;z-index:10;width:15%;background:#998f8f;left:31.33%;display:none}.tools span{margin:2px;width:auto}.nav{width:5%}.mag:hover~.tools{display:block}.tools:hover{display:block}";
const WxccPageControlsStyle0 = wxccPageControlsCss;

const PageControls = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.wxccGuidePageTurn = index.createEvent(this, "wxccGuidePageTurn", 7);
        this.toggleGuide = index.createEvent(this, "toggleGuide", 7);
        this.wxccTimeWidget = index.createEvent(this, "wxccTimeWidget", 7);
        this.wxccAuthPop = index.createEvent(this, "wxccAuthPop", 7);
        this.vidPop = index.createEvent(this, "vidPop", 7);
        this.lessons = [
            { "title": "Preparing and validating your lab", "address": "https://ciscolivelabs.github.io/wxcclabguides/LTRCCT-2004/Lab_0.html" },
            { "title": "Adding Callback Number Read Back", "address": "https://ciscolivelabs.github.io/wxcclabguides/LTRCCT-2004/Lab_1.html" },
            { "title": "Reusing Our Existing Wait Treatment and Opt-out", "address": "https://ciscolivelabs.github.io/wxcclabguides/LTRCCT-2004/Lab_2.html" },
            { "title": "Menu to Select from 50 States", "address": "https://ciscolivelabs.github.io/wxcclabguides/LTRCCT-2004/Lab_3.html" },
            { "title": "Making the Flow Multilingual", "address": "https://ciscolivelabs.github.io/wxcclabguides/LTRCCT-2004/Lab_4.html" },
            { "title": "Customizing the Wait Treatment by Business Unit", "address": "https://ciscolivelabs.github.io/wxcclabguides/LTRCCT-2004/Lab_5.html" },
            { "title": "Targeted Agent Routing", "address": "https://ciscolivelabs.github.io/wxcclabguides/LTRCCT-2004/Lab_6.html" },
            { "title": "Pause", "address": "https://ciscolivelabs.github.io/wxcclabguides/LTRCCT-2004/Pause_5" },
            { "title": "Pause", "address": "https://webexcc-sa.github.io/wxccintrolabs/pages/IVR/" }
        ];
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
        return (index.h("div", { key: '93739d34b3209ba33f38fa7069e59b53fc4f2cfd', class: "controls" }, index.h("span", { key: '585c2fe01a00c69666ac14d8326bc869c8b70e63', id: "back", onClick: this.onBack.bind(this), class: "nav" }, "Back"), index.h("span", { key: 'a22835f39677ba6f7e449a7e7c53cee4ff1c836c', id: "tools", class: "mag" }, "Tools"), index.h("div", { key: 'ba79ab399639fca3ed90576e8d5e127de8f04dbe', class: "tools" }, index.h("span", { key: '57f36cd3a173a20c93d612ec5799fba148fafe67', onClick: this.onTimeWidget.bind(this) }, "Time Tool"), index.h("span", { key: '72232113f0734edf0d4d1419cebde9c8a7a8b324', onClick: () => { this.vidPop.emit(); } }, "Show Video"), index.h("span", { key: '358a102dc97562f9eca7f55cadcae88e72efa14c', onClick: () => { this.wxccAuthPop.emit(); } }, "Authorization")), index.h("span", { key: '5c4f0f872f07dcf462ffd3c365c975ea21f567e3', id: "guide", onClick: this.onToggleGuide.bind(this) }, "Guide"), index.h("span", { key: '6565226ba24e6c2466da169381e022c97d8a3756', id: "next", onClick: this.onNext.bind(this), class: "nav" }, "Next")));
    }
};
PageControls.style = WxccPageControlsStyle0;

const wxccTimeCss = ".frame{position:absolute;z-index:5;height:229px;background:#ccc;left:40%}label{color:black}header{background:black;color:white;text-align:center;padding:10px;margin-top:0}.widgets{padding:10px;margin-top:20px}.title{font-size:1.5rem}select,input{float:right}.hideMe{float:left;margin-top:.25rem;cursor:pointer}.hidden{display:none}p{margin:1rem}";
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
        return [
            index.h("div", { key: '83aff60a620ccb0e152ae40bc79c21718e52cab7', class: "frame" + (this.hide ? " hidden" : "") }, index.h("header", { key: 'ba78b496434fa09a7e5ee55a1e465fa1fd37a6cf' }, index.h("span", { key: '4caed5195322d61b1503dd31c6e3447563fbdd48', class: "hideMe", onClick: this.onToggle.bind(this) }, "Hide"), index.h("div", { key: 'ee5d050605106819266a8b6bfb9e361a18cc8173', class: "title" }, "Time Widget")), index.h("section", { key: '93146168855757696e3fae64981d2e609b693850', class: "widgets" }, index.h("div", { key: '6710e950cdbcf44ceb00ebea469cf95ad09b7961' }, index.h("label", { key: '13e35fb30c5e85dd044c32c4c80cca2e08c34d58', id: "from" }, "From: "), index.h("input", { key: '480b9b43620a431173b034afaf1d0af9d4064ad2', type: "date", onChange: this.onManSet.bind(this, "from"), ref: el => this.fDate = el }), index.h("input", { key: '00b1c87ed30eea67ee9e6566d29cf5193c432359', type: "time", onChange: this.onManSet.bind(this, "from"), ref: el => this.fTime = el }), index.h("select", { key: 'b725301496ec9a17446f5d294fed3a7c337960d3', ref: el => this.fromSelected = el, onChange: this.onToSelect.bind(this, "from") }, index.h("option", { key: 'b78acbcd554026c86e5815bc8ada4cff8b122034' }), index.h("option", { key: 'fbe96af98f36203fabafdee68421de40133c9b6d', value: "600000" }, "10 minutes ago"), index.h("option", { key: '170b6e8c4075a4c4b4a5648006a5451ef9da87c4', value: "3600000" }, "1 hour ago"), index.h("option", { key: '85d3967c8a8548062b968239f019ced7559e9d1e', value: "86400000" }, "1 day ago"), index.h("option", { key: '0e8c91ea3fdb4824364f89db125de6990f56c61b', value: "604800000" }, "1 week ago"))), index.h("br", { key: 'a601dfdebe80e07050c92d4b71bbcf56b37d6b76' }), index.h("div", { key: '102f32924271cbef25842de188d4f7efaa227ef5' }, index.h("label", { key: 'e3cd9cf556caea16e81fe9ff1efba37fed0df51f', id: "to" }, "To: "), index.h("input", { key: '7cf31494d794908eb675be14d430e2afaa1448b7', type: "date", onChange: this.onManSet.bind(this, "to"), ref: el => this.tDate = el }), index.h("input", { key: '2c1734a5a4740f50433dfdfbb10530c4d2b1b0f1', type: "time", onChange: this.onManSet.bind(this, "to"), ref: el => this.tTime = el }), index.h("select", { key: '6667ec13c577e5bce2c765da35e53b39849e96cd', ref: el => this.toSelected = el, onChange: this.onToSelect.bind(this, "to") }, index.h("option", { key: 'a214b3987293caaacb74fc42c8ebbb4b2dac4757' }), index.h("option", { key: '8315ee18ab31a979106bb42e75ba117ff1ef4f38', value: "now" }, "Now"), index.h("option", { key: '680b0afb357132adf286c970be4a50a979140263', value: "600000" }, "10 minutes ago"), index.h("option", { key: '51c35ae1905672c44ae351a042998512f40d2610', value: "3600000" }, "1 hour ago"), index.h("option", { key: '32f7e0be2bad5db598309d10c91b886660913e17', value: "86400000" }, "1 day ago"), index.h("option", { key: '183480f79362c705e81b1f72094b3c17072fb113', value: "604800000" }, "1 week ago")))), index.h("br", { key: 'a194f8e8c1a471108d0fa6ef560b9b97858ced10' }), index.h("section", { key: '48d5f1a4401db138bf605922c7f13e506ddd16cf' }, index.h("p", { key: 'c77f887bd4b8191095aec95ab1eec3a962804e26' }, "from: \"", this.from, "\"", index.h("br", { key: '1cc1503550a43d11026169ad674730f4115d4a14' }), "to: \"", this.to, "\"")))
        ];
    }
};
wxccTime.style = WxccTimeStyle0;

const wxccVideoModalCss = "#cover{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:9;display:none;opacity:0;transition:opacity 0.5s ease-out}#cover.covered{display:block}#my-div{position:absolute;z-index:200;background-color:#f1f1f1;text-align:center;border:1px solid #d3d3d3;top:25%;left:25%}#my-div-header{padding:10px;cursor:move;z-index:10;background-color:#2196F3;color:#fff}.sizeBar{float:right}.bigBoi{width:50%;height:50%}.hidden{display:none}.hideMe{float:left;cursor:pointer}";
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
        console.log(event);
        console.log(this.boxxie.offsetTop);
        console.log(this.boxxie.offsetLeft);
        this.boxxie.style.top = Math.abs(event["clientY"]) + "px";
        this.boxxie.style.left = Math.abs(event["clientX"]) + "px";
        this.backDrop = false;
    }
    render() {
        let url = `https://app.vidcast.io/share/embed/${this.vidId}`;
        this.btnLable = this.vidBig ? "Smaller" : "Bigger";
        return [
            index.h("div", { key: '079cdba25e97d542449b8a20613e6a83b17a6085', id: "cover", class: this.backDrop ? "covered" : "" }),
            index.h("div", { key: '8fa5d3af3cc6af857dc84fa37f897e2744edd558', draggable: true, id: "my-div", ref: el => this.boxxie = el, onDragStart: () => { this.backDrop = true; }, onDragEnd: this.moveIt.bind(this), class: (this.vidBig ? "bigBoi" : "") + (this.hide ? " hidden" : "") }, index.h("div", { key: 'f58ea4514f8e2eb0875e5222a0a60fae23ece876', id: "my-div-header" }, index.h("span", { key: '6e66920986196d7ded6700f6a74c31f6641dfb7f', class: "hideMe", onClick: this.onToggleHide.bind(this) }, "Hide"), "Click here to move ", index.h("button", { key: '0de77369c676cb46b086d1f532ec7b9748ba26d0', class: "sizeBar", onClick: this.onToggleSize.bind(this) }, this.btnLable)), index.h("iframe", { key: '50227e0bc1ed37b339cd8f9e6f863a557d91ce1c', src: url, height: "100%", width: "100%", frameborder: "0", loading: "lazy" }))
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