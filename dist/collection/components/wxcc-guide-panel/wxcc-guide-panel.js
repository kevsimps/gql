import { h } from "@stencil/core";
export class SideDrawer {
    constructor() {
        this.showNav = false;
        this.arttitle = undefined;
        this.opened = undefined;
        this.flip = undefined;
        this.content = undefined;
        this.lessons = [];
        this.currentPage = undefined;
        this.lList = undefined;
        this.lastScroll = 0;
    }
    async componentWillLoad() {
        const response = await fetch(this.lList);
        // sessionStorage.setItem("lessons", await response.text())
        const lessons = await response.json();
        this.lessons = await lessons.map(match => {
            return { title: match["title"], url: match["address"] };
        });
    }
    // onCloseDrawer(){
    //     this.opened=false;
    // }
    onContentChange(content) {
        this.showNav = content === "nav";
        // console.log(content)
    }
    // @Method()
    // async open(){
    //   this.opened=true 
    // }
    onToggle(event) {
        console.log(event.detail);
        this.opened = !this.opened;
    }
    onNext(event) {
        //  console.log(event.detail)
        let url;
        const iHere = this.lessons.findIndex(x => x.title === this.currentPage);
        if (!iHere) {
            this.currentPage = this.lessons[0].title;
        }
        //  console.log(this.currentPage)
        //  console.log(iHere)
        // this.currentPage = this.lessons[iHere + 1].title
        if (event.detail === "next") {
            url = this.lessons[iHere + 1].url;
            this.currentPage = this.lessons[iHere + 1].title;
            this.lastScroll = document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop;
            document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop = 0;
        }
        else {
            url = this.lessons[iHere - 1].url;
            this.currentPage = this.lessons[iHere - 1].title;
            document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop = this.lastScroll;
        }
        this.getHTML(url)
            .then(html => {
            if (html !== null) {
                this.content = html;
                this.content = h("div", { innerHTML: this.content });
                // console.log(html);
            }
        });
        this.showNav = false;
    }
    onChoice(url) {
        this.getHTML(url)
            .then(html => {
            if (html !== null) {
                this.content = html;
                this.content = h("div", { innerHTML: this.content });
                this.currentPage = this.lessons[this.lessons.findIndex(x => x.url === url)].title;
                this.showNav = false;
            }
        });
    }
    async getHTML(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const html = await response.text();
            return html;
        }
        catch (error) {
            console.error("Error during fetch:", error);
            return null;
        }
    }
    componentDidUpdate() {
        Array.from(document.querySelector("wxcc-guide-panel").shadowRoot.querySelectorAll("textarea")).forEach((element) => { element.value = element.value.replaceAll("\\", ""); });
        // document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("aside").scrollTop=0 
        // Remove style css from jekyll site
        document.querySelector("wxcc-guide-panel").shadowRoot.querySelector("link[rel=stylesheet]").remove();
    }
    render() {
        const fIcon = h("svg", { key: '785f49a45583c475ac9390a80c177f28ce0849e7', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: 'b3ff7b357ae4b75b774afd3c685add5ab39ccbb4', d: "M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z" }));
        let mainContent = this.content || h("slot", { key: '9e5afd3b33f0742d359a7df28a9b1d1298f4888f' });
        if (this.showNav) {
            mainContent = h("ul", { key: 'cc54d4382d70571707888dc09939b4bb8eda4c5b', class: "nav" }, this.lessons.map(lesson => (h("li", { class: "nav", onClick: this.onChoice.bind(this, lesson.url) }, h("strong", null, lesson.title)))));
        }
        return [
            // <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}/>,
            h("aside", { key: '53003b7470f3fcf82779e46bf90282142c997c3b' }, h("header", { key: 'e4f0126ad18f4a8e91728258c97edd944a8957c9' }, h("h1", { key: '688e98a2a7d0ebe657bd9fa720068e826805c39e', class: "post-title" }, this.currentPage || this.arttitle, " ", h("span", { key: 'fe5564506ae2a1b1cf417c375cf0b194c2fed0d9', class: "flipper", onClick: () => this.flip = !this.flip }, fIcon))), h("section", { key: '30ec08e3c769ccb99f84eda21fddf331396c398d', id: "tabs" }, h("button", { key: 'ba1f26d49770748687e414cb4fa9b237e7569bd7', class: !this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "lesson") }, "Lesson"), h("button", { key: 'ab6997d0f33ec3d571dafcbe5ab4b803d68f7ba5', class: this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "nav") }, "Navigation")), h("main", { key: '5c4fabf0b7cc05b2a4ddd9d79d0eb85e7ed1a5f7' }, mainContent))
        ];
    }
    static get is() { return "wxcc-guide-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["wxcc-guide-panel.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["wxcc-guide-panel.css"]
        };
    }
    static get properties() {
        return {
            "arttitle": {
                "type": "string",
                "mutable": false,
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
                "attribute": "arttitle",
                "reflect": true
            },
            "opened": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "opened",
                "reflect": true
            },
            "flip": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "flip",
                "reflect": true
            },
            "lList": {
                "type": "string",
                "mutable": false,
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
                "attribute": "l-list",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "showNav": {},
            "content": {},
            "lessons": {},
            "currentPage": {},
            "lastScroll": {}
        };
    }
    static get listeners() {
        return [{
                "name": "toggleGuide",
                "method": "onToggle",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "wxccGuidePageTurn",
                "method": "onNext",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=wxcc-guide-panel.js.map
