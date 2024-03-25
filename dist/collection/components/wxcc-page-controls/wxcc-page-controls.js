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
        return (h("div", { key: 'c330ccb4b877fe57dd1f559c5ac0c24d92cad815', class: "controls" }, h("span", { key: 'c6a56a22234cc05eacd342cec729909cd8642e0f', id: "back", onClick: this.onBack.bind(this), class: "nav" }, "Back"), h("span", { key: '2c5b492d362ad50c5ad54db9112391b3ea0638b5', id: "tools", class: "mag" }, "Tools"), h("div", { key: '69c47c3712bb33216791a022f375c43d9466ca73', class: "tools" }, h("span", { key: '3a6b1e74038d213e6eef006a8cf8987b1061da09', onClick: this.onTimeWidget.bind(this) }, "Time Tool"), h("span", { key: 'b7458b7c177e06f9d6fcd04de2b9553c55bbe107', onClick: () => { this.vidPop.emit(); } }, "Show Video"), h("span", { key: '8fbc4e1efdb4464b16b79b5978c5ffcafcb0f7c7', onClick: () => { this.wxccAuthPop.emit(); } }, "Authorization")), h("span", { key: '541a3de47cf3cd8d937820c3d083d3738c7997c4', id: "guide", onClick: this.onToggleGuide.bind(this) }, "Guide"), h("span", { key: 'c9f87a06de1f93fa518aa72a7f20866fbb7a2501', id: "next", onClick: this.onNext.bind(this), class: "nav" }, "Next")));
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
            }];
    }
}
//# sourceMappingURL=wxcc-page-controls.js.map
