import { html } from 'lit';

export function template () {
    return html`
    <style>
    
    nav {
        width:100%;    
        padding:0;
        background-color: var(--color-nav);
        overflow-x:hidden;
    }

    nav > p {
        margin-top:35px;
        margin-bottom:20px;

        font-family: var(--font-nav-title);
        line-height:0;
        font-size:2.2rem;    
        color: var(--color-nav-logo);
    }

    
    ul.navbar-menu {
        display:inline-block;
        width:100%;
        height:auto;
        white-space:nowrap;
        overflow-y:scroll;
        list-style-type: none;
    }

    li.navbar-menu-entry {
        display:inline-block;
        margin-right:10px;
        padding-top:10px;
        padding-bottom:15px;
        padding-left:15px;
        padding-right:15px;
    }

    li.navbar-menu-entry > a {        
        font-family: var(--font-link);
        font-size:1.3rem;
        color: var(--color-nav-link);
        text-decoration:none;
        outline:none;
    }
    
    li.navbar-menu-entry > a.selected {
        color: var(--color-nav-link-selected);
        text-emphasis:bold;
        text-decoration:underline;
        outline:none;
    }
    
    li.navbar-menu-entry > a:hover,a:focus, a:active {
        text-decoration: underline;
        outline:none !important;
    }

    li.navbar-menu-entry > .spacer {
        margin-right:50px;
        text-decoration:none;
        marker: none;
    }

    @media only screen and (max-width: 700px){
        nav  > p {      
            margin-left:6% !important;
        }
    }
    
    @media only screen and (min-width:700px){
        nav > p {
            text-align:center;
        }   
        ul.navbar-menu {
            text-align:center !important;
            padding-left: 0 !important;

        }
    }
</style>
    <nav id="nav">
        <p>
            Andresito
        </p>
        <ul class="navbar-menu">
            ${this.list.map(elem => html`
                <li class="navbar-menu-entry">
                    ${this.currentPage == elem.name ? html`
                    <a class="selected" href="${elem.url}">${elem.name}</a>
                    ` : html`
                    <a href="${elem.url}">${elem.name}</a>
                    `}
                </li>
            `)}
            <li class="spacer"></li>
        </ul>
    </nav>
    <app-fixedbar cuurentPage="${this.currentPage}"></app-fixedbar>

    `;
}

