const t="gql-classroom";let e;let n;let s=false;let l=false;let o=false;const c=(t,e="")=>{{return()=>{}}};const i=(t,e)=>{{return()=>{}}};const f="{visibility:hidden}.hydrated{visibility:inherit}";const r="slot-fb{display:contents}slot-fb[hidden]{display:none}";const u={};const a=t=>t!=null;const d=t=>{t=typeof t;return t==="object"||t==="function"};function v(t){var e,n,s;return(s=(n=(e=t.head)===null||e===void 0?void 0:e.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const p=(t,e,...n)=>{let s=null;let l=null;let o=false;let c=false;const i=[];const f=e=>{for(let n=0;n<e.length;n++){s=e[n];if(Array.isArray(s)){f(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!d(s)){s=String(s)}if(o&&c){i[i.length-1].t+=s}else{i.push(o?y(null,s):s)}c=o}}};f(n);if(e){if(e.key){l=e.key}{const t=e.className||e.class;if(t){e.class=typeof t!=="object"?t:Object.keys(t).filter((e=>t[e])).join(" ")}}}const r=y(t,null);r.l=e;if(i.length>0){r.o=i}{r.i=l}return r};const y=(t,e)=>{const n={u:0,v:t,t:e,p:null,o:null};{n.l=null}{n.i=null}return n};const h={};const m=t=>t&&t.v===h;const b=(t,e)=>{if(t!=null&&!d(t)){if(e&4){return t==="false"?false:t===""||!!t}if(e&1){return String(t)}return t}return t};const $=t=>vt(t).$hostElement$;const w=(t,e,n)=>{const s=$(t);return{emit:t=>S(s,e,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:t})}};const S=(t,e,n)=>{const s=jt.ce(e,n);t.dispatchEvent(s);return s};const g=new WeakMap;const j=(t,e,n)=>{let s=wt.get(t);if(Ct&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=e}else{s.replaceSync(e)}}else{s=e}wt.set(t,s)};const k=(t,e,n)=>{var s;const l=C(e);const o=wt.get(l);t=t.nodeType===11?t:gt;if(o){if(typeof o==="string"){t=t.head||t;let n=g.get(t);let c;if(!n){g.set(t,n=new Set)}if(!n.has(l)){{c=gt.createElement("style");c.innerHTML=o;const e=(s=jt.h)!==null&&s!==void 0?s:v(gt);if(e!=null){c.setAttribute("nonce",e)}t.insertBefore(c,t.querySelector("link"))}if(e.u&4){c.innerHTML+=r}if(n){n.add(l)}}}else if(!t.adoptedStyleSheets.includes(o)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,o]}}return l};const O=t=>{const e=t.m;const n=t.$hostElement$;const s=e.u;const l=c("attachStyles",e.$);const o=k(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);if(s&10){n["s-sc"]=o;n.classList.add(o+"-h")}l()};const C=(t,e)=>"sc-"+t.$;const M=(t,e,n,s,l,o)=>{if(n!==s){let c=ht(t,e);let i=e.toLowerCase();if(e==="class"){const e=t.classList;const l=x(n);const o=x(s);e.remove(...l.filter((t=>t&&!o.includes(t))));e.add(...o.filter((t=>t&&!l.includes(t))))}else if(e==="key");else if(e==="ref"){if(s){s(t)}}else if(!c&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"){e=e.slice(3)}else if(ht(St,i)){e=i.slice(2)}else{e=i[2]+e.slice(3)}if(n||s){const l=e.endsWith(E);e=e.replace(U,"");if(n){jt.rel(t,e,n,l)}if(s){jt.ael(t,e,s,l)}}}else{const i=d(s);if((c||i&&s!==null)&&!l){try{if(!t.tagName.includes("-")){const l=s==null?"":s;if(e==="list"){c=false}else if(n==null||t[e]!=l){t[e]=l}}else{t[e]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(e)===""){{t.removeAttribute(e)}}}else if((!c||o&4||l)&&!i){s=s===true?"":s;{t.setAttribute(e,s)}}}}};const P=/\s/;const x=t=>!t?[]:t.split(P);const E="Capture";const U=new RegExp(E+"$");const A=(t,e,n,s)=>{const l=e.p.nodeType===11&&e.p.host?e.p.host:e.p;const o=t&&t.l||u;const c=e.l||u;{for(s in o){if(!(s in c)){M(l,s,o[s],undefined,n,e.u)}}}for(s in c){M(l,s,o[s],c[s],n,e.u)}};const L=(t,s,o,c)=>{const i=s.o[o];let f=0;let r;let u;if(i.t!==null){r=i.p=gt.createTextNode(i.t)}else{r=i.p=gt.createElement(i.v);{A(null,i,l)}if(a(e)&&r["s-si"]!==e){r.classList.add(r["s-si"]=e)}if(i.o){for(f=0;f<i.o.length;++f){u=L(t,i,f);if(u){r.appendChild(u)}}}}r["s-hn"]=n;return r};const N=(t,e,s,l,o,c)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===n){i=i.shadowRoot}for(;o<=c;++o){if(l[o]){f=L(null,s,o);if(f){l[o].p=f;i.insertBefore(f,e)}}}};const R=(t,e,n)=>{for(let s=e;s<=n;++s){const e=t[s];if(e){const t=e.p;F(e);if(t){t.remove()}}}};const T=(t,e,n,s,l=false)=>{let o=0;let c=0;let i=0;let f=0;let r=e.length-1;let u=e[0];let a=e[r];let d=s.length-1;let v=s[0];let p=s[d];let y;let h;while(o<=r&&c<=d){if(u==null){u=e[++o]}else if(a==null){a=e[--r]}else if(v==null){v=s[++c]}else if(p==null){p=s[--d]}else if(W(u,v,l)){q(u,v,l);u=e[++o];v=s[++c]}else if(W(a,p,l)){q(a,p,l);a=e[--r];p=s[--d]}else if(W(u,p,l)){q(u,p,l);t.insertBefore(u.p,a.p.nextSibling);u=e[++o];p=s[--d]}else if(W(a,v,l)){q(a,v,l);t.insertBefore(a.p,u.p);a=e[--r];v=s[++c]}else{i=-1;{for(f=o;f<=r;++f){if(e[f]&&e[f].i!==null&&e[f].i===v.i){i=f;break}}}if(i>=0){h=e[i];if(h.v!==v.v){y=L(e&&e[c],n,i)}else{q(h,v,l);e[i]=undefined;y=h.p}v=s[++c]}else{y=L(e&&e[c],n,c);v=s[++c]}if(y){{u.p.parentNode.insertBefore(y,u.p)}}}}if(o>r){N(t,s[d+1]==null?null:s[d+1].p,n,s,c,d)}else if(c>d){R(e,o,r)}};const W=(t,e,n=false)=>{if(t.v===e.v){if(!n){return t.i===e.i}return true}return false};const q=(t,e,n=false)=>{const o=e.p=t.p;const c=t.o;const i=e.o;const f=e.v;const r=e.t;if(r===null){{if(f==="slot"&&!s);else{A(t,e,l)}}if(c!==null&&i!==null){T(o,c,e,i,n)}else if(i!==null){if(t.t!==null){o.textContent=""}N(o,null,e,i,0,i.length-1)}else if(c!==null){R(c,0,c.length-1)}}else if(t.t!==r){o.data=r}};const F=t=>{{t.l&&t.l.ref&&t.l.ref(null);t.o&&t.o.map(F)}};const H=(t,l,o=false)=>{const c=t.$hostElement$;const i=t.m;const f=t.S||y(null,null);const r=m(l)?l:p(null,null,l);n=c.tagName;if(i.j){r.l=r.l||{};i.j.map((([t,e])=>r.l[e]=c[t]))}if(o&&r.l){for(const t of Object.keys(r.l)){if(c.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){r.l[t]=c[t]}}}r.v=null;r.u|=4;t.S=r;r.p=f.p=c.shadowRoot||c;{e=c["s-sc"]}s=(i.u&1)!==0;q(f,r,o)};const I=(t,e)=>{if(e&&!t.k&&e["s-p"]){e["s-p"].push(new Promise((e=>t.k=e)))}};const V=(t,e)=>{{t.u|=16}if(t.u&4){t.u|=512;return}I(t,t.O);const n=()=>_(t,e);return Lt(n)};const _=(t,e)=>{const n=c("scheduleUpdate",t.m.$);const s=t.C;let l;if(e){{t.u|=256;if(t.M){t.M.map((([t,e])=>Q(s,t,e)));t.M=undefined}}{l=Q(s,"componentWillLoad")}}n();return z(l,(()=>D(t,s,e)))};const z=(t,e)=>B(t)?t.then(e):e();const B=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const D=async(t,e,n)=>{var s;const l=t.$hostElement$;const o=c("update",t.m.$);const i=l["s-rc"];if(n){O(t)}const f=c("render",t.m.$);{G(t,e,l,n)}if(i){i.map((t=>t()));l["s-rc"]=undefined}f();o();{const e=(s=l["s-p"])!==null&&s!==void 0?s:[];const n=()=>J(t);if(e.length===0){n()}else{Promise.all(e).then(n);t.u|=4;e.length=0}}};const G=(t,e,n,s)=>{try{e=e.render();{t.u&=~16}{t.u|=2}{{{H(t,e,s)}}}}catch(e){mt(e,t.$hostElement$)}return null};const J=t=>{const e=t.m.$;const n=t.$hostElement$;const s=c("postUpdate",e);const l=t.O;if(!(t.u&64)){t.u|=64;{X(n)}s();{t.P(n);if(!l){K()}}}else{s()}{t.U(n)}{if(t.k){t.k();t.k=undefined}if(t.u&512){At((()=>V(t,false)))}t.u&=~(4|512)}};const K=e=>{{X(gt.documentElement)}At((()=>S(St,"appload",{detail:{namespace:t}})))};const Q=(t,e,n)=>{if(t&&t[e]){try{return t[e](n)}catch(t){mt(t)}}return undefined};const X=t=>t.classList.add("hydrated");const Y=(t,e)=>vt(t).A.get(e);const Z=(t,e,n,s)=>{const l=vt(t);const o=l.A.get(e);const c=l.u;const i=l.C;n=b(n,s.L[e][0]);const f=Number.isNaN(o)&&Number.isNaN(n);const r=n!==o&&!f;if((!(c&8)||o===undefined)&&r){l.A.set(e,n);if(i){if((c&(2|16))===2){V(l,false)}}}};const tt=(t,e,n)=>{var s;const l=t.prototype;if(e.L){const o=Object.entries(e.L);o.map((([t,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(l,t,{get(){return Y(this,t)},set(n){Z(this,t,n,e)},configurable:true,enumerable:true})}else if(n&1&&s&64){Object.defineProperty(l,t,{value(...e){var n;const s=vt(this);return(n=s===null||s===void 0?void 0:s.N)===null||n===void 0?void 0:n.then((()=>{var n;return(n=s.C)===null||n===void 0?void 0:n[t](...e)}))}})}}));if(n&1){const n=new Map;l.attributeChangedCallback=function(t,s,o){jt.jmp((()=>{var c;const i=n.get(t);if(this.hasOwnProperty(i)){o=this[i];delete this[i]}else if(l.hasOwnProperty(i)&&typeof this[i]==="number"&&this[i]==o){return}else if(i==null){const n=vt(this);const l=n===null||n===void 0?void 0:n.u;if(l&&!(l&8)&&l&128&&o!==s){const l=n.C;const i=(c=e.R)===null||c===void 0?void 0:c[t];i===null||i===void 0?void 0:i.forEach((e=>{if(l[e]!=null){l[e].call(l,o,s,t)}}))}return}this[i]=o===null&&typeof this[i]==="boolean"?false:o}))};t.observedAttributes=Array.from(new Set([...Object.keys((s=e.R)!==null&&s!==void 0?s:{}),...o.filter((([t,e])=>e[0]&15)).map((([t,s])=>{var l;const o=s[1]||t;n.set(o,t);if(s[0]&512){(l=e.j)===null||l===void 0?void 0:l.push([t,o])}return o}))]))}}return t};const et=async(t,e,n,s)=>{let l;if((e.u&32)===0){e.u|=32;{l=$t(n);if(l.then){const t=i();l=await l;t()}if(!l.isProxied){tt(l,n,2);l.isProxied=true}const t=c("createInstance",n.$);{e.u|=8}try{new l(e)}catch(t){mt(t)}{e.u&=~8}t()}if(l.style){let t=l.style;const e=C(n);if(!wt.has(e)){const s=c("registerStyles",n.$);j(e,t,!!(n.u&1));s()}}}const o=e.O;const f=()=>V(e,true);if(o&&o["s-rc"]){o["s-rc"].push(f)}else{f()}};const nt=t=>{};const st=t=>{if((jt.u&1)===0){const e=vt(t);const n=e.m;const s=c("connectedCallback",n.$);if(!(e.u&1)){e.u|=1;{let n=t;while(n=n.parentNode||n.host){if(n["s-p"]){I(e,e.O=n);break}}}if(n.L){Object.entries(n.L).map((([e,[n]])=>{if(n&31&&t.hasOwnProperty(e)){const n=t[e];delete t[e];t[e]=n}}))}{et(t,e,n)}}else{it(t,e,n.T);if(e===null||e===void 0?void 0:e.C);else if(e===null||e===void 0?void 0:e.W){e.W.then((()=>nt()))}}s()}};const lt=t=>{};const ot=async t=>{if((jt.u&1)===0){const e=vt(t);{if(e.q){e.q.map((t=>t()));e.q=undefined}}if(e===null||e===void 0?void 0:e.C);else if(e===null||e===void 0?void 0:e.W){e.W.then((()=>lt()))}}};const ct=(t,e={})=>{var n;const s=c();const l=[];const o=e.exclude||[];const i=St.customElements;const u=gt.head;const a=u.querySelector("meta[charset]");const d=gt.createElement("style");const p=[];let y;let h=true;Object.assign(jt,e);jt.F=new URL(e.resourcesUrl||"./",gt.baseURI).href;let m=false;t.map((t=>{t[1].map((e=>{const n={u:e[0],$:e[1],L:e[2],T:e[3]};if(n.u&4){m=true}{n.L=e[2]}{n.T=e[3]}{n.j=[]}const s=n.$;const c=class extends HTMLElement{constructor(t){super(t);t=this;yt(t,n);if(n.u&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(y){clearTimeout(y);y=null}if(h){p.push(this)}else{jt.jmp((()=>st(this)))}}disconnectedCallback(){jt.jmp((()=>ot(this)))}componentOnReady(){return vt(this).W}};n.H=t[0];if(!o.includes(s)&&!i.get(s)){l.push(s);i.define(s,tt(c,n,1))}}))}));if(l.length>0){if(m){d.innerHTML+=r}{d.innerHTML+=l+f}if(d.innerHTML.length){d.setAttribute("data-styles","");const t=(n=jt.h)!==null&&n!==void 0?n:v(gt);if(t!=null){d.setAttribute("nonce",t)}u.insertBefore(d,a?a.nextSibling:u.firstChild)}}h=false;if(p.length){p.map((t=>t.connectedCallback()))}else{{jt.jmp((()=>y=setTimeout(K,30)))}}s()};const it=(t,e,n,s)=>{if(n){n.map((([n,s,l])=>{const o=rt(t,n);const c=ft(e,l);const i=ut(n);jt.ael(o,s,c,i);(e.q=e.q||[]).push((()=>jt.rel(o,s,c,i)))}))}};const ft=(t,e)=>n=>{try{{if(t.u&256){t.C[e](n)}else{(t.M=t.M||[]).push([e,n])}}}catch(t){mt(t)}};const rt=(t,e)=>{if(e&16)return gt.body;return t};const ut=t=>kt?{passive:(t&1)!==0,capture:(t&2)!==0}:(t&2)!==0;const at=t=>jt.h=t;const dt=new WeakMap;const vt=t=>dt.get(t);const pt=(t,e)=>dt.set(e.C=t,e);const yt=(t,e)=>{const n={u:0,$hostElement$:t,m:e,A:new Map};{n.N=new Promise((t=>n.U=t))}{n.W=new Promise((t=>n.P=t));t["s-p"]=[];t["s-rc"]=[]}it(t,n,e.T);return dt.set(t,n)};const ht=(t,e)=>e in t;const mt=(t,e)=>(0,console.error)(t,e);const bt=new Map;const $t=(t,e,n)=>{const s=t.$.replace(/-/g,"_");const l=t.H;const o=bt.get(l);if(o){return o[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((t=>{{bt.set(l,t)}return t[s]}),mt)};const wt=new Map;const St=typeof window!=="undefined"?window:{};const gt=St.document||{head:{}};const jt={u:0,F:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s),ce:(t,e)=>new CustomEvent(t,e)};const kt=(()=>{let t=false;try{gt.addEventListener("e",null,Object.defineProperty({},"passive",{get(){t=true}}))}catch(t){}return t})();const Ot=t=>Promise.resolve(t);const Ct=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const Mt=[];const Pt=[];const xt=(t,e)=>n=>{t.push(n);if(!o){o=true;if(e&&jt.u&4){At(Ut)}else{jt.raf(Ut)}}};const Et=t=>{for(let e=0;e<t.length;e++){try{t[e](performance.now())}catch(t){mt(t)}}t.length=0};const Ut=()=>{Et(Mt);{Et(Pt);if(o=Mt.length>0){jt.raf(Ut)}}};const At=t=>Ot().then(t);const Lt=xt(Pt,true);export{ct as b,w as c,p as h,Ot as p,pt as r,at as s};
//# sourceMappingURL=p-011bdecf.js.map