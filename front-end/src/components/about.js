import React, { Component } from "react";
import axios from "axios";
import '../about.css'

class About extends Component {
  render() {
    return (
      <div class="all">
       <div class="heading">
          <h1>HIRALDOS KAI SHOBUKAN SHOTOKAN KARATE-DO</h1>
        </div>
      
        <div id="rbod" >
        
          <img class='imglogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/100px-Disk_pack1.svg.png'  style={{width:20 + '%', height: 20 + '%'}} />
            <hr />
            <div class='info'>
            <h3 class='righth3'>About Us</h3>
           
            <p>
              {" "}
              Sunt godard put a bird on it organic, disrupt mustache shabby chic
              drinking vinegar ullamco leggings pour-over. Nisi flexitarian
              beard paleo fam. Fixie activated charcoal pabst kitsch vinyl blue
              bottle 8-bit veniam green juice affogato. Polaroid do seitan,
              schlitz irure shoreditch ramps YOLO. Kombucha cupidatat edison
              bulb vexillologist sriracha leggings.
            </p>
            <p>
              Williamsburg ennui cold-pressed, selfies quinoa ipsum put a bird
              on it taxidermy ut culpa. Viral shabby chic etsy culpa. Blog
              cupidatat austin quinoa blue bottle jean shorts. Tumeric selfies
              meggings williamsburg. Green juice et listicle vexillologist photo
              booth offal synth ex chicharrones fashion axe cray hot chicken
              four dollar toast irure. Gluten-free activated charcoal labore
              thundercats celiac, deserunt sustainable waistcoat butcher ea four
              dollar toast. Proident brunch occupy, photo booth DIY keffiyeh
              cray austin id cupidatat officia shabby chic fugiat.
            </p>
            <p>
              Godard truffaut aute keffiyeh enim heirloom locavore hoodie
              bespoke jean shorts brooklyn qui PBR&B. Anim vaporware pork belly,
              synth try-hard food truck green juice plaid bushwick before they
              sold out quinoa church-key lorem. Fashion axe portland fam duis
              stumptown plaid cliche squid blog. Hashtag fanny pack portland
              iceland, disrupt hella id mlkshk.
            </p>
        
     </div>
       </div> 
        <div id="lbod">
         <hr />
         <div class='infol'>
           
            <h3 class='lefth3'>History</h3>
            <p >
              {" "}
              Lorem ipsum dolor amet aute af hexagon, cliche lumbersexual
              distillery ennui blue bottle dolor hashtag dolore ea sustainable.
              Ex vice af pariatur tumblr ad butcher. Mollit +1 knausgaard vape
              prism shoreditch direct trade. Incididunt neutra taiyaki ramps,
              forage heirloom 90's copper mug iPhone. Chia butcher prism fam
              dolore lomo tempor culpa flexitarian neutra slow-carb post-ironic.
              Kickstarter blog tattooed raclette PBR&B cliche. Aesthetic fixie
              live-edge health goth adipisicing. Raw denim pug before they sold
              out next level prism, tousled ramps master cleanse typewriter
              sriracha thundercats tofu lomo. YOLO roof party truffaut, franzen
              normcore poutine kinfolk exercitation neutra lumbersexual. Street
              art sed iceland adaptogen put a bird on it whatever hella four
              dollar toast beard aesthetic occupy freegan. Hoodie tofu dolore
              chartreuse la croix narwhal DIY schlitz pinterest asymmetrical
              gentrify hella street art. Sunt blue bottle fanny pack affogato
              tbh elit.
            </p>
         </div>
        </div>

        <footer>© HIRALDOS KAI SHOBUKAN SHOTOKAN KARATE-DO INTERNATIONAL </footer>
       
      </div>
    );
  }
}
export default About;
