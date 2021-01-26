import { html } from 'lit-element';

export function template () {
    return html`
<style>
    h2, h3 {
      font-family: 'Barlow Semi Condensed',sans-serif;
    }

    h2 {
      font-size: 2 rem;
    }

    h3 {
      font-size: 2.5rem;
    }

        @media only screen and (max-width: 700px){
    
    
    div.container {
        margin-left: 5%;
        margin-right: 5%;
        overflow-y:hidden;
    }
        
    div.jumbotron {
        width:100%;
        height:500px;
        
        background-image: url("/assets/images/talk.jpg");
        background-position: center center;
        background-repeat: none;
        background-color: white;       
        background-size: cover;
    }
}

/*

Tablet and Up

*/
@media only screen and (min-width:700px){
    
    div.container {
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 5%;
    }
    div.jumbotron {
        width:100%;
        height:500px;
        
        background-image: url("/assets/images/talk.jpg");
        background-position: center center;
        background-repeat:none;
        background-color: white;       
        background-size:cover;
    }
    
    
}

    div.container > p > a  {
        font-family: 'Abel', sans-serif;
        color: var(--color-nav-link-selected);
        font-size: 1.3rem;
        background-color: #b2b2b2;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 15px;
        padding-bottom: 15px;
        margin-bottom: 100px !important;
        text-decoration:none;
        outline:none;
        text-align:left !important;
    }
    
    div.container > p > a:hover {
        background-color: #e5e3e3;
        outline:none;
    }

    div.container > p.title {
    font-family: var(--font-container-title);
    font-size:3rem !important;
    text-align:left;
}

div.container > p {
    font-family: var(--font-container-p);
    font-size:1.4rem;
    text-align:justify;
}

    div.container > p.title-small {
      font-family: 'Barlow Semi Condensed',sans-serif;
      font-size: 2rem !important;
      text-align:left !important;
    }

    div.container > div.subcontent > p > a {
      font-family: 'Abel', sans-serif !important;
      color: var(--color-nav-link-selected);
      font-size:1.3rem;
      background-color: #b2b2b2;
      padding-left:20px;
      padding-right:20px;
      padding-top:10px;
      padding-bottom:10px;
      margin-top: 100px !important;
      text-decoration: none;
      outline:none;
      text-align: left !important;
    }

    div.container > p > div.subcontent > a:hover {
      background-color: #e5e3e3;
      outline:none;
    }

    div.container > div.subcontent > img {
      width:100%;
      border-radius:5px;
    }

    div.container > div.subcontent > p {
      font-family: 'Abel', sans-serif;
      font-size: 1.5rem;
    }

    @media only screen and (max-width:700px){
      div.jumbotron > p {
	display:none;
      }
    }

    @media only screen and (min-width:700px){
      div.container > div.subcontent {
	display:inline-block;
      }

      div.container > div.subcontent > img {
	display:inline-block;
	vertical-align:text-top;
	width:45%;
	margin-right:20px;
      }
      div.container > div.subcontent > p {
	display:inline-block;
	vertical-align:top;
	margin-top:0;
	width:50%;
      }

      div.jumbotron > p{
	width:100%;
	font-family: 'Abril Fatface', serif;
	text-align:center;
	font-size:7rem;
	color:#547D8F;
	margin:0;
      }
    }

</style>
    <app-menubar currentPage="Talks"></app-menubar>
    <div class="jumbotron"></div>
    <div class="container">
        <h1>Talks</h1>

        ${(this.talks.reverse()).map(elem => html`
          <h3>${elem.title}</h3>
          <p>
              ${elem.event}<br>
              ${elem.organizer}<br>
              ${elem.location}<br>
              ${elem.date}<br><br>

              ${elem.description}
            <br><br>
            ${elem.url ? html`<a href="${elem.url}" target="_blank">Learn More</a>` : ''}
          </p>
        `)}

    </div>
    <app-footerbar></app-footerbar>
    `;
}

