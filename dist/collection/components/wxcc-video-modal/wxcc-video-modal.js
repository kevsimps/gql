import { h } from "@stencil/core";
export class wxccVideoModal {
    constructor() {
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
    static get is() { return "wxcc-video-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["wxcc-video-modal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["wxcc-video-modal.css"]
        };
    }
    static get properties() {
        return {
            "vidId": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "vid-id",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "vidBig": {},
            "btnLable": {},
            "backDrop": {},
            "hide": {}
        };
    }
    static get listeners() {
        return [{
                "name": "vidPop",
                "method": "onVidPop",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=wxcc-video-modal.js.map
