import './testemonialSection.scss';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {Avatar} from "@material-ui/core"

const Card = ({ img, name, nationality }) => {
    return (
      <div class="cards">
        <Avatar class="userPic" src={img}/>
        <p class="userText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Fusce tincidunt velit metus, eu pretium eros tincidunt sodales. 
        Morbi congue finibus lorem sed blandit. Vestibulum turpis ipsum,
        dignissim in enim ac, volutpat dignissim orci. Aenean molestie et sapien non ullamcorper. 
        </p>
        <p class="userName"><span>{name}</span> , from {nationality}</p>
      </div>
    );
  };
  
const ResponsiveCards = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
        <h2 class="title2">Testemonials Section</h2>
        <Slider {...settings}>
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" name="Angela Gilbert" nationality="US"/>
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" name="Jack Anderson" nationality="Canada"/>
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" name="Steve Nicklson" nationality="Norway"/>
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" name="Angela Gilbert" nationality="US"/>
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" name="Jack Anderson" nationality="Canada"/>
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" name="Steve Nicklson" nationality="Norway"/>
        </Slider>
      </div>
    );
  };

function testemonialSection(){
    return(
        <div>
            <div className="content">
                <div className="contentImg">
                    <img src="https://a.storyblok.com/f/47007/2400x1260/e88a7b73a9/2020-02_how_to_market_a_dating_app_in_2020_card_1-0.png" width="800px" height="500px"/>
                    <Link to="/register">
                        <button className="btn1">Register Now</button>
                    </Link>
                </div>
                <div className="contentText">
                    <h1 className="title">Easy to use and configure</h1>
                    <p>You can signup with one click using instagram or google. All of your data is encypted and you have full control
                     of how it is used. Join Millions of users and find your match that would be compatible with your lifestyle. </p>
                </div>
            </div>

            <ResponsiveCards />
        </div>
    )
}

export default testemonialSection;

