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
        console.log(content);
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
        let mainContent = this.content || h("slot", { key: '7a87471f301689b2e910228a3ee887af0281a3ae' });
        if (this.showNav) {
            mainContent = h("ul", { key: 'e1a7741ac9b9e9165937ce6c0f0cca098cca66bd', class: "nav" }, this.lessons.map(lesson => (h("li", { class: "nav", onClick: this.onChoice.bind(this, lesson.url) }, h("strong", null, lesson.title)))));
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
            h("aside", { key: '0318ee33f3de4dc468676ec8527eb70469638ad1' }, h("header", { key: '863b6746eeee9b265307274445f56fb2d836085b' }, h("h1", { key: '8bbc29d61215ba87ccca27f7ec9e1d16f4bbd038', class: "post-title" }, this.currentPage || this.arttitle)), h("section", { key: 'a6a5ca8c78d0ed5757f48d0408a091752d042dfb', id: "tabs" }, h("button", { key: '4ed4cf72031b2e00cab638bfe54b861dfcb18abf', class: !this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "lesson") }, "Lesson"), h("button", { key: '1b6cfd848bf64e37022f9b4068053d8ec2809e5e', class: this.showNav ? "active" : "", onClick: this.onContentChange.bind(this, "nav") }, "Navigation")), h("main", { key: '4f128600315092df5614eb5c6b08982c4025db19' }, mainContent))
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
