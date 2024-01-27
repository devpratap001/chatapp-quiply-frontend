import './App.css';
import {Feature} from "./Components/Feature";
import { Link } from 'react-router-dom';

function App() {
  return <>
  <header >
    <div className='Heading'>
      Quiply
    </div>
    <nav>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><a href='#features'>Features</a></li>
      <li><Link to='/'>Support</Link></li>
    </nav>
  </header>
  <div className='main'>
    <div className='description'>
      <h1>Connect, Communicate and Collaborate</h1>
      <p>
        Welcome to our cutting-edge chat app- where seamless communication meets effortless collaboration. Experience a new era of connecting with friends, family, and colleagues. Elevate your conversations with intuitive features and a user-friendly interface. Join us in redefining the way, you chat.
      </p>
    </div><div className='logo'>
      <img className='logo_hollow' src="/images/wallpaper_svg_hollow.png" alt='Chat app' width="500px" />
      <img className='logo_solid' src="/images/wallpaper_svg.png" alt='Chat app' width="480px" />
      <img className='logo_friends' src="/images/homepage_wallpaper.png" alt='Chat app' width="300px" />
    </div>
  </div>
  <div className='features' id='features'>
    <Feature image="/images/FeatureImages/Simple.png" name="Simple" description="Simple UI that you already know how to use" />
    <Feature image="/images/FeatureImages/Private.png" name="Private" description="Messages and user data are secure" />
    <Feature image="/images/FeatureImages/Secure.png" name="Secure" description="Keeps messages safe from attacks" />
    <Feature image="/images/FeatureImages/Expressive.png" name="Expressive" description="Can be easily customized for usage" />
    <Feature image="/images/FeatureImages/Open.png" name="Open" description="Source code is openly available for everyone" />
    <Feature image="/images/FeatureImages/Fast.png" name="Fast" description="Message delivery is faster than most others" />
    <Feature image="/images/FeatureImages/Powerful.png" name="Powerful" description="Has no limits on size of chat data" />
    <Feature image="/images/FeatureImages/Synced.png" name="Synced" description="Lets you access chat from multiple devices" />
  </div>
  <footer>
    <div className='social'>
      <i className="fa-brands fa-instagram" />
      <i className="fa-brands fa-x-twitter" />
      <i className="fa-brands fa-facebook-f" />
      <i className="fa-brands fa-youtube" />
    </div>
    <div className='policies'>
      <span>Terms of Service</span>
      <span>Privacy Policy</span>
      <span>Contact Support</span>
    </div>
    <div className='copyright'>
      @ 2024 Copyright | quiply.com 
    </div>
  </footer>
  </>
}

export default App;
