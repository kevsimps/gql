import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const wxccVideoModalCss = "#cover{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:9;display:none;opacity:0;transition:opacity 0.5s ease-out}#cover.covered{display:block}#my-div{position:absolute;z-index:200;background-color:#f1f1f1;text-align:center;border:1px solid #d3d3d3;top:25%;left:25%}#my-div-header{padding:10px;cursor:move;z-index:10;background-color:#2196F3;color:#fff}.sizeBar{float:right}.bigBoi{width:50%;height:50%}.hidden{display:none}.hideMe{float:left;cursor:pointer}";
const WxccVideoModalStyle0 = wxccVideoModalCss;

const wxccVideoModal = /*@__PURE__*/ proxyCustomElement(class wxccVideoModal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
            h("div", { key: '079cdba25e97d542449b8a20613e6a83b17a6085', id: "cover", class: this.backDrop ? "covered" : "" }),
            h("div", { key: '8fa5d3af3cc6af857dc84fa37f897e2744edd558', draggable: true, id: "my-div", ref: el => this.boxxie = el, onDragStart: () => { this.backDrop = true; }, onDragEnd: this.moveIt.bind(this), class: (this.vidBig ? "bigBoi" : "") + (this.hide ? " hidden" : "") }, h("div", { key: 'f58ea4514f8e2eb0875e5222a0a60fae23ece876', id: "my-div-header" }, h("span", { key: '6e66920986196d7ded6700f6a74c31f6641dfb7f', class: "hideMe", onClick: this.onToggleHide.bind(this) }, "Hide"), "Click here to move ", h("button", { key: '0de77369c676cb46b086d1f532ec7b9748ba26d0', class: "sizeBar", onClick: this.onToggleSize.bind(this) }, this.btnLable)), h("iframe", { key: '50227e0bc1ed37b339cd8f9e6f863a557d91ce1c', src: url, height: "100%", width: "100%", frameborder: "0", loading: "lazy" }))
        ];
    }
    static get style() { return WxccVideoModalStyle0; }
}, [1, "wxcc-video-modal", {
        "vidId": [1537, "vid-id"],
        "vidBig": [32],
        "btnLable": [32],
        "backDrop": [32],
        "hide": [32]
    }, [[16, "vidPop", "onVidPop"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wxcc-video-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "wxcc-video-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, wxccVideoModal);
            }
            break;
    } });
}

const WxccVideoModal = wxccVideoModal;
const defineCustomElement = defineCustomElement$1;

export { WxccVideoModal, defineCustomElement };

//# sourceMappingURL=wxcc-video-modal.js.map