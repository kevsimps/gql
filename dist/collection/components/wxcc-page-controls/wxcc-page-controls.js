import { h } from "@stencil/core";
// import { lessons } from "./guide-list"
export class PageControls {
    constructor() {
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
    static get is() { return "wxcc-page-controls"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["wxcc-page-controls.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["wxcc-page-controls.css"]
        };
    }
    static get states() {
        return {
            "currentPage": {}
        };
    }
    static get events() {
        return [{
                "method": "wxccGuidePageTurn",
                "name": "wxccGuidePageTurn",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "toggleGuide",
                "name": "toggleGuide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "wxccTimeWidget",
                "name": "wxccTimeWidget",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "wxccAuthPop",
                "name": "wxccAuthPop",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "vidPop",
                "name": "vidPop",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "vodTog",
                "name": "vodTog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=wxcc-page-controls.js.map
