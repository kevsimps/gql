import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const wxccGuidePanelCss = "aside{position:fixed;bottom:0;right:-100%;width:40rem;max-width:34%;height:92vh;background:#d6c5c5;box-shadow:0 2px 8px rgba(0, 0, 0, 0.27);transition:right 1.3s ease-out;z-index:2;overflow:scroll}:host([opened]) aside{right:0}header{display:flex;padding:1rem;background:#2196F3;position:fixed;top:8%;width:100%}h1.post-title{font-size:1.5rem;color:white;margin:0}.post-content{margin-left:1em}h1{font-size:1.5rem;margin:0}header button{position:absolute;top:0;right:0;padding:1rem;color:white;background:transparent;font-size:1.5rem;border:none}header button:focus{outline:none}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;padding-top:4rem}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid black;font:inherit;padding:0.15rem 0}#tabs :nth-child(1){border-top-left-radius:20px;border-bottom-left-radius:20px}#tabs :nth-last-child(1){border-top-right-radius:20px;border-bottom-right-radius:20px}#tabs button.active,#tabs button:hover,#tabs button:active{background:#2196F3;color:white}#tabs button:focus{outline:none}#contact-information{padding:0 1rem}.site-header,.site-footer,.book-header,.book-summary,.search-results{display:none}ul.nav{margin:1em;padding:0;list-style:none}li.nav{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li.nav:hover,li.nav:active{background:#2196F3;color:white}";
const WxccGuidePanelStyle0 = wxccGuidePanelCss;

const SideDrawer = /*@__PURE__*/ proxyCustomElement(class SideDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return WxccGuidePanelStyle0; }
}, [1, "wxcc-guide-panel", {
        "arttitle": [513],
        "opened": [1540],
        "lList": [513, "l-list"],
        "showNav": [32],
        "content": [32],
        "lessons": [32],
        "currentPage": [32]
    }, [[16, "toggleGuide", "onToggle"], [16, "wxccGuidePageTurn", "onNext"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wxcc-guide-panel"];
    components.forEach(tagName => { switch (tagName) {
        case "wxcc-guide-panel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SideDrawer);
            }
            break;
    } });
}

const WxccGuidePanel = SideDrawer;
const defineCustomElement = defineCustomElement$1;

export { WxccGuidePanel, defineCustomElement };

//# sourceMappingURL=wxcc-guide-panel.js.map