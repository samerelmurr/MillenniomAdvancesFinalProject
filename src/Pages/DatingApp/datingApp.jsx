import './datingApp.css';
import {Header, DatingCard, SwipingOption}  from '../../Components/componentsIndex.js';

function DatingApp() {
    const pathname = window.location.pathname;
    pathname.match("/DatingApp") ? document.body.classList += " appOpen" : document.body.classList.remove("appOpen");

    return (
      <div className="DatingApp">
        {/*Header*/}
        <Header />

        {/*Heart BG animation*/}
        <div className="animationBG">
          <ul className="Heart-Area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        
        {/*Swiping Dating Cards*/}
        <DatingCard />

        {/*Swipe option*/}
        <SwipingOption />
      </div>
    );
  }
  
export default DatingApp;



