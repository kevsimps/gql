import { r as registerInstance, h, c as createEvent } from './index-9e44e949.js';

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

const wxccGuidePanelCss = "aside{position:fixed;bottom:0;right:-100%;width:40rem;max-width:34%;height:92vh;background:#d6c5c5;box-shadow:0 2px 8px rgba(0, 0, 0, 0.27);transition:right 1.3s ease-out;z-index:2;overflow:scroll}:host([opened]) aside{right:0}header{display:flex;padding:1rem;background:black;position:fixed;top:8%;width:100%}h1.post-title{font-size:1.5rem;color:white;margin:0}.post-content{margin-left:1em}h1{font-size:1.5rem;margin:0}header button{position:absolute;top:0;right:0;padding:1rem;color:white;background:transparent;font-size:1.5rem;border:none}header button:focus{outline:none}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;padding-top:4rem}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid black;font:inherit;padding:0.15rem 0}#tabs button.active,#tabs button:hover,#tabs button:active{background:black;color:white}#tabs button:focus{outline:none}#contact-information{padding:0 1rem}.site-header,.site-footer,.book-header,.book-summary,.search-results{display:none}ul.nav{margin:1em;padding:0;list-style:none}li.nav{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li.nav:hover,li.nav:active{background:black;color:white}";
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
    render() {
        let mainContent = this.content || h("slot", { key: '86ecf0a9590859f40d06e33e8361ac0deea876d3' });
        if (this.showNav) {
            mainContent = h("ul", { key: 'c1da402e26f560136c6402df71e59e186dfb21d2', class: "nav" }, this.lessons.map(lesson => (h("li", { class: "nav", onClick: this.onChoice.bind(this, lesson.url) }, h("strong", null, lesson.title)))));
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
            h("aside", { key: '3c17a721d9a8eb17a3277136418447cfae4fd00c' }, h("header", { key: '9e51466cda03e22258a3c717dd62eac5eef941b0' }, h("h1", { key: '85aa3f6cfd1e81c87c6edbe4154bd8ca96897469', class: "post-title" }, this.currentPage || this.arttitle)), h("section", { key: '8c37814bf0b9cc4071b9b047d5be40c946c13538', id: "tabs" }, h("button", { key: '9dcc1fd47a96b0ead5807f4a8401746360da0e48', class: !this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "lesson") }, "Lesson"), h("button", { key: '1cd7088cf6da4448fbc2b31c3f824be4afa9943b', class: this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "nav") }, "Navigation")), h("main", { key: '8880928062121d12f328e8022d79b28c1dc4408e' }, mainContent))
        ];
    }
};
SideDrawer.style = WxccGuidePanelStyle0;

const wxccPageControlsCss = ".controls{width:100%;background-color:#555;text-align:center;transition:all 0.3s ease;color:white;font-size:36px;margin:auto;height:8vh;overflow:hidden;}button{padding:14px 28px;margin:15px;width:20%}span{display:inline-block;padding:5px 28px;margin:1.5vh;width:15%;background:#998f8f;cursor:pointer;}span:hover{background:#0c0a0a}.tools{margin-top:-2vh;padding:5px 28px;position:absolute;z-index:10;width:15%;background:#998f8f;left:31.33%;display:none;}.tools span{margin:2px;width:auto}.nav{width:5%}.mag:hover~.tools{display:block}.tools:hover{display:block;}";
const WxccPageControlsStyle0 = wxccPageControlsCss;

const PageControls = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.wxccGuidePageTurn = createEvent(this, "wxccGuidePageTurn", 7);
        this.toggleGuide = createEvent(this, "toggleGuide", 7);
        this.wxccTimeWidget = createEvent(this, "wxccTimeWidget", 7);
        this.wxccAuthPop = createEvent(this, "wxccAuthPop", 7);
        this.vidPop = createEvent(this, "vidPop", 7);
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
        return (h("div", { key: '93739d34b3209ba33f38fa7069e59b53fc4f2cfd', class: "controls" }, h("span", { key: '585c2fe01a00c69666ac14d8326bc869c8b70e63', id: "back", onClick: this.onBack.bind(this), class: "nav" }, "Back"), h("span", { key: 'a22835f39677ba6f7e449a7e7c53cee4ff1c836c', id: "tools", class: "mag" }, "Tools"), h("div", { key: 'ba79ab399639fca3ed90576e8d5e127de8f04dbe', class: "tools" }, h("span", { key: '57f36cd3a173a20c93d612ec5799fba148fafe67', onClick: this.onTimeWidget.bind(this) }, "Time Tool"), h("span", { key: '72232113f0734edf0d4d1419cebde9c8a7a8b324', onClick: () => { this.vidPop.emit(); } }, "Show Video"), h("span", { key: '358a102dc97562f9eca7f55cadcae88e72efa14c', onClick: () => { this.wxccAuthPop.emit(); } }, "Authorization")), h("span", { key: '5c4f0f872f07dcf462ffd3c365c975ea21f567e3', id: "guide", onClick: this.onToggleGuide.bind(this) }, "Guide"), h("span", { key: '6565226ba24e6c2466da169381e022c97d8a3756', id: "next", onClick: this.onNext.bind(this), class: "nav" }, "Next")));
    }
};
PageControls.style = WxccPageControlsStyle0;

