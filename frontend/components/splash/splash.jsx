import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import { Carousel } from 'react-bootstrap';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="splash-container">
          <Carousel>
            <Carousel.Item>
              <iframe width={1000} height={520} alt="900x500" src="" />
              <Carousel.Caption>
                <h3>The Pokemon Quiver Marathon</h3>
                <p>Join us and relive some of your favorite Pokémon episodes on Twitch! Movies playing every day.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <iframe width={1000} height={520} alt="900x500" src="" />
              <Carousel.Caption>
                <h3>Cohh's house of good vibes!</h3>
                <p>Need a place to relax, check out the latest games and hang with some great people? Look no further than CohhCarnage's Twitch community! Join the Cohhilition as we venture forth into the newest RPGs, action & adventure games! With a focus on good vibes and positivity in a relatively Safe-For-Work atmosphere, our community would love to meet you! Drop by and say hello!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <iframe width={1000} height={520} alt="900x500" src="" />
              <Carousel.Caption>
                <h3>Lex Veldhuis</h3>
                <p>Lex is an ex-gamer who has played the highest stakes both online and live. He is notorious for his aggressive plays and many bluffs. Now, he wants to show how to crush at poker. Click here to watch and chat!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

    )


  }
}
