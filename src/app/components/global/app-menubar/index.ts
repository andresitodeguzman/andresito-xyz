import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { template } from './template';

const componentName = 'menubar';

export class Component extends LitElement {

    @property({ type: String }) currentPage;
    @property({ type: Array }) list = [
        {
            name: "Home",
            url: "/home"
        },
        {
            name: "Talks",
            url: "/talks"
        }
    ];

    constructor() {
        super();
    }
    
    render() {
        return template.bind(this)();
    }
}

customElements.define(`app-${componentName}`, Component);