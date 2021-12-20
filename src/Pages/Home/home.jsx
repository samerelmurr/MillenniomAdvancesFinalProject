import './home.scss';
import 'react-bootstrap';
import { Link } from "react-router-dom";
import {LogoSlider, TestemonialSection, FAQ}  from '../../Components/componentsIndex.js';
import {Navbar} from "../index";

function Home() {
    return (
      <div className="Home">
          <Navbar />
          <div className="cont1">
            <div className="cont1-div1">
              <h1 className="title">Dating Made Easy And Convenient To All</h1>
              <p>If you signup for this app you will have access to millions of users. Best way to use this app is with 
              Instagram and using your profile to convey your personality to your potential partners resulting in better matches.</p>
            </div>
            <div className="cont1-div2">
              <img src="https://media-assets-02.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-637022-datingapp--default--1280.png" width="800px" height="500px"/>
              <Link to="/register">
                <button className="btn1">Start Your Dating Journey</button>
              </Link>
            </div>
          </div>
          <LogoSlider />
          <TestemonialSection />
          <FAQ />    
      </div>  
    );
  }
  
  export default Home;
  