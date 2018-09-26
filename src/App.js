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
  // Set state
  state = {
    friends,
    score: 0,
    topScore: 0,
    clicked: []
  };

  // Click event to add 1 to score
  click = () => {
    this.setState(
      {
        score: this.state.score + 1
      }
    )
  };

  render() {
    return (
      <Wrapper>
        <Nav title="One Punch Man - Clicky Game"
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <Title>The goal is to memorize which images you have already clicked on. Click on any image to earn a point, but don't click on that same image or the game will end and restart!</Title>
        <CardWrapper>
          {this.state.friends.map(friend => (
            <FriendCard
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

export default App;
