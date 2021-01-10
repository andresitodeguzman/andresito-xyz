import { LitElement, html, property } from 'lit-element';
import { navigator } from 'lit-element-router';

class Link extends navigator(LitElement) {
    @property({ type: String }) href;

    constructor() {
        super();
        this.href = '';
    }

    render() {
        return html`
            <a href='${this.href}' @click='${this.linkClick}'><slot></slot></a>
        `;
    }

    linkClick(event) {
        event.preventDefault();
        this.navigate(this.href);
    }
}

customElements.define('app-link', Link);