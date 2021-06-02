import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { template } from './template';
import * as data from './data';

const page = 'talks';

export class Page extends LitElement {

    @property({ type: Array }) talks = data.talks;

    constructor() {
        super();
    }
        
    render() {
        return template.bind(this)();
    }
}

customElements.define(`page-${page}`, Page);