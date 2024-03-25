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
            let date = ("0" + (this.fd.getDate())).slice(-2, 3);
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
            let date = ("0" + (this.td.getDate())).slice(-2, 3);
            // console.log(month)
            this.tDate.value = (this.td.getFullYear() + "-" + month + "-" + date);
            this.tTime.value = this.td.toTimeString().slice(0, 8);
            this.to = this.td.valueOf();
            // console.log(this.td.getDate())
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
        const hideIcon = h("svg", { key: 'a9aed2d4c02b44400a1b2790c0e3cfdb6a01be69', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 640 512" }, h("path", { key: '096c500be383ed7fa6ef7f4c212cac637ee14a3c', d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" }));
        return [
            h("div", { key: 'f761823afa01286a6ee70b7472541145972f6cfb', class: "frame" + (this.hide ? " hidden" : "") }, h("header", { key: '129507c17f76a9e89dd4f8bf8fdf329934d5e170' }, h("span", { key: 'c4fb5790ab685437c75d6a14c10ca2f1f01a2016', class: "hideMe", onClick: this.onToggle.bind(this) }, hideIcon), h("div", { key: 'bcf7da6f416978248ce1c2e4bbd144e0e412282f', class: "title" }, "Time Widget")), h("section", { key: 'b1e35dd41960216a6e7a7658a04ce499e60b5268', class: "widgets" }, h("div", { key: '82d1ffd161c6d9bcaacbf6189238016d7c15560d' }, h("label", { key: '0faf8a632e10a188201a0d5b71f05c58db27c59a', id: "from" }, "From: "), h("input", { key: '5a531e463271153b51426eee63f4c4160d046aab', type: "date", onChange: this.onManSet.bind(this, "from"), ref: el => this.fDate = el }), h("input", { key: '5002141fea24ccc594e38aa81030b4cfa772d290', type: "time", onChange: this.onManSet.bind(this, "from"), ref: el => this.fTime = el }), h("select", { key: '20281f8797885bc005bc433c74c7886567081bc3', ref: el => this.fromSelected = el, onChange: this.onToSelect.bind(this, "from") }, h("option", { key: '297c4b2b552ec6124d03e8841acb2cd631c0a3c0' }), h("option", { key: 'ea80009d0dae3ac6d93bbaf05b03ab8651c83a1e', value: "600000" }, "10 minutes ago"), h("option", { key: '89d3b0f6a59559be1012fb0c856c0f6b8b4d24ee', value: "3600000" }, "1 hour ago"), h("option", { key: '78435478e0360359c1325b6f71061ead1c9700c9', value: "86400000" }, "1 day ago"), h("option", { key: '5719a4c7d48c4d5bdedff7ada315d8d11857ec7d', value: "604800000" }, "1 week ago"))), h("br", { key: 'bff8e3586291b6d73b1f601d6e5b345a12959350' }), h("div", { key: '8fe94c0d82781ef00d0337f5cc3b2ab3852820af' }, h("label", { key: 'c87acae309a9841e60d9c1478c283486c10f014a', id: "to" }, "To: "), h("input", { key: '475304ec1de471c22b1c4822b2bc98f01f43a7fc', type: "date", onChange: this.onManSet.bind(this, "to"), ref: el => this.tDate = el }), h("input", { key: '260bcc4c531097e0ba5cfbefdbe2825d84fed729', type: "time", onChange: this.onManSet.bind(this, "to"), ref: el => this.tTime = el }), h("select", { key: 'db3616750f6203bc5b61a67273d565edeb43ca53', ref: el => this.toSelected = el, onChange: this.onToSelect.bind(this, "to") }, h("option", { key: 'b6b64cef2003cb6f4e3546970a3aca7611b7b1a7' }), h("option", { key: 'e478c3e06f9cc3fd1223ff2ae07d3f8a532a5b20', value: "now" }, "Now"), h("option", { key: 'bc7a812434cdf236d1675af714a11dc3c7eafd10', value: "600000" }, "10 minutes ago"), h("option", { key: 'a1dcded76bb75a7da2a0b86571ce0f4a6572a9d3', value: "3600000" }, "1 hour ago"), h("option", { key: '91d3ca3985c51c1797d6fd0eb17a5c2d8d73a839', value: "86400000" }, "1 day ago"), h("option", { key: 'e90390275678de997f0045853cb01f7b658d41f9', value: "604800000" }, "1 week ago")))), h("br", { key: '210162dba2b1b5847eb359c33cf01fac57a73ad3' }), h("section", { key: '96675969a674843d6915a3eac7282014aabbebc1' }, h("p", { key: 'f633ef2a0e598b430300b820978b2d141446f8a6' }, "from: \"", this.from, "\"", h("br", { key: 'b39ff2ef959d3c3b64bd7510d49110c1fa8ce5fb' }), "to: \"", this.to, "\"")))
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
