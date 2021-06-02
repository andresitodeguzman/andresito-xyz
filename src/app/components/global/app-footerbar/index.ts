import { LitElement } from 'lit';
import { template } from './template';

const componentName = 'footerbar';

export class Component extends LitElement {
    constructor() {
        super();
    }
    
    render() {
        return template.bind(this)();
    }
}

customElements.define(`app-${componentName}`, Component);