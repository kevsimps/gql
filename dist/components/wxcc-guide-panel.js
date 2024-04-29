import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const wxccGuidePanelCss = "aside{position:fixed;bottom:0;right:-100%;width:40rem;max-width:34%;height:92vh;background:#d6c5c5;box-shadow:0 2px 8px rgba(0, 0, 0, 0.27);transition:right 1.3s ease-out;z-index:2;overflow:scroll}:host([flip]) aside{position:fixed;bottom:0;left:-100%;width:40rem;max-width:34%;height:92vh;background:#d6c5c5;box-shadow:0 2px 8px rgba(0, 0, 0, 0.27);transition:left 1.3s ease-out;z-index:2;overflow:scroll}:host([opened]) aside{right:0}:host([opened][flip]) aside{left:0;}main slot{margin:1rem}.flipper{float:right}.post-header{display:none;}header{display:block;padding:1rem;background:#2196F3;position:fixed;top:8%;width:31.75%}h1.post-title{font-size:1.5rem;color:white;margin:0}.post-content{margin:1em}h1{font-size:1.5rem;margin:0}header button{position:absolute;top:0;right:0;padding:1rem;color:white;background:transparent;font-size:1.5rem;border:none}header button:focus{outline:none}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0;padding-top:4rem}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid  #2196F3;font:inherit;padding:0.15rem 0}#tabs :nth-child(1){border-top-left-radius:20px;border-bottom-left-radius:20px}#tabs :nth-last-child(1){border-top-right-radius:20px;border-bottom-right-radius:20px}#tabs button.active,#tabs button:hover,#tabs button:active{background:#2196F3;color:white;border:1px solid #2196F3}#tabs button:focus{outline:none}#contact-information{padding:0 1rem}.site-header,.site-footer,.book-header,.book-summary,.search-results{display:none}ul.nav{margin:1em;padding:0;list-style:none}li.nav{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li.nav:hover,li.nav:active{background:#2196F3;color:white}svg{fill:#c0c0c0;height:20px;width:80px}svg:hover{fill:#f0efef;}.btn{border-radius:30px;padding:5px 10px;border:1px #2196F3}.btn:hover{background:#2196F3;color:white}table td,table th{border:1px solid #404040}table{border-collapse:collapse}";
const WxccGuidePanelStyle0 = wxccGuidePanelCss;

const SideDrawer = /*@__PURE__*/ proxyCustomElement(class SideDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return WxccGuidePanelStyle0; }
}, [1, "wxcc-guide-panel", {
        "arttitle": [513],
        "opened": [1540],
        "flip": [1540],
        "lList": [513, "l-list"],
        "showNav": [32],
        "content": [32],
        "lessons": [32],
        "currentPage": [32],
        "lastScroll": [32]
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