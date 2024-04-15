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
        return (h("div", { key: '25e29195bcc21f14f1179de524360f437002c743', class: "controls" }, h("span", { key: 'c69713131e0ed6acf64913aa4fe153f2dd707164', id: "back", onClick: this.onBack.bind(this), class: "nav btn" }, "Back"), h("span", { key: '69e6eb74ee56da45455fc439b8c66b179907b9b9', id: "tools", class: "mag btn" }, "Tools"), h("div", { key: 'c4fc126e1e23caba2d5b0ea282eb2f6d73b4ab31', class: "tools" }, h("span", { key: 'ce746b81f7387b9a6a452c8d4f130b04e86c73d3', onClick: this.onTimeWidget.bind(this) }, "Time Widget"), h("span", { key: 'fd935b97295f3fc10fbc96f4366aeed90f26582e', onClick: () => { this.vodTog.emit(); } }, "Show Video"), h("span", { key: '13e3654cf39527b5a71c33ff879be4cbafc7eb46', onClick: () => { this.wxccAuthPop.emit(); } }, "Authorization")), h("span", { key: '30fd6be543ebc79d7e6986447069f9fe53f98b84', class: "btn", id: "guide", onClick: this.onToggleGuide.bind(this) }, "Guide"), h("span", { key: '8229ada14838478cc1ce018d97689f637fbc19f5', id: "next", onClick: this.onNext.bind(this), class: "nav btn" }, "Next")));
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
