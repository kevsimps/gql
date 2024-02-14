import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const wxccPageControlsCss = ".controls{width:100%;background-color:#555;text-align:center;transition:all 0.3s ease;color:white;font-size:36px;margin:auto;height:8vh;overflow:hidden;}button{padding:14px 28px;margin:15px;width:20%}span{display:inline-block;padding:5px 28px;margin:1.5vh;width:15%;background:#998f8f;cursor:pointer;}span:hover{background:#0c0a0a}.tools{margin-top:-1.5vh;padding:5px 28px;position:absolute;z-index:10;width:15%;background:#998f8f;left:31.33%;display:none}.tools span{margin:2px;width:auto}.nav{width:5%}.mag:hover~.tools{display:block}.tools:hover{display:block}";
const WxccPageControlsStyle0 = wxccPageControlsCss;

const PageControls = /*@__PURE__*/ proxyCustomElement(class PageControls extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return WxccPageControlsStyle0; }
}, [1, "wxcc-page-controls", {
        "currentPage": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wxcc-page-controls"];
    components.forEach(tagName => { switch (tagName) {
        case "wxcc-page-controls":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PageControls);
            }
            break;
    } });
}

const WxccPageControls = PageControls;
const defineCustomElement = defineCustomElement$1;

export { WxccPageControls, defineCustomElement };

//# sourceMappingURL=wxcc-page-controls.js.map