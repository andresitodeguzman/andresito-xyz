import { LitElement, property } from 'lit-element';
import { template } from './template';

const componentName = 'fixedbar';

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

    connectedCallback() {
        super.connectedCallback();
        var sc = 0;
        window.addEventListener('scroll',(e)=>{             
            if(window.scrollY < sc && window.scrollY > 160){                
                this.shadowRoot.getElementById('fixedbar').style.display = 'block';
            } else {
                this.shadowRoot.getElementById('fixedbar').style.display = 'none';
            }
            sc = window.scrollY;
        });
    }
    
    render() {
        return template.bind(this)();
    }
}

customElements.define(`app-${componentName}`, Component);