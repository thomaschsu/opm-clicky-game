// Dependencies
import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import CardWrapper from "./components/CardWrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Set states
  state = {
    friends,
    score: 0,
    clicked: []
  };

  click = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.clickEvent();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.restart();
    }
  };

  clickEvent = () => {
    const score = this.state.score + 1;
    this.setState(
      {
        score: this.state.score + 1
      }
    )
    if (score === 12) {
        alert("You win!");
    }
    this.shuffle();
  };

  // Create a restart function
  restart = () => {
    // Set State to default values
    this.setState(
      {
        friends,
        score: 0,
        clicked: []
      }
    )
  }

  // Create shuffle function and let newfriends become new shuffled array
  shuffle = () => {
    let newFriends = shuffle(friends);
    this.setState({friends: newFriends });
  };

  // Render everything onto page
  render() {
    return (
      <Wrapper>
        <Nav title="One Punch Man - Clicky Game"
        score={this.state.score}
        />
        <Title>The goal is to memorize which images you have already clicked on. Click on any image to earn a point, but don't click on that same image or the game will end and restart!</Title>
        <CardWrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              shuffle={this.shuffle}
              id={friend.id}
              key={friend.id}
              image={friend.image}
              click={this.click}
            />
          ))}
        </CardWrapper>
      </Wrapper>
    );
  }
}

// ES6 shuffle function of fisher-yates algorithm
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default App;
