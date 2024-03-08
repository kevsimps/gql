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
        return [
            h("div", { key: '83aff60a620ccb0e152ae40bc79c21718e52cab7', class: "frame" + (this.hide ? " hidden" : "") }, h("header", { key: 'ba78b496434fa09a7e5ee55a1e465fa1fd37a6cf' }, h("span", { key: '4caed5195322d61b1503dd31c6e3447563fbdd48', class: "hideMe", onClick: this.onToggle.bind(this) }, "Hide"), h("div", { key: 'ee5d050605106819266a8b6bfb9e361a18cc8173', class: "title" }, "Time Widget")), h("section", { key: '93146168855757696e3fae64981d2e609b693850', class: "widgets" }, h("div", { key: '6710e950cdbcf44ceb00ebea469cf95ad09b7961' }, h("label", { key: '13e35fb30c5e85dd044c32c4c80cca2e08c34d58', id: "from" }, "From: "), h("input", { key: '480b9b43620a431173b034afaf1d0af9d4064ad2', type: "date", onChange: this.onManSet.bind(this, "from"), ref: el => this.fDate = el }), h("input", { key: '00b1c87ed30eea67ee9e6566d29cf5193c432359', type: "time", onChange: this.onManSet.bind(this, "from"), ref: el => this.fTime = el }), h("select", { key: 'b725301496ec9a17446f5d294fed3a7c337960d3', ref: el => this.fromSelected = el, onChange: this.onToSelect.bind(this, "from") }, h("option", { key: 'b78acbcd554026c86e5815bc8ada4cff8b122034' }), h("option", { key: 'fbe96af98f36203fabafdee68421de40133c9b6d', value: "600000" }, "10 minutes ago"), h("option", { key: '170b6e8c4075a4c4b4a5648006a5451ef9da87c4', value: "3600000" }, "1 hour ago"), h("option", { key: '85d3967c8a8548062b968239f019ced7559e9d1e', value: "86400000" }, "1 day ago"), h("option", { key: '0e8c91ea3fdb4824364f89db125de6990f56c61b', value: "604800000" }, "1 week ago"))), h("br", { key: 'a601dfdebe80e07050c92d4b71bbcf56b37d6b76' }), h("div", { key: '102f32924271cbef25842de188d4f7efaa227ef5' }, h("label", { key: 'e3cd9cf556caea16e81fe9ff1efba37fed0df51f', id: "to" }, "To: "), h("input", { key: '7cf31494d794908eb675be14d430e2afaa1448b7', type: "date", onChange: this.onManSet.bind(this, "to"), ref: el => this.tDate = el }), h("input", { key: '2c1734a5a4740f50433dfdfbb10530c4d2b1b0f1', type: "time", onChange: this.onManSet.bind(this, "to"), ref: el => this.tTime = el }), h("select", { key: '6667ec13c577e5bce2c765da35e53b39849e96cd', ref: el => this.toSelected = el, onChange: this.onToSelect.bind(this, "to") }, h("option", { key: 'a214b3987293caaacb74fc42c8ebbb4b2dac4757' }), h("option", { key: '8315ee18ab31a979106bb42e75ba117ff1ef4f38', value: "now" }, "Now"), h("option", { key: '680b0afb357132adf286c970be4a50a979140263', value: "600000" }, "10 minutes ago"), h("option", { key: '51c35ae1905672c44ae351a042998512f40d2610', value: "3600000" }, "1 hour ago"), h("option", { key: '32f7e0be2bad5db598309d10c91b886660913e17', value: "86400000" }, "1 day ago"), h("option", { key: '183480f79362c705e81b1f72094b3c17072fb113', value: "604800000" }, "1 week ago")))), h("br", { key: 'a194f8e8c1a471108d0fa6ef560b9b97858ced10' }), h("section", { key: '48d5f1a4401db138bf605922c7f13e506ddd16cf' }, h("p", { key: 'c77f887bd4b8191095aec95ab1eec3a962804e26' }, "from: \"", this.from, "\"", h("br", { key: '1cc1503550a43d11026169ad674730f4115d4a14' }), "to: \"", this.to, "\"")))
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
