import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const wxccAuthWidgetCss = ".frame{position:absolute;z-index:5;height:25vh;background:#ccc;left:20%;top:50%;padding:2em}h1{text-align:center}.hidden{display:none}";
const WxccAuthWidgetStyle0 = wxccAuthWidgetCss;

const wxccAuth = /*@__PURE__*/ proxyCustomElement(class wxccAuth extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return WxccAuthWidgetStyle0; }
}, [1, "wxcc-auth-widget", {
        "callbackUrl": [1, "callback-url"],
        "token": [32],
        "expStamp": [32],
        "hide": [32],
        "burp": [64]
    }, [[16, "wxccAuthPop", "onGetAuth"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wxcc-auth-widget"];
    components.forEach(tagName => { switch (tagName) {
        case "wxcc-auth-widget":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, wxccAuth);
            }
            break;
    } });
}

const WxccAuthWidget = wxccAuth;
const defineCustomElement = defineCustomElement$1;

export { WxccAuthWidget, defineCustomElement };

//# sourceMappingURL=wxcc-auth-widget.js.map