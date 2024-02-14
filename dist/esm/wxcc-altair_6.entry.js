import { r as registerInstance, h, c as createEvent } from './index-565df2c6.js';

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

const wxccAuthWidgetCss = ".frame{position:absolute;z-index:5;height:25vh;background:#ccc;left:20%;top:50%;padding:2em}h1{text-align:center}.hidden{display:none}";
const WxccAuthWidgetStyle0 = wxccAuthWidgetCss;

const wxccAuth = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.token = undefined;
        this.expStamp = undefined;
        this.hide = true;
        this.callbackUrl = undefined;
    }
    async burp(x) {
        console.log(x);
        const code = x.slice(x.search("=") + 1, x.search("&"));
        // console.log(code)
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "authorization_code");
        urlencoded.append("redirect_uri", this.callbackUrl);
        urlencoded.append("client_id", "C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f");
        urlencoded.append("client_secret", "49aad1cd3ed0758755c69d818baf897923876854423dbc01d608fc8255d14044");
        urlencoded.append("code", code);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded
        };
        // console.log(urlencoded.toString())
        let response = await fetch("https://webexapis.com/v1/access_token", requestOptions);
        let deets = await response.json();
        // console.log(deets)
        this.token = "Bearer " + deets.access_token;
        this.expStamp = new Date(Date.now() + (deets.expires_in * 1000));
        sessionStorage.setItem("token", this.token);
        sessionStorage.setItem("expStamp", this.expStamp);
        // console.log(this.token)
        // console.log(this.expStamp)
        this.hide = false;
    }
    onGetAuth() {
        if (+new Date(sessionStorage.getItem("expStamp")) > Date.now()) {
            this.token = sessionStorage.getItem("token");
            this.hide = false;
        }
        else {
            window.open(`https://webexapis.com/v1/authorize?response_type=code&client_id=C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f&state=new&scope=cjp%3Aconfig%20cjp%3Aconfig_read%20cjp%3Aconfig_write&redirect_uri=${this.callbackUrl}`, "steve", "popup");
        }
    }
    render() {
        let tok = `{
            "headers":{
            "Authorization":"${this.token}"
            }
        }`;
        return [
            h("div", { key: '26ab486fef2b166a447c13f614b80cd2c020ded7', class: "frame" + (this.hide ? " hidden" : "") }, h("h1", { key: '91c99e15f532c37b940b3097032239ba598df5b8' }, "Copy this text into your Global Environment Variable"), h("p", { key: '44e779b18231f89cc166698f6c2490a53007ad82' }, tok), h("button", { key: '50d89701f7d9029b6f9f84a9e7217caa01d0dcd7', onClick: () => { this.hide = !this.hide; } }, "close"))
        ];
    }
};
wxccAuth.style = WxccAuthWidgetStyle0;

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
        let mainContent = this.content || h("slot", { key: 'd672c99154317ee19c85f0960ae87084f24d0659' });
        if (this.showNav) {
            mainContent = h("ul", { key: 'df47f6f1c7e4eda2cf6debb2c26783439917f99d', class: "nav" }, this.lessons.map(lesson => (h("li", { class: "nav", onClick: this.onChoice.bind(this, lesson.url) }, h("strong", null, lesson.title)))));
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
            h("aside", { key: '9903b2fe417810c545a93cfcb4b6b5f7df77e302' }, h("header", { key: 'e294c15c1ff1c847dd68e178b1c5ff3c5d24ca53' }, h("h1", { key: 'e645f46456ea139232b60be5cdf1f87b7ca5e8d4', class: "post-title" }, this.currentPage || this.arttitle)), h("section", { key: '94f8863d5ccd0d3693eb853cee9983fb062103df', id: "tabs" }, h("button", { key: '210a6c1e647aec0b8d1b02311570506e633ff8b0', class: !this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "lesson") }, "Lesson"), h("button", { key: '6e507053143f6078afacffb1c2e9a9830d568e91', class: this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "nav") }, "Navigation")), h("main", { key: 'a9818617822c30571eeba179fc894b301dfb2187' }, mainContent))
        ];
    }
};
SideDrawer.style = WxccGuidePanelStyle0;

const wxccPageControlsCss = ".controls{width:100%;background-color:#555;text-align:center;transition:all 0.3s ease;color:white;font-size:36px;margin:auto;height:8vh;overflow:hidden;}button{padding:14px 28px;margin:15px;width:20%}span{display:inline-block;padding:5px 28px;margin:1.5vh;width:15%;background:#998f8f;cursor:pointer;}span:hover{background:#0c0a0a}.tools{margin-top:-1.5vh;padding:5px 28px;position:absolute;z-index:10;width:15%;background:#998f8f;left:31.33%;display:none}.tools span{margin:2px;width:auto}.nav{width:5%}.mag:hover~.tools{display:block}.tools:hover{display:block}";
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
        return (h("div", { key: 'bd758d6a9277f9fb126416b9d9c8c1efd6ce2d57', class: "controls" }, h("span", { key: 'd68c0d17106c69eb48ab599bbf36766a95c515ca', id: "back", onClick: this.onBack.bind(this), class: "nav" }, "Back"), h("span", { key: '5620944328d8f8ff15618ba1f5864eca01b2c769', id: "tools", class: "mag" }, "Tools"), h("div", { key: '4f40c83a7932f1355250359c3f155b26afb05838', class: "tools" }, h("span", { key: '759362e2832c8e9c655412e8c2aa9c90a3ebca24', onClick: this.onTimeWidget.bind(this) }, "Time Tool"), h("span", { key: 'b4217475843c6d6a055a7dc11bddaab1af99fa2f', onClick: () => { this.vidPop.emit(); } }, "Show Video"), h("span", { key: '5280cf4c70c1b5e2bd7d338350df3aa76cdd91f8', onClick: () => { this.wxccAuthPop.emit(); } }, "Authorization")), h("span", { key: '807635762510d2810c2f12d26531ab8555f6a762', id: "guide", onClick: this.onToggleGuide.bind(this) }, "Guide"), h("span", { key: 'fd8003db2ed0d73be879d366b48e323fc59fd610', id: "next", onClick: this.onNext.bind(this), class: "nav" }, "Next")));
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
            let date = ("0" + (this.fd.getDate() + 1)).slice(-2, 3);
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
            let date = ("0" + (this.td.getDate() + 1)).slice(-2, 3);
            // console.log(month)
            this.tDate.value = (this.td.getFullYear() + "-" + month + "-" + date);
            this.tTime.value = this.td.toTimeString().slice(0, 8);
            this.to = this.td.valueOf();
            console.log(this.td.getDate());
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
            h("div", { key: '0af5a1b34c5e9e1286d433e16b99773161a4b98e', class: "frame" + (this.hide ? " hidden" : "") }, h("header", { key: 'ba4b2471857ee377f9c9789f270cccf015304db3' }, h("span", { key: '186a9a8c23964e3a6510808ac06f213e91c292f1', class: "hideMe", onClick: this.onToggle.bind(this) }, "Hide"), h("div", { key: 'aaf74d1280921783bb199f55f802854272a2d417', class: "title" }, "Time Widget")), h("section", { key: '1ab4fbb451eab7b7cc40170c0bfb4f88b69225d8', class: "widgets" }, h("div", { key: '0b10f9e978ba1aa9312302b6f413439e7185e7cd' }, h("label", { key: 'fe8cc06de1c8c0de42ee05e23dfe3d438f1d35cb', id: "from" }, "From: "), h("input", { key: '82486c60a1821a87dabe2b6f0303f57648e53e14', type: "date", onChange: this.onManSet.bind(this, "from"), ref: el => this.fDate = el }), h("input", { key: '9ecd2ef3a392c3679da566583a807231264eb5d7', type: "time", onChange: this.onManSet.bind(this, "from"), ref: el => this.fTime = el }), h("select", { key: '9c7bc33a528d4c2a0ea855ecd2b82fbafc8bc250', ref: el => this.fromSelected = el, onChange: this.onToSelect.bind(this, "from") }, h("option", { key: 'b255c3a93301831d2d612a3e2adf2904d35777ad' }), h("option", { key: '14069fac3e21d507e64c2a7641b39985422a1e7a', value: "600000" }, "10 minutes ago"), h("option", { key: '9c8b93e6a279084965b3314b1a413b2bab00fd2a', value: "3600000" }, "1 hour ago"), h("option", { key: '8ea01dec34094be10911c2ddb391a1e4959f41e5', value: "86400000" }, "1 day ago"), h("option", { key: '0db847f98854cda0a712124a32d004fad7264817', value: "604800000" }, "1 week ago"))), h("br", { key: 'd00713d9a395b672013a2b540b4b8f7130e37489' }), h("div", { key: 'dc33cd4d93c6465bc7cf73485c2eb77972d9b2b2' }, h("label", { key: '7d0a335f604c6bf4e61b7a5108aca4d7c5ffa4d5', id: "to" }, "To: "), h("input", { key: '333e9771c8388910c113f5cf8336eb5ec1a7d34f', type: "date", onChange: this.onManSet.bind(this, "to"), ref: el => this.tDate = el }), h("input", { key: '3997394e32a98e968429d0e18435db3fa30090bd', type: "time", onChange: this.onManSet.bind(this, "to"), ref: el => this.tTime = el }), h("select", { key: '2fefc932be1b98555cff1546478e3197760f83a9', ref: el => this.toSelected = el, onChange: this.onToSelect.bind(this, "to") }, h("option", { key: '8a28a9393a880ec33ddbf2ec6e0dfff0efaa77a7' }), h("option", { key: '6e6bc389648509781bd5224b6eb116c9bc9b52be', value: "now" }, "Now"), h("option", { key: 'a4ccb01e46fc8260c367aca49a7f877916e7de8c', value: "600000" }, "10 minutes ago"), h("option", { key: '98c5952bc0f2134d7fced2d08a872e2e6e5ed67e', value: "3600000" }, "1 hour ago"), h("option", { key: 'edf4887af39ff155759d7f0987e17aea271da061', value: "86400000" }, "1 day ago"), h("option", { key: '24feb591ee2286a94211484a4b6560d1363b0d5b', value: "604800000" }, "1 week ago")))), h("br", { key: '223b429059c5e134dff61d38315c03f4c8c00b13' }), h("section", { key: 'f9704abd7791eae15f18e777df6b57a4246eeeb4' }, h("p", { key: 'd26ce3944164f0dc9d8031df96932e4fc9b88b54' }, "from: \"", this.from, "\"", h("br", { key: 'b9657b94a769e88f5d2754dbe11f4172f980f70f' }), "to: \"", this.to, "\"")))
        ];
    }
};
wxccTime.style = WxccTimeStyle0;

const wxccVideoModalCss = "#cover{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:9;display:none;opacity:0;transition:opacity 0.5s ease-out}#cover.covered{display:block}#my-div{position:absolute;z-index:200;background-color:#f1f1f1;text-align:center;border:1px solid #d3d3d3;top:25%;left:25%}#my-div-header{padding:10px;cursor:move;z-index:10;background-color:#2196F3;color:#fff}.sizeBar{float:right}.bigBoi{width:50%;height:50%}.hidden{display:none}.hideMe{float:left;cursor:pointer}";
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
            h("div", { key: '00c3e8437cbfdba74be8a5f58f0cec6c47803bd7', id: "cover", class: this.backDrop ? "covered" : "" }),
            h("div", { key: '9e15eb9e4cf68257f70b5373c22cd2ebd93f040c', draggable: true, id: "my-div", ref: el => this.boxxie = el, onDragStart: () => { this.backDrop = true; }, onDragEnd: this.moveIt.bind(this), class: (this.vidBig ? "bigBoi" : "") + (this.hide ? " hidden" : "") }, h("div", { key: '89efbde952620af56a620ef3c1cb182dc0116d7c', id: "my-div-header" }, h("span", { key: '15292a9150363e894cf527b972a18d30b9022c64', class: "hideMe", onClick: this.onToggleHide.bind(this) }, "Hide"), "Click here to move ", h("button", { key: '6b2e80e4fec268ec82604e4908a39e34acab8e89', class: "sizeBar", onClick: this.onToggleSize.bind(this) }, this.btnLable)), h("iframe", { key: 'f6201ddfebf02984092bde2a5923224914c436e3', src: url, height: "100%", width: "100%", frameborder: "0", loading: "lazy" }))
        ];
    }
};
wxccVideoModal.style = WxccVideoModalStyle0;

export { wxccAltair as wxcc_altair, wxccAuth as wxcc_auth_widget, SideDrawer as wxcc_guide_panel, PageControls as wxcc_page_controls, wxccTime as wxcc_time, wxccVideoModal as wxcc_video_modal };

//# sourceMappingURL=wxcc-altair_6.entry.js.map