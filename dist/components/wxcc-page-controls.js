import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const wxccPageControlsCss = ".controls{width:100%;background-color:#555;text-align:center;transition:all 0.3s ease;color:white;font-size:36px;margin:auto;height:8vh;overflow:hidden;}button{padding:14px 28px;margin:15px;width:20%}span{display:inline-block;padding:5px 28px;margin:1.5vh;width:15%;background:#998f8f;cursor:pointer;}span:hover{background:#0c0a0a}.tools{margin-top:-2vh;padding:5px 28px;position:absolute;z-index:10;width:15%;background:#998f8f;left:31.33%;display:none;}.tools span{margin:2px;width:auto}.nav{width:5%}.mag:hover~.tools{display:block}.tools:hover{display:block;}";
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
        return (h("div", { key: '93739d34b3209ba33f38fa7069e59b53fc4f2cfd', class: "controls" }, h("span", { key: '585c2fe01a00c69666ac14d8326bc869c8b70e63', id: "back", onClick: this.onBack.bind(this), class: "nav" }, "Back"), h("span", { key: 'a22835f39677ba6f7e449a7e7c53cee4ff1c836c', id: "tools", class: "mag" }, "Tools"), h("div", { key: 'ba79ab399639fca3ed90576e8d5e127de8f04dbe', class: "tools" }, h("span", { key: '57f36cd3a173a20c93d612ec5799fba148fafe67', onClick: this.onTimeWidget.bind(this) }, "Time Tool"), h("span", { key: '72232113f0734edf0d4d1419cebde9c8a7a8b324', onClick: () => { this.vidPop.emit(); } }, "Show Video"), h("span", { key: '358a102dc97562f9eca7f55cadcae88e72efa14c', onClick: () => { this.wxccAuthPop.emit(); } }, "Authorization")), h("span", { key: '5c4f0f872f07dcf462ffd3c365c975ea21f567e3', id: "guide", onClick: this.onToggleGuide.bind(this) }, "Guide"), h("span", { key: '6565226ba24e6c2466da169381e022c97d8a3756', id: "next", onClick: this.onNext.bind(this), class: "nav" }, "Next")));
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