import { h } from "@stencil/core";
export class wxccTime {
    constructor() {
        this.td = new Date();
        this.fd = new Date();
        this.toSelected = undefined;
        this.fromSelected = undefined;
        this.tTime = undefined;
        this.tDate = undefined;
        this.fTime = undefined;
        this.fDate = undefined;
        this.to = undefined;
        this.from = undefined;
        this.hide = true;
    }
    onToSelect(zzz) {
        console.log(zzz);
        if (zzz === "from") {
            if (!this.fromSelected.value) {
                console.log(this.fDate.value + "T" + this.fTime.value);
                this.fd = new Date(this.fDate.value + "T" + this.fTime.value);
            }
            else if (this.fromSelected.value === "now") {
                this.fd = new Date(Date.now());
            }
            else {
                this.fd = new Date(Date.now() - +this.fromSelected.value);
            }
            // this.fDate.value = this.fd.toISOString().slice(0, 10)
            let month = ("0" + (this.fd.getMonth() + 1)).slice(-2, 3);
            let date = ("0" + (this.fd.getDate() + 1)).slice(-2, 3);
            // console.log(month)
            this.fDate.value = (this.fd.getFullYear() + "-" + month + "-" + date);
            this.fTime.value = this.fd.toTimeString().slice(0, 8);
            this.from = this.fd.valueOf();
        }
        else {
            if (!this.toSelected.value) {
                this.td = new Date(this.tDate.value + "T" + this.tTime.value);
            }
            else if (this.toSelected.value === "now") {
                this.td = new Date(Date.now());
            }
            else {
                this.td = new Date(Date.now() - +this.toSelected.value);
            }
            // this.tDate.value = this.td.toISOString().slice(0, 10)
            let month = ("0" + (this.td.getMonth() + 1)).slice(-2, 3);
            let date = ("0" + (this.td.getDate() + 1)).slice(-2, 3);
            // console.log(month)
            this.tDate.value = (this.td.getFullYear() + "-" + month + "-" + date);
            this.tTime.value = this.td.toTimeString().slice(0, 8);
            this.to = this.td.valueOf();
            console.log(this.td.getDate());
        }
    }
    onManSet(zzz) {
        if (zzz === "from") {
            this.fromSelected.value = null;
        }
        else {
            this.toSelected.value = null;
        }
        this.onToSelect(zzz);
    }
    onToggle() {
        this.hide = !this.hide;
    }
    render() {
        return [
            h("div", { key: '0af5a1b34c5e9e1286d433e16b99773161a4b98e', class: "frame" + (this.hide ? " hidden" : "") }, h("header", { key: 'ba4b2471857ee377f9c9789f270cccf015304db3' }, h("span", { key: '186a9a8c23964e3a6510808ac06f213e91c292f1', class: "hideMe", onClick: this.onToggle.bind(this) }, "Hide"), h("div", { key: 'aaf74d1280921783bb199f55f802854272a2d417', class: "title" }, "Time Widget")), h("section", { key: '1ab4fbb451eab7b7cc40170c0bfb4f88b69225d8', class: "widgets" }, h("div", { key: '0b10f9e978ba1aa9312302b6f413439e7185e7cd' }, h("label", { key: 'fe8cc06de1c8c0de42ee05e23dfe3d438f1d35cb', id: "from" }, "From: "), h("input", { key: '82486c60a1821a87dabe2b6f0303f57648e53e14', type: "date", onChange: this.onManSet.bind(this, "from"), ref: el => this.fDate = el }), h("input", { key: '9ecd2ef3a392c3679da566583a807231264eb5d7', type: "time", onChange: this.onManSet.bind(this, "from"), ref: el => this.fTime = el }), h("select", { key: '9c7bc33a528d4c2a0ea855ecd2b82fbafc8bc250', ref: el => this.fromSelected = el, onChange: this.onToSelect.bind(this, "from") }, h("option", { key: 'b255c3a93301831d2d612a3e2adf2904d35777ad' }), h("option", { key: '14069fac3e21d507e64c2a7641b39985422a1e7a', value: "600000" }, "10 minutes ago"), h("option", { key: '9c8b93e6a279084965b3314b1a413b2bab00fd2a', value: "3600000" }, "1 hour ago"), h("option", { key: '8ea01dec34094be10911c2ddb391a1e4959f41e5', value: "86400000" }, "1 day ago"), h("option", { key: '0db847f98854cda0a712124a32d004fad7264817', value: "604800000" }, "1 week ago"))), h("br", { key: 'd00713d9a395b672013a2b540b4b8f7130e37489' }), h("div", { key: 'dc33cd4d93c6465bc7cf73485c2eb77972d9b2b2' }, h("label", { key: '7d0a335f604c6bf4e61b7a5108aca4d7c5ffa4d5', id: "to" }, "To: "), h("input", { key: '333e9771c8388910c113f5cf8336eb5ec1a7d34f', type: "date", onChange: this.onManSet.bind(this, "to"), ref: el => this.tDate = el }), h("input", { key: '3997394e32a98e968429d0e18435db3fa30090bd', type: "time", onChange: this.onManSet.bind(this, "to"), ref: el => this.tTime = el }), h("select", { key: '2fefc932be1b98555cff1546478e3197760f83a9', ref: el => this.toSelected = el, onChange: this.onToSelect.bind(this, "to") }, h("option", { key: '8a28a9393a880ec33ddbf2ec6e0dfff0efaa77a7' }), h("option", { key: '6e6bc389648509781bd5224b6eb116c9bc9b52be', value: "now" }, "Now"), h("option", { key: 'a4ccb01e46fc8260c367aca49a7f877916e7de8c', value: "600000" }, "10 minutes ago"), h("option", { key: '98c5952bc0f2134d7fced2d08a872e2e6e5ed67e', value: "3600000" }, "1 hour ago"), h("option", { key: 'edf4887af39ff155759d7f0987e17aea271da061', value: "86400000" }, "1 day ago"), h("option", { key: '24feb591ee2286a94211484a4b6560d1363b0d5b', value: "604800000" }, "1 week ago")))), h("br", { key: '223b429059c5e134dff61d38315c03f4c8c00b13' }), h("section", { key: 'f9704abd7791eae15f18e777df6b57a4246eeeb4' }, h("p", { key: 'd26ce3944164f0dc9d8031df96932e4fc9b88b54' }, "from: \"", this.from, "\"", h("br", { key: 'b9657b94a769e88f5d2754dbe11f4172f980f70f' }), "to: \"", this.to, "\"")))
        ];
    }
    static get is() { return "wxcc-time"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["wxcc-time.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["wxcc-time.css"]
        };
    }
    static get states() {
        return {
            "td": {},
            "fd": {},
            "toSelected": {},
            "fromSelected": {},
            "tTime": {},
            "tDate": {},
            "fTime": {},
            "fDate": {},
            "to": {},
            "from": {},
            "hide": {}
        };
    }
    static get listeners() {
        return [{
                "name": "wxccTimeWidget",
                "method": "onToggle",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=wxcc-time.js.map
