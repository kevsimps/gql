import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const wxccTimeCss = ".frame{position:absolute;z-index:5;height:250px;background:#ccc;left:40%;width:410px}label{color:black}header{background:#2196F3;color:white;text-align:center;padding:10px;margin-top:0}.widgets{padding:10px;margin-top:20px}.title{font-size:1.5rem}.widgets select,.widgets input{float:right}svg{fill:#c0c0c0}svg:hover{fill:#f0efef}.hideMe{float:left;margin-top:.25rem;cursor:pointer}.hidden{display:none}p{margin:1rem}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid black;font:inherit;padding:0.15rem 0}#tabs :nth-child(1){border-top-left-radius:20px;border-bottom-left-radius:20px}#tabs :nth-last-child(1){border-top-right-radius:20px;border-bottom-right-radius:20px}#tabs button.active,#tabs button:hover,#tabs button:active{background:#2196F3;color:white}#tabs button:focus{outline:none}#lup{float:left;padding:1rem}#lup button{float:right;background:white;color:black;border-radius:20px;text-align:center;border:1px solid black;font:inherit;padding:.1rem 1rem;margin-left:.25rem}#lup button:hover{background:#2196F3;color:white}#tmstp{background-color:#e9e7e7}";
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
        const hideIcon = h("svg", { key: '703da3d402f68e9e30be970b34042404ad3ab7a4', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 640 512" }, h("path", { key: '2297e2243e7390de6a6b483392bfbf7caf8a9f39', d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" }));
        let mainContent = h("div", { key: 'f364d4350288d6e0d26a6a1d281f94fc90232066' }, " ", h("section", { key: '5377ba55beead18bd912c14f05c9692d450373b9', class: "widgets" }, h("div", { key: '2afe2273e7685f79e1eabdf154d1a8f0e5abf3de' }, h("label", { key: '7ac1c5209ee0af8c44a1659eff5027c72cc6432e', id: "from" }, "From: "), h("input", { key: 'f54cf44c92416a840d20dfe0f177db5db470cea4', type: "date", onChange: this.onManSet.bind(this, "from"), ref: el => this.fDate = el }), h("input", { key: 'fae136494fc3c877854ad9c5456666ba3a54fb88', type: "time", onChange: this.onManSet.bind(this, "from"), ref: el => this.fTime = el }), h("select", { key: '83df687abcf2467839ba3579c0efb09923ba10e5', ref: el => this.fromSelected = el, onChange: this.onToSelect.bind(this, "from") }, h("option", { key: '950f7464aa969344ab557c2bf904c9a98dd8f340' }), h("option", { key: '2275b4e77c0b23411cc8a4ff9c29e01be1a04dbb', value: "600000" }, "10 minutes ago"), h("option", { key: '20d8ea78a04831e7e03cf8a9f167a6fb0621ffae', value: "3600000" }, "1 hour ago"), h("option", { key: 'd5a8481e73a2fe2e739a2192e1b6d2af20312506', value: "86400000" }, "1 day ago"), h("option", { key: 'e65c147f161ec2cf50266a45fcc4c474f9a87e86', value: "604800000" }, "1 week ago"), h("option", { key: '59230e509e89c239d9b1a301ecab49d0fffb1a8c', value: "2629800000" }, "1 month ago"))), h("br", { key: 'f7c2d969f751edf20a622e2afccb2fce689f88c4' }), h("div", { key: '649b3b8e9b6c807291d7556f242987c0b09f6c67' }, h("label", { key: '874d195ae2082b06806f12a457ca54d5f14c9164', id: "to" }, "To: "), h("input", { key: '7c363d95babc39d37e39fbef9ad83164ac4b806f', type: "date", onChange: this.onManSet.bind(this, "to"), ref: el => this.tDate = el }), h("input", { key: '587daa13d23c6fd202eaf01c523bd5e6bc5cf61b', type: "time", onChange: this.onManSet.bind(this, "to"), ref: el => this.tTime = el }), h("select", { key: 'db4ace5f16c55f63bcf3ae1f72b54817dec0b279', ref: el => this.toSelected = el, onChange: this.onToSelect.bind(this, "to") }, h("option", { key: '6e024aac1a34620a6a0ea17cca95932434b62337' }), h("option", { key: 'ed3e75d8ca2d97314000670f66585d12be16f5a5', value: "now" }, "Now"), h("option", { key: 'f4dba7047a04f7ba0bee9515990da150e5681f09', value: "600000" }, "10 minutes ago"), h("option", { key: 'f94e5b61b6beda837422e8d44a283f785b895f69', value: "3600000" }, "1 hour ago"), h("option", { key: '3232c929de0ba2bdc3a6456e9a32229e31f3efb5', value: "86400000" }, "1 day ago"), h("option", { key: '68cef4719fbc00e71df708dab8fbf7b51a1f3cb9', value: "604800000" }, "1 week ago")))), h("section", { key: '83325d470551639ccea41074b993cfa93f15f8ff' }, h("p", { key: '53056599f7f21d0f13544c45bf97015ad8dd80e9' }, "from: \"", this.from, "\"", h("br", { key: '9faf4c0b586770165fb271538099c6cb365a3850' }), "to: \"", this.to, "\"")));
        if (this.tab == "lookup") {
            mainContent = h("div", { key: '8b091bcf95e290a2d6a7e466276ad8bcb7708192' }, h("section", { key: '1cb77b24bc74b88fb60a47c14dd958c87ba337b2', id: "lup" }, h("label", { key: '638490e570f306683763558342aca5449e3ea71b' }, "Epoch Timestamp: \u00A0"), h("input", { key: '8e513edd5f6fa6929451820c280218199f299ff5', ref: el => this.lupStamp = el }), h("button", { key: '86b5cfb66835ab59e8966782cc81ca820731be40', onClick: this.epochToTime.bind(this) }, "Convert")), h("section", { key: '73a83beb13d32faa5fff8ea5259f7073fa996834' }, h("p", { key: '5f5c7f2c5bc8d0da79cb5089e4ffd53492d0e7ba' }, "Timestamp: ", h("br", { key: '8c397fd5ddf8224266241c2672043573b77a712d' }), h("br", { key: '5e863f76c327aaeb538515c41e3b6b9612145c2f' }), h("div", { key: 'bced169da0ad6f52ef76aa610477df8423c2bec3', id: "tmstp" }, this.tStamp))));
        }
        return [
            h("div", { key: '3d917ffba1114e232d3c4639d734ccbe67b272e6', class: "frame" + (this.hide ? " hidden" : "") }, h("header", { key: 'e79fbae861aad47d143eff2b1dae014837bd0b5c' }, h("span", { key: 'e9ab095c2a8f0a0252e3c6c850250c6d92f991c1', class: "hideMe", onClick: this.onToggle.bind(this) }, hideIcon), h("div", { key: 'a9c91abbe125ecb651a0a77e9f5457c153ad8f7b', class: "title" }, "Time Widget")), h("section", { key: 'c6c7805ad7b0f9406c3824f5db61665658538ea1', id: "tabs" }, h("button", { key: 'e90f759c3ff693e968661c28aaa10e7b36cc6546', class: this.tab != "lookup" ? "active" : "", onClick: () => this.tab = "create" }, "Create"), h("button", { key: '86ed22d03622fd67b7226e3424b34ed930cc10b7', class: this.tab == "lookup" ? "active" : "", onClick: () => this.tab = "lookup" }, "Lookup")), mainContent)
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