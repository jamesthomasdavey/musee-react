// component
import React, { Component } from 'react';

// css
import classes from './Story.module.css';

// img
import steamCycle from './img/steam_cycle.jpg';
import museeMecaniqueLogo from './img/musee_mecanique_logo.jpg';

class Story extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <div className="ui container">
          <h2 className={classes.header}>How It All Began</h2>
          <h4 className={classes.subHeader}>By Edward Galland Zelinsky (1922-2004)</h4>
          <p className={classes.text}>
            <img alt="musee-mecanique-logo" src={museeMecaniqueLogo} className={classes.museeMecaniqueLogo} />
            My collection consists of more than 300 items, ranging from orchestrions, coin operated
            pianos, antique slot machines, and animations, down to small bird boxes. Most of the
            items are displayed at the Musée Mécanique at Pier 45 in San Francisco, although I keep
            some of the more fragile and collectible items in my home.
          </p>
          <p className={classes.text}>
            Now, I started my collection when I was about 11 years old, and that's a long time ago.
            I went to the Ellis Theatre on Fillmore Street and during the intermission they had a
            Bingo game. My number was called and I ran on stage. They had a big wheel, I spun the
            wheel, and believe it or not, I won the grand prize! No, I didn't win a slot machine or
            a music box; I won five quarts of motor oil. Well, as I was 11 years old and I didn't
            have a car, I carried the five quarts of oil home and then sold the oil to my piano
            teacher for 75 cents. With the 75 cents in my pocket I rode the streetcar down to Golden
            Gate Avenue, an area where they sold slot machines and old jukeboxes. For 5 cents I
            bought a penny skill game that you put a penny in and get five balls and it goes around
            in a circle. I put pennies in it and taught my parents and my friends to do the same; it
            acted like a bank. I used the money I saved from the machine to buy more equipment and I
            visited that area many times over the years. One of my favorite purchases was a slot
            machine, which is now a collector's item. At the time slot machines sold for $20-$25,
            sometimes less. I bought a Charles Fey Liberty Bell slot machine for $25 and sold it for
            what I then thought was the fantastic price of $200 (it is now worth between $25,000 and
            $30,000). But that's the way of a collector-you should have done this and you should
            have done that.
          </p>
          <p className={classes.text}>
            When I returned from the service after World War II, I again visited Golden Gate Avenue.
            In the basement of one of the warehouses I found eight picture machines for $10 apiece,
            including delivery. These machines have been working ever since-first, for a penny.
            Then, later, I changed them to a nickel and they received the same amount of play. Later
            on, I changed them to a dime and the number of plays increased. Several years ago, I
            changed them to a quarter and the number of plays tripled.
          </p>
          <p className={classes.text}>
            In 1946, while learning the painting business, I visited a job in Oakland at the Mills
            Novelty Company. While I was there, I noticed a Seeburg piano with a xylophone and
            mandolin attachment. I inquired about it and asked if they would play it for me. As soon
            as it started playing, several of the mechanics gathered around and tried to make it
            play better. I asked the manager if it was for sale and he said he would love to get it
            out of his shop because it was costing the company too much money to have these men play
            around with the machine. I paid $200 for the piano and had it delivered to my home.
          </p>
          <p className={classes.text}>
            The machine hardly played, so I asked Sherman Clay Piano Company to come out and give me
            an estimate to repair it. They came out, admired the piano, and said they hadn't seen
            one like it in years. But, they had no idea how long it would take them to fix it-or if
            they even could fix it-which they would do on a labor and materials basis. I called two
            other piano companies and received the same answer. I finally decided to fix it myself.
            I did not smoke at the time, but I blew cigarette smoke and then cigar smoke (which
            lasted longer) through the tubes to see where the smoke led. I finally got it playing,
            and it's still playing today.
          </p>
          <p className={classes.text}>
            <img alt="steam-cycle" src={steamCycle} className={classes.steamCycle} />I seldom sell, but I love to
            trade. I did a lot of trading with George Whitney, Sr.; we traded music boxes and pianos
            back and forth. I made one trade with George Whitney that I will never forget. I had
            lunch with him every third Thursday and Mr. Whitney sat at the same table that he sat at
            for 20 years. I remember he had a scotch over ice, shrimp cocktail and a minute steak. I
            tried to copy him, but I couldn't keep up with him on the drinks. Well, one time I had
            quite a few drinks, and I was feeling no pain and George said, "Ed, you have a 1904
            Franklin, do you want to trade it?" And I said, "George, what will you give me for
            it?"Well, I don't really remember the conversation, but I do remember shaking hands with
            him and Mr. Whitney telling me, "Ed, you are the proud owner of a steam motorcycle."
          </p>
          <p className={classes.text}>
            Later, we had dinner again and he asked me who got the best deal in the trade. I said,
            "I don't know, George, you tell me." He said, "Ed, I got the best deal. I got a Franklin
            that's running and you got a motorcycle that isn't, and needs repair." I told him,
            "That's funny, George. I thought I got the best of the deal because I got the only steam
            motorcycle, perhaps, in the whole world." He called me up a few weeks later and asked if
            I wanted to trade back again. That's when I knew I had a good deal. The motorcycle was
            made about 1912 in Sacramento by a man named Gillingwater. It is still in working
            condition and is on display at the Musée Mécanique.
          </p>
          <p className={classes.text}>
            Recently, I received an unsolicited offer of $250,000 for the motorcycle. Now I know I
            really got the best deal!
          </p>
          <p className={classes.text}>
            Special thanks to the people that help keep the Musée working: Ken Eaton, Blake
            Richardson, and Connor, Kyle, and Betsy Zelinsky.
          </p>
        </div>
      </div>
    );
  }
}

export default Story;
