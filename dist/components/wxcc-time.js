import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const wxccTimeCss = ".frame{position:absolute;z-index:5;height:250px;background:#ccc;left:40%;width:410px}label{color:black}header{background:#2196F3;color:white;text-align:center;padding:10px;margin-top:0}.widgets{padding:10px;margin-top:20px}.title{font-size:1.5rem}.widgets select,.widgets input{float:right}svg{fill:#c0c0c0}svg:hover{fill:#f0efef}.hideMe{float:left;margin-top:.25rem;cursor:pointer}.hidden{display:none}p{margin:1rem}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid  #2196F3;font:inherit;padding:0.15rem 0}#tabs :nth-child(1){border-top-left-radius:20px;border-bottom-left-radius:20px}#tabs :nth-last-child(1){border-top-right-radius:20px;border-bottom-right-radius:20px}#tabs button.active,#tabs button:hover,#tabs button:active{background:#2196F3;color:white;border:1px solid  #2196F3}#tabs button:focus{outline:none}#lup{float:left;padding:1rem}#lup button{float:right;background:white;color:black;border-radius:20px;text-align:center;border:1px solid black;font:inherit;padding:.1rem 1rem;margin-left:.25rem}#lup button:hover{background:#2196F3;color:white}#tmstp{background-color:#e9e7e7}";
const WxccTimeStyle0 = wxccTimeCss;

const wxccTime = /*@__PURE__*/ proxyCustomElement(class wxccTime extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        const hideIcon = h("svg", { key: 'd381be7ebe9aaef11cb26e1cd8fcbf7e891e5d5d', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 640 512" }, h("path", { key: '9c68a4da70e3d6efb7b47d92dfe02184c9bdbf63', d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" }));
        let mainContent = h("div", { key: '8a31f9258300775817c5616d528bcb124cf222f9' }, " ", h("section", { key: '1db33c3d589c0a06cee12dde60727b04d60e5b0c', class: "widgets" }, h("div", { key: '2ab15127a5e234e599a6d49f7a3e8300aa6c50ec' }, h("label", { key: '45e78dc0f80e925765b3bb4b03420a09e1908f55', id: "from" }, "From: "), h("input", { key: 'c376054de5cb140f644e8f9a141cd5372f13316b', type: "date", onChange: this.onManSet.bind(this, "from"), ref: el => this.fDate = el }), h("input", { key: '0ea8825ed5816f2cbb7e057743ac709f0dfd94a2', type: "time", onChange: this.onManSet.bind(this, "from"), ref: el => this.fTime = el }), h("select", { key: 'ecab1ad3f2356f0eab8d122001e1ca88031261f7', ref: el => this.fromSelected = el, onChange: this.onToSelect.bind(this, "from") }, h("option", { key: 'f9c9b08ce9052afbe9e2e1bd44f41448c1a6ba7b' }), h("option", { key: 'f5273427f80a67272dd50b88f3e278ac10a2b5cb', value: "600000" }, "10 minutes ago"), h("option", { key: 'f3d7fde1d789cc1f1036508bc58585c475c0f95d', value: "3600000" }, "1 hour ago"), h("option", { key: '122f9e9d169693d7a5b41a4dcb0d59218c0e711f', value: "86400000" }, "1 day ago"), h("option", { key: '7eeab1cd2a6b8cc84851f8b39a6d5970193f322f', value: "604800000" }, "1 week ago"), h("option", { key: '845a3b10612d459a6916cb63c3a6463c5c9a654f', value: "2629800000" }, "1 month ago"))), h("br", { key: '77789ca0df8cc7ff439e9aad0969277c4839389d' }), h("div", { key: 'f1edecbc528466eb25d847fac38dd6c3716435ed' }, h("label", { key: 'cb0468aea4f1ee37fa4228eb4b9a15e9246be117', id: "to" }, "To: "), h("input", { key: 'b113e1612a9855f04a66983c17a326e9d614e230', type: "date", onChange: this.onManSet.bind(this, "to"), ref: el => this.tDate = el }), h("input", { key: 'a108bf956658b7a07ad773187991492e7c6bb385', type: "time", onChange: this.onManSet.bind(this, "to"), ref: el => this.tTime = el }), h("select", { key: '67e22b288237cc1130977093597c15cbf435e175', ref: el => this.toSelected = el, onChange: this.onToSelect.bind(this, "to") }, h("option", { key: 'b46e57b78882b17e73badd9863f91ffc37c3d44f' }), h("option", { key: '1a5bd5979e93c52417c6ac2f9be2692648610ef3', value: "now" }, "Now"), h("option", { key: '8dc9b8638d11711b5fd284623f2efbea8b4e15e4', value: "600000" }, "10 minutes ago"), h("option", { key: '248d97c61615de12a26c2984555c4d04c4085485', value: "3600000" }, "1 hour ago"), h("option", { key: '91de30f5db3e3de5559aefb91b5eef2ee1b8fdf8', value: "86400000" }, "1 day ago"), h("option", { key: '6c4b737f8e269ac7994512d9cb334d5e9ea5899a', value: "604800000" }, "1 week ago")))), h("section", { key: '4e954780d3901b290600f7c004cb66d2ed207734' }, h("p", { key: 'dda8d5b245675fc33fb06e792d6534fd86454fca' }, "from: \"", this.from, "\"", h("br", { key: 'b2380958acacb90a44d2ba842f3f005da0aa33c7' }), "to: \"", this.to, "\"")));
        if (this.tab == "lookup") {
            mainContent = h("div", { key: 'e9ff32ff5b7feb8813640ce36c3f71353c27c6d0' }, h("section", { key: '51efee1e502da886d88c5f7a212eeab7b14cf2d6', id: "lup" }, h("label", { key: '0a41eae4cd477b1b15da6742589d1fddb7c494a3' }, "Epoch Timestamp: \u00A0"), h("input", { key: '05e424af57be6b8e9560e16082a586afd69e276b', ref: el => this.lupStamp = el }), h("button", { key: 'c595f740b14f66d33e3c9800054ad9243f7783f1', onClick: this.epochToTime.bind(this) }, "Convert")), h("section", { key: '956f6de2b509cb5968af38cab795a5b031e7c69e' }, h("p", { key: '0f343a9acc01aef5cb9fd596ec19d3d01da52912' }, "Timestamp: ", h("br", { key: '37711be0cd14b46da745fafa767398b893797be8' }), h("br", { key: 'e07f6419b80e34c0cfbf85f5e1f9358c5408a3a3' }), h("div", { key: '033d9a404f85971933872d0454dd48130284cb97', id: "tmstp" }, this.tStamp))));
        }
        return [
            h("div", { key: '219b19a38efbdd7092f574b67a807af754c58011', class: "frame" + (this.hide ? " hidden" : "") }, h("header", { key: 'ef4d3127e2a3e94ceb88989c8a405da52bf3a869' }, h("span", { key: '07b69ed72757899c7f209f987911f95f4e322bdb', class: "hideMe", onClick: this.onToggle.bind(this) }, hideIcon), h("div", { key: 'f172eb198e07c0a296ec6e5e63f19848dc2dab67', class: "title" }, "Time Widget")), h("section", { key: '8f6f55e603f461c77bf3c47202f3981412c8d507', id: "tabs" }, h("button", { key: '5834ccc68aa371ac8ee56af729523aab3b76fcac', class: this.tab != "lookup" ? "active" : "", onClick: () => this.tab = "create" }, "Create"), h("button", { key: '34da2ec0f2fe3888d3f31ed9ddd435d5f2099d5f', class: this.tab == "lookup" ? "active" : "", onClick: () => this.tab = "lookup" }, "Lookup")), mainContent)
        ];
    }
    static get style() { return WxccTimeStyle0; }
}, [1, "wxcc-time", {
        "td": [32],
        "fd": [32],
        "toSelected": [32],
        "fromSelected": [32],
        "tTime": [32],
        "tDate": [32],
        "fTime": [32],
        "fDate": [32],
        "to": [32],
        "from": [32],
        "hide": [32],
        "tab": [32],
        "lupStamp": [32],
        "tStamp": [32]
    }, [[16, "wxccTimeWidget", "onToggle"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wxcc-time"];
    components.forEach(tagName => { switch (tagName) {
        case "wxcc-time":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, wxccTime);
            }
            break;
    } });
}

const WxccTime = wxccTime;
const defineCustomElement = defineCustomElement$1;

export { WxccTime, defineCustomElement };

//# sourceMappingURL=wxcc-time.js.map