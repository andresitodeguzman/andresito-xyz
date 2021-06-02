import { LitElement } from 'lit';
import { template } from './template';

const page = 'home';

export class Page extends LitElement {

    constructor() {
        super();
    }
        
    render() {
        return template.bind(this)();
    }
}

customElements.define(`page-${page}`, Page);