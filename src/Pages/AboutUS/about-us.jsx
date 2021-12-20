import './about-us.css';
import {Navbar} from "../index";
import Chart from "react-google-charts";

function About() {
    return (
      <div className="About">
          <Navbar />
          <h1>About Us Page</h1>
          <p>
            Millenniom was created for the sole purpose of connecting millenals together using one of the most popular social media sites, instagram.
            Instagram was used because it can be used to portray people's lifestyles and help in making better matches.
          </p>
          <div className="chart">
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Year', 'Sales', 'Expenses'],
                  ['2013', 1000, 400],
                  ['2014', 1170, 460],
                  ['2015', 660, 1120],
                  ['2016', 1030, 540],
                ]}
                options={{
                  isStacked: 'relative',
                  height: 300,
                  legend: { position: 'top', maxLines: 3 },
                  vAxis: {
                    minValue: 0,
                    ticks: [0, 0.3, 0.6, 0.9, 1],
                  },
                }}
                rootProps={{ 'data-testid': '3' }}
              />
            </div>
      </div>
    );
  }
  
  export default About;
  