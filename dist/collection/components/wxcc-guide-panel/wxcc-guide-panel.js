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
        console.log(event.detail);
        let url;
        const iHere = this.lessons.findIndex(x => x.title === this.currentPage);
        if (!iHere) {
            this.currentPage = this.lessons[0].title;
        }
        console.log(this.currentPage);
        console.log(iHere);
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
    render() {
        let mainContent = this.content || h("slot", { key: '86ecf0a9590859f40d06e33e8361ac0deea876d3' });
        if (this.showNav) {
            mainContent = h("ul", { key: 'c1da402e26f560136c6402df71e59e186dfb21d2', class: "nav" }, this.lessons.map(lesson => (h("li", { class: "nav", onClick: this.onChoice.bind(this, lesson.url) }, h("strong", null, lesson.title)))));
        }
        // ( 
        //     <div id="contact-information">
        //       <h2> Contact Information</h2>
        //     <p>You can reach us via phone or email</p>  
        //     <ul>
        //         <li>Phone: 8144557771</li>
        //         <li>EMail: <a href="mailto:something@something.com">something@something.com</a></li>
        //         </ul>
        //     </div>
        //  )}
        return [
            // <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}/>,
            h("aside", { key: '3c17a721d9a8eb17a3277136418447cfae4fd00c' }, h("header", { key: '9e51466cda03e22258a3c717dd62eac5eef941b0' }, h("h1", { key: '85aa3f6cfd1e81c87c6edbe4154bd8ca96897469', class: "post-title" }, this.currentPage || this.arttitle)), h("section", { key: '8c37814bf0b9cc4071b9b047d5be40c946c13538', id: "tabs" }, h("button", { key: '9dcc1fd47a96b0ead5807f4a8401746360da0e48', class: !this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "lesson") }, "Lesson"), h("button", { key: '1cd7088cf6da4448fbc2b31c3f824be4afa9943b', class: this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "nav") }, "Navigation")), h("main", { key: '8880928062121d12f328e8022d79b28c1dc4408e' }, mainContent))
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
