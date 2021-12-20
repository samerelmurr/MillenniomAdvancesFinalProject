import React, { useState, useEffect } from 'react';
import './DatingCards.css';
import TinderCard from 'react-tinder-card';
import axios from "../../../Axios/axios";

function DatingCards() {
    //use state for cards 
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("http://localhost:3001/api/cards");

            setPeople(req.data);
        }

        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }

    return (
        <div className="datingCards">
            <div className="TinderCardContainer">
                {people.map((val, key) => (
                    <TinderCard 
                        className="swipe" 
                        key={val.name} 
                        onSwipe={(dir) => swiped(dir, val.name)} 
                        onCardLeftScreen={() => outOfFrame(val.name)} 
                        preventSwipe={['up', 'down']}
                    >
                        <div  style={{backgroundImage: `url(${val.pic})`}} className="card">
                            <h3 id="personName">{val.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>  
        </div>
    );
}

export default DatingCards;
