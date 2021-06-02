import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

import { routeList } from './routes';
import { routeHandler } from './helpers/route';

// Components
import './components/global/app-outlet';
import './components/global/app-fixedbar';
import './components/global/app-menubar';
import './components/global/app-footerbar';

// Pages
import './pages/home';
import './pages/talks';

export class App extends LitElement {
    @property({ type: String }) route;

    constructor() {
        super();
        const p = routeHandler(routeList);
        this.route = p || "<h1>Page Not Found</h1>";
    }
    
    render() {
        return html`
            <app-outlet route="${this.route}"></app-outlet>
        `;
    }

}

customElements.define('app-root', App);