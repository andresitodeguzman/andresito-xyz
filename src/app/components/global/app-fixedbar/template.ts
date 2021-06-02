import { html } from 'lit';

export function template () {
    return html`
    <style>
    div.fixedbar {
       display:none;
       position:fixed;
       background-color: var(--color-nav);
       width: 100%;
       margin:0;
       top:0;
       opacity: 0.9;       
       overflow:scroll;
    }

    div.fixedbar > ul {
        white-space:nowrap;
    }

    div.fixedbar > ul > li {
        display:inline-block;
        margin-right:10px;
        padding-left:15px;
        padding-right:15px;
    }
    
    div.fixedbar > ul > li > a {

        font-family: var(--font-link);
        font-size:1.3rem;
        color: var(--color-nav-link);   
        text-decoration:none;        
		outline:none;
    }
    

    div.fixedbar > ul > li > a.selected {
        color: var(--color-nav-link-selected);
        text-emphasis:bold;
        text-decoration:underline;
    }
    
    div.fixedbar > ul > li > a:active {
        outline:none;
    }
    
    div.fixedbar > ul > li > a:hover {
        text-decoration: underline;
    }
    
    @media only screen and (min-width:700px){
     
        div.fixedbar > ul {
            text-align:center;
        }
        
    }
    

</style>

<div class="fixedbar" id="fixedbar">
    <ul>
        ${this.list.map(elem => html`
            <li>
                ${this.currentPage == elem.name? html`
                <a class="selected" href="${elem.url}">${elem.name}</a>
                ` : html`
                <a href="${elem.url}">${elem.name}</a>
                `}
            </li>
        `)}
        <li class="spacer"></li>
    </ul>
</div>
    `;
}

