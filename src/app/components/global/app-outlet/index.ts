import { LitElement, html, property } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

const componentName = 'outlet';

export class Component extends LitElement {
    @property({ type: String }) route;

    render() {
        return unsafeHTML(this.route);
    }
}

customElements.define(`app-${componentName}`, Component);