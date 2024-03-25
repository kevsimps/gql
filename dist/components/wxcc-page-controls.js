import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const wxccPageControlsCss = ".controls {\r\n    width: 100%;\r\n    background-color: #555;\r\n    text-align: center;\r\n    transition: all 0.3s ease;\r\n    color: white;\r\n    font-size: 36px;\r\n    margin: auto;\r\n    height: 8vh;\r\n    overflow: hidden;\r\n    /* position: relative; */\r\n    /* display: grid; */\r\n    /* display:flex; */\r\n\r\n    /* justify-content: center; */\r\n    /* align-items: center; */\r\n\r\n}\r\n\r\nbutton {\r\n    padding: 14px 28px;\r\n    margin: 15px;\r\n    width: 20%\r\n}\r\n\r\nspan {\r\n    display: inline-block;\r\n    padding: 5px 28px;\r\n    margin: 1.5vh;\r\n    width: 15%;\r\n    background: #998f8f;\r\n    cursor: pointer;\r\n    border-radius: 30px\r\n        /* height: 4vh; */\r\n\r\n}\r\n\r\nspan:hover {\r\n    /* background: #0c0a0a; */\r\n    background: #2196F3;\r\n    ;\r\n\r\n}\r\n\r\n.tools {\r\n    margin-top: -2vh;\r\n    padding: 5px 28px;\r\n    position: absolute;\r\n    z-index: 10;\r\n    width: 15%;\r\n    background: #998f8f;\r\n    /* left: 21.65%; */\r\n    left: 31.33%;\r\n    display: none;\r\n    /* transition: display ease-out 5s; */\r\n\r\n}\r\n@media(width <= 1440px){\r\n    .tools{\r\n        left: 30.33%;\r\n    }\r\n}\r\n.tools span {\r\n    margin: 2px;\r\n    /* width: auto; */\r\n    width: 13vw;\r\n\r\n}\r\n\r\n.nav {\r\n    width: 5%\r\n}\r\n\r\n#tools:hover {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n.mag:hover~.tools {\r\n    display: block;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n\r\n\r\n.controls:has(.tools:hover) #tools {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n\r\n.tools:hover {\r\n    display: block;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n    transition: block ease-in-out 2s;\r\n}";
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