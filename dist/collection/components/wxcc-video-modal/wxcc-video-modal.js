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
            h("div", { key: '00c3e8437cbfdba74be8a5f58f0cec6c47803bd7', id: "cover", class: this.backDrop ? "covered" : "" }),
            h("div", { key: '9e15eb9e4cf68257f70b5373c22cd2ebd93f040c', draggable: true, id: "my-div", ref: el => this.boxxie = el, onDragStart: () => { this.backDrop = true; }, onDragEnd: this.moveIt.bind(this), class: (this.vidBig ? "bigBoi" : "") + (this.hide ? " hidden" : "") }, h("div", { key: '89efbde952620af56a620ef3c1cb182dc0116d7c', id: "my-div-header" }, h("span", { key: '15292a9150363e894cf527b972a18d30b9022c64', class: "hideMe", onClick: this.onToggleHide.bind(this) }, "Hide"), "Click here to move ", h("button", { key: '6b2e80e4fec268ec82604e4908a39e34acab8e89', class: "sizeBar", onClick: this.onToggleSize.bind(this) }, this.btnLable)), h("iframe", { key: 'f6201ddfebf02984092bde2a5923224914c436e3', src: url, height: "100%", width: "100%", frameborder: "0", loading: "lazy" }))
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
