import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const wxccPageControlsCss = ".controls {\r\n    width: 100%;\r\n    background-color: #555;\r\n    text-align: center;\r\n    transition: all 0.3s ease;\r\n    color: white;\r\n    font-size: 36px;\r\n    margin: auto;\r\n    height: 8vh;\r\n    overflow: hidden;\r\n    /* position: relative; */\r\n    /* display: grid; */\r\n    /* display:flex; */\r\n\r\n    /* justify-content: center; */\r\n    /* align-items: center; */\r\n    font-family:Arial, Helvetica, sans-serif;\r\n\r\n}\r\n\r\nbutton {\r\n    padding: 14px 28px;\r\n    margin: 15px;\r\n    width: 20%\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    padding: 5px 28px;\r\n    margin: 1.5vh;\r\n    width: 15%;\r\n    background: #998f8f;\r\n    cursor: pointer;\r\n    border-radius: 30px\r\n        /* height: 4vh; */\r\n\r\n}\r\n\r\nspan:hover {\r\n    /* background: #0c0a0a; */\r\n    background: #2196F3;\r\n    ;\r\n\r\n}\r\n\r\n.tools {\r\n    margin-top: -2vh;\r\n    /* padding: 5px 28px; */\r\n    position: absolute;\r\n    z-index: 10;\r\n    width: 18%;\r\n    background: #998f8f;\r\n    /* left: 21.65%; */\r\n    left: 31.33%;\r\n    display: none;\r\n    overflow: hidden;\r\n    /* transition: display ease-out 5s; */\r\n    font-size: 32px;\r\n\r\n}\r\n@media(width <= 1440px){\r\n    .tools{\r\n        left: 30.33%;\r\n        width: 19%;\r\n\r\n    }\r\n}\r\n\r\n.nav {\r\n    width: 5%\r\n}\r\n\r\n#tools:hover {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n.mag:hover~.tools {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n\r\n\r\n.controls:has(.tools:hover) #tools {\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n\r\n.tools:hover {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-bottom-right-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n    transition: block ease-in-out 2s;\r\n}";
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
        this.vodTog = createEvent(this, "vodTog", 7);
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
        return (h("div", { key: 'f60b293f722588fcfbb347c9e846653105eaf34f', class: "controls" }, h("span", { key: '56c6c36db9092c3efc7f8a9e8f18289b3eb0d128', id: "back", onClick: this.onBack.bind(this), class: "nav btn" }, "Back"), h("span", { key: 'f372c88b0988b9d4025d7069f4335106566d941e', id: "tools", class: "mag btn" }, "Tools"), h("div", { key: '5ab3045c0fe5fa48007d17a45f5f9a248c8f01e9', class: "tools" }, h("span", { key: 'e94f6869bf36a98b8c1c8a43f6011ddd679750c4', onClick: this.onTimeWidget.bind(this) }, "Time Widget"), h("span", { key: 'c5502fc835443b1239aac553c275835f4158c8c0', onClick: () => { this.vodTog.emit(); } }, "Toggle Video"), h("span", { key: '48056414914cf8c2321307cc0155025ecbacf4ee', onClick: () => { this.wxccAuthPop.emit(); } }, "Authorization")), h("span", { key: '713b811463419772358327663214b03c4979decc', class: "btn", id: "guide", onClick: this.onToggleGuide.bind(this) }, "Guide"), h("span", { key: 'e771ccf18f615c42f6866dac417543e7b81d7c97', id: "next", onClick: this.onNext.bind(this), class: "nav btn" }, "Next")));
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