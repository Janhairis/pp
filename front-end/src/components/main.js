import React, { Component } from "react";
import axios from "axios";
import '../home.css' 

class Home extends Component {
  render() {
    return (
      <div class="all">
       <div class="heading">
          <h1>HIRALDOS KAI SHOBUKAN SHOTOKAN KARATE-DO</h1>
        </div>

        <div id="body">
          <div class="photo-container">
            <div className="sl1">
              <img
                src="http://www.shotokan-karate-do.com/wp-content/uploads/2015/10/logo_karate.png"
                style={{ width: 40 + "%", height: 75 + "%" }}
                border="0"
                class="slide-number"
                alt=""
              />
              <img
                src="http://static-cdn1.ustream.tv/i/channel/picture/6/4/0/1/6401598/6401598_5454_101234076555232_1_1290911440,640x360,b:1.jpg"
                style={{ width: 40 + "%", height: 75 + "%" }}
                border="0"
                class="slide-number"
                alt=""
              />
              <img
                src="http://www.goldenphoenixkarate.com/uploads/2/4/3/4/24344118/1625664_orig.png"
                style={{ width: 40 + "%", height: 75 + "%" }}
                border="0"
                class="slide-number"
                alt=""
              />
              <img
                src="http://shotojuku.com/TOURNAMENTS/hiraldo/tonykick.jpg"
                style={{ width: 40 + "%", height: 75 + "%" }}
                border="0"
                class="slide-number"
                alt=""
              />
            </div>
          </div>

          <div class="para">
            <h3 className='homeh3'>Welcome to Hiraldo's Shotokan</h3>
            <p>
              {" "}
              Lorem ipsum dolor amet scenester banh mi selfies YOLO distillery
              freegan. Fingerstache cred poke, synth waistcoat scenester retro
              heirloom thundercats copper mug biodiesel live-edge. Authentic
              schlitz post-ironic asymmetrical, kale chips cardigan adaptogen
              chia marfa four loko vinyl enamel pin ethical prism. Palo santo
              photo booth lomo lo-fi cliche locavore. Forage next level
              pitchfork tilde, chicharrones brooklyn bitters truffaut authentic
              synth bicycle rights slow-carb green juice asymmetrical iPhone.
              Pickled brooklyn normcore letterpress la croix freegan quinoa DIY
              sartorial selvage chartreuse ugh tote bag. Williamsburg YOLO
              direct trade craft beer. Pinterest ethical bushwick, mustache
              shabby chic stumptown occupy cred hashtag vexillologist ugh synth
              meggings. 
              </p>
              <p>
              
              {' '}Umami hell of XOXO bushwick, jianbing asymmetrical
              letterpress tattooed. Kitsch literally venmo, iPhone pop-up hot
              chicken gastropub. Umami chia poke wayfarers mlkshk activated
              charcoal tumeric bespoke messenger bag iPhone unicorn hell of
              truffaut yr edison bulb. Gluten-free bushwick sriracha occupy.
              Single-origin coffee messenger bag hoodie mixtape brunch four
              dollar toast enamel pin fanny pack wayfarers seitan next level
              sustainable la croix vegan synth. Portland distillery before they
              sold out viral chambray salvia crucifix selvage actually brunch
              slow-carb poke PBRB venmo. Brooklyn taiyaki vaporware pug health
              goth bicycle rights. Semiotics poutine marfa unicorn. Ramps
              farm-to-table enamel pin migas, godard hella listicle whatever
              dreamcatcher fashion axe iPhone kale chips williamsburg pinterest.
              Kickstarter VHS copper mug disrupt. Fixie mustache hella
              pinterest, forage brooklyn direct trade. Kickstarter before they
              sold out typewriter truffaut bitters, leggings glossier neutra
              four loko copper mug tattooed sustainable hammock art party pabst.
              put a bird on it trust fund pour-over flannel locavore snackwave
              pickled. Irony coloring book snackwave normcore taiyaki whatever
              brooklyn live-edge direct trade ennui tumblr. Oh. You need a
              little dummy text for your mockup? How quaint. I bet you’re still
              using Bootstrap too…{" "}
            </p>
          </div>
        </div>
        
          <footer>© HIRALDOS KAI SHOBUKAN SHOTOKAN KARATE-DO INTERNATIONAL </footer>
      
       
      </div>
    );
  }
}
export default Home;