const wxccTimeCss = ".frame{position:absolute;z-index:5;height:229px;background:#ccc;left:40%}label{color:black}header{background:black;color:white;text-align:center;padding:10px;margin-top:0}.widgets{padding:10px;margin-top:20px}.title{font-size:1.5rem}select,input{float:right}.hideMe{float:left;margin-top:.25rem;cursor:pointer}.hidden{display:none}p{margin:1rem}";
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
        return [
            h("div", { key: '83aff60a620ccb0e152ae40bc79c21718e52cab7', class: "frame" + (this.hide ? " hidden" : "") }, h("header", { key: 'ba78b496434fa09a7e5ee55a1e465fa1fd37a6cf' }, h("span", { key: '4caed5195322d61b1503dd31c6e3447563fbdd48', class: "hideMe", onClick: this.onToggle.bind(this) }, "Hide"), h("div", { key: 'ee5d050605106819266a8b6bfb9e361a18cc8173', class: "title" }, "Time Widget")), h("section", { key: '93146168855757696e3fae64981d2e609b693850', class: "widgets" }, h("div", { key: '6710e950cdbcf44ceb00ebea469cf95ad09b7961' }, h("label", { key: '13e35fb30c5e85dd044c32c4c80cca2e08c34d58', id: "from" }, "From: "), h("input", { key: '480b9b43620a431173b034afaf1d0af9d4064ad2', type: "date", onChange: this.onManSet.bind(this, "from"), ref: el => this.fDate = el }), h("input", { key: '00b1c87ed30eea67ee9e6566d29cf5193c432359', type: "time", onChange: this.onManSet.bind(this, "from"), ref: el => this.fTime = el }), h("select", { key: 'b725301496ec9a17446f5d294fed3a7c337960d3', ref: el => this.fromSelected = el, onChange: this.onToSelect.bind(this, "from") }, h("option", { key: 'b78acbcd554026c86e5815bc8ada4cff8b122034' }), h("option", { key: 'fbe96af98f36203fabafdee68421de40133c9b6d', value: "600000" }, "10 minutes ago"), h("option", { key: '170b6e8c4075a4c4b4a5648006a5451ef9da87c4', value: "3600000" }, "1 hour ago"), h("option", { key: '85d3967c8a8548062b968239f019ced7559e9d1e', value: "86400000" }, "1 day ago"), h("option", { key: '0e8c91ea3fdb4824364f89db125de6990f56c61b', value: "604800000" }, "1 week ago"))), h("br", { key: 'a601dfdebe80e07050c92d4b71bbcf56b37d6b76' }), h("div", { key: '102f32924271cbef25842de188d4f7efaa227ef5' }, h("label", { key: 'e3cd9cf556caea16e81fe9ff1efba37fed0df51f', id: "to" }, "To: "), h("input", { key: '7cf31494d794908eb675be14d430e2afaa1448b7', type: "date", onChange: this.onManSet.bind(this, "to"), ref: el => this.tDate = el }), h("input", { key: '2c1734a5a4740f50433dfdfbb10530c4d2b1b0f1', type: "time", onChange: this.onManSet.bind(this, "to"), ref: el => this.tTime = el }), h("select", { key: '6667ec13c577e5bce2c765da35e53b39849e96cd', ref: el => this.toSelected = el, onChange: this.onToSelect.bind(this, "to") }, h("option", { key: 'a214b3987293caaacb74fc42c8ebbb4b2dac4757' }), h("option", { key: '8315ee18ab31a979106bb42e75ba117ff1ef4f38', value: "now" }, "Now"), h("option", { key: '680b0afb357132adf286c970be4a50a979140263', value: "600000" }, "10 minutes ago"), h("option", { key: '51c35ae1905672c44ae351a042998512f40d2610', value: "3600000" }, "1 hour ago"), h("option", { key: '32f7e0be2bad5db598309d10c91b886660913e17', value: "86400000" }, "1 day ago"), h("option", { key: '183480f79362c705e81b1f72094b3c17072fb113', value: "604800000" }, "1 week ago")))), h("br", { key: 'a194f8e8c1a471108d0fa6ef560b9b97858ced10' }), h("section", { key: '48d5f1a4401db138bf605922c7f13e506ddd16cf' }, h("p", { key: 'c77f887bd4b8191095aec95ab1eec3a962804e26' }, "from: \"", this.from, "\"", h("br", { key: '1cc1503550a43d11026169ad674730f4115d4a14' }), "to: \"", this.to, "\"")))
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
            h("div", { key: 'd75b6456077f06b7d2483001a110fde8592d7a3a', id: "cover", class: this.backDrop ? "covered" : "" }),
            h("div", { key: 'f7fa34ca572261c08d2050414014c825f0787e6c', draggable: true, id: "my-div", ref: el => this.boxxie = el, onDragStart: () => { this.backDrop = true; }, onDragEnd: this.moveIt.bind(this), class: (this.vidBig ? "bigBoi" : "") + (this.hide ? " hidden" : "") }, h("div", { key: 'cfef455697db41211256cbbfe6a98547e3438937', id: "my-div-header" }, h("span", { key: 'bba464190b6788c3ee67f85db561ec508e0269e1', class: "hideMe", onClick: this.onToggleHide.bind(this) }, h("svg", { key: '51fe57fc0471433fa7dfa494b6284be972e1b0d9', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 640 512" }, h("path", { key: '3700cf5688019e5ae27a5c3abca1311eff31e00d', d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" }))), h("svg", { key: 'cb4ea053a06fe2e6f4423eeea9ba2f74299a7c4a', id: "move", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: 'e94764e5e814018990cf3f797d24d6c0f2f34937', d: "M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4V224H109.3l9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4H224V402.7l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4V288H402.7l-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4H288V109.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z" })), h("span", { key: '44b5f8590ee9a4caf3ef22b8536624eb6de45e54', class: "sizeBar", onClick: this.onToggleSize.bind(this) }, this.btnLable)), h("iframe", { key: 'bda7953edf841e80647c72b906c93d5a540a9f02', src: url, height: "100%", width: "100%", frameborder: "0", loading: "lazy", allowFullScreen: true }))
        ];
    }
};
wxccVideoModal.style = WxccVideoModalStyle0;

export { wxccAltair as wxcc_altair, wxccAuth as wxcc_auth_demo_widget, SideDrawer as wxcc_guide_panel, PageControls as wxcc_page_controls, wxccTime as wxcc_time, wxccVideoModal as wxcc_video_modal };

//# sourceMappingURL=wxcc-altair_6.entry.js.map