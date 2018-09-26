import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CardWrapper from "./components/CardWrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Set state
  state = {
    friends,
    score: 0
  };

  click = () => {
    const score = this.state.score + 1;
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score}></Title>
        <Title>Click on an image to earn 1 point, but don't click on that same image or you lose!</Title>
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
