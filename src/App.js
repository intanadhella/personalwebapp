import React from 'react';
import profile from './asset/img/profile.jpg';
import instagram from './asset/icon/instagram.png';
import facebook from './asset/icon/facebook.png';
import twitter from './asset/icon/twitter.png';
import './App.css';

function App() {
  return (
    <div className="box">
        <img src={profile} className="box-img" />
        <h1>Intan Adela</h1>
        <h5>Web Developer</h5>
        <p>
            I am Intan, I just started learning web developers as a Full Stack Javascript.
        </p>
        <ul>
            <li>
              <a href="https://instagram.com" target="_blank">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank">
                <img src={twitter} alt="" />
              </a>
            </li>
        </ul>
    </div>
  );
}

export default App;
