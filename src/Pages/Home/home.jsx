import './home.css';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="Home">
          <div className="cont1">
            <div className="cont1-div1">
              <h1>Dating Made Easy And Convenent To All</h1>
              <p>If you signup for this app you will have access to millions of users. Best way to use this app is with 
              Instagram and using your profile to convey your personality to your potential partners resulting in better matches.</p>
            </div>
            <div className="cont1-div2">
              <img src="https://media-assets-02.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-637022-datingapp--default--1280.png" width="700px" height="400px"/>
              <Link to="/register">
                <Button variant="danger">Sign Up Now</Button>
              </Link>
            </div>
          </div>
      </div>
    );
  }
  
  export default Home;
  