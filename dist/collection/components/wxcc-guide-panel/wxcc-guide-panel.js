import { h } from "@stencil/core";
export class SideDrawer {
    constructor() {
        this.showNav = false;
        this.arttitle = undefined;
        this.opened = undefined;
        this.content = undefined;
        this.lessons = [];
        this.currentPage = undefined;
        this.lList = undefined;
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
        // console.log(event.detail)
        let url;
        const iHere = this.lessons.findIndex(x => x.title === this.currentPage);
        if (!iHere) {
            this.currentPage = this.lessons[0].title;
        }
        // console.log(this.currentPage)
        // console.log(iHere)
        this.currentPage = this.lessons[iHere + 1].title;
        if (event.detail === "next") {
            url = this.lessons[iHere + 1].url;
            this.currentPage = this.lessons[iHere + 1].title;
        }
        else {
            url = this.lessons[iHere - 1].url;
            this.currentPage = this.lessons[iHere - 1].title;
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
    }
    render() {
        let mainContent = this.content || h("slot", { key: '310b3737906d6c8b16d9e7150ddb3528526693f5' });
        if (this.showNav) {
            mainContent = h("ul", { key: '866811467c9ee25aa346213beb34219c8a037ed9', class: "nav" }, this.lessons.map(lesson => (h("li", { class: "nav", onClick: this.onChoice.bind(this, lesson.url) }, h("strong", null, lesson.title)))));
        }
        return [
            // <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}/>,
            h("aside", { key: '832a11c26c3e4c3c790ff1b9dfacc406e7d42cde' }, h("header", { key: '034b127df0ac34d943df822bc2436e3902244efd' }, h("h1", { key: '325443a4e9ea88eb0f25136927287f4a07e00d78', class: "post-title" }, this.currentPage || this.arttitle)), h("section", { key: '615f857307d0887d57987b1d664197b1a59f1fb5', id: "tabs" }, h("button", { key: 'b7d9ff42b35368a60fec017ba4a58ebb41cf5d19', class: !this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "lesson") }, "Lesson"), h("button", { key: '22fbf845fef340e7b760d00e83d454df74c1e22b', class: this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "nav") }, "Navigation")), h("main", { key: 'f15028aed9b1a8c23b15362ba29b2e2c4f2d2af9' }, mainContent))
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
            "currentPage": {}
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
