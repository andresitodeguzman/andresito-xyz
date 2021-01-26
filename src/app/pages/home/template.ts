import { html } from 'lit-element';

export function template () {
    return html`
    <style>
        @media only screen and (max-width: 700px){
    
    
    div.container {
        margin-left: 5%;
        margin-right: 5%;
        overflow-y:hidden;
    }
        
    div.jumbotron {
        width:100%;
        height:500px;
        
        background-image: url("/assets/images/me-small.png");
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
        
        background-image: url("/assets/images/me.png");
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

        <app-menubar currentPage="Home"></app-menubar>
        <div class="jumbotron"></div>

<div class="container">            

    <p class="title">
        Let Me Introduce Myself
    </p>
    <p>
        Hey there! I'm Andresito M. de Guzman, a Human Biologist. In my free time, I spend building great experiences for the web through progressive web apps. At times, I experiment with new technologies, I publish apps in the Play Store and even make neat scripts in Python.<br>
        <br><br>
        <a href="https://drive.google.com/open?id=18XxDWfgtEphDhUmRXXGtVLUQw3OEltjJ">Download my CV</a><br><br>
        <a href="https://www.linkedin.com/in/andresito-de-guzman-0ba46996">See my LinkedIn Profile</a>
    </p>

    <p class="title-small" style="margin-top: 100px;">
      LRT 1 needed help to improve its services and this is what we came up with
    </p>
    <div class="subcontent">
    <img src="https://i.ibb.co/kS7G1VD/1-0f-Ck-Iwp-Vxhj-ER8-RVMRVb-Sg.jpg">
    <p>
    My team and I were given a chance to help improve the quality of the Manila Light Rail Transit Line 1. Our proposal is a Progressive Web App we named RailTime. A perfect companion for LRT riders.<br><br>
    <a href="https://medium.com/@andresitodeguzman/railtime-a-hack-a-tren-proposal-1cce08b273e5">Read More</a>
    </p>
    </div>

    <p class="title-small" style="margin-top: 100px;">
      Gabi.na: A music playlist-inspired self-care app for students
    </p>
    <div class="subcontent">
      <p>
        My team and I joined Bluehacks 2019, organized by the Computer Society of the Ateneo. The app we developed is gabi.na. Designed to make student's nightlife more social and inspiring.<br><br>
        <a href="https://medium.com/@andresitodeguzman/gabi-na-our-bluehacks-2019-entry-f2bf42a5d068">Read More</a>
      </p>
      <img src="https://i.ibb.co/jWcF1Qk/Android-1.png">
    </div>

</div>

        <app-footerbar></app-footerbar>
    `;
}

