import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Home from './components/main'
import About from './components/about'
import Schedule from './components/schedule'
import Media from './components/media'

class App extends Component {

  heading = () =>{
    <div class="heading">
          <h1>HIRALDOS KAI SHOBUKAN SHOTOKAN KARATE-DO</h1>
    </div>
  }
  render() {


    return (
      <div>
        <div id='both'>
        <div class='logo'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/100px-Disk_pack1.svg.png'  style={{width:6.5 + '%', height: 6.5 + '%'}} />
        </div>
        <nav>
          <Link to='/'>Home</Link>{'  '}
          <Link to='/about'>About Us</Link>{'  '}
          <Link to='/schedule'>Schedule</Link>{'  '}
          
          <Link to='/media'>Media</Link>{'  '}
          {/* <Link to='/contact'>Contact Us</Link> */}
        </nav>
      </div>
        {/* <div class="heading">
          <h1>HIRALDOS KAI SHOBUKAN SHOTOKAN KARATE-DO</h1>
        </div> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
           <Route path='/schedule' component={Schedule} /> 
          <Route path='/media' component={Media} /> 
       </Switch>
       <div class="icon-bar">
          <a href="https://www.facebook.com/ramon.hiraldo.5" class="facebook" >
          
          <i class="fab fa-facebook-f "></i>
          </a>
          <a href="mailto:hiraldokai@hotmail.com" class="email">
          <i class="fas fa-envelope-open" ></i>
          </a>
          <a href="#" class="google">
            <i class="fa fa-google" />
          </a>
          <a href="https://www.linkedin.com/in/hiraldo-ramon-52903648/" class="linkedin">
          <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" class="youtube">
            <i class="fa fa-youtube" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
