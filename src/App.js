import React from "react";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import "./App.css";
import  Shuffle  from "shuffle-array"

class App extends React.Component {
  state = {
    friends,
    count: 0,
    array: [],
    highScore: 0,
    message: "Click any image to begin"
  };

  shuffleFriends = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = Shuffle(this.state.friends)

    if (this.state.array.includes(id)) {
      if (this.state.count > this.state.highScore) {
        this.setState({ highScore: this.state.count })
      }
      this.setState({ count: 0, array: [], message: " WRONG GUESS!! Click any image to Restart " })
      document.getElementById("message").classList.add("red")
      setTimeout(() => {
        document.getElementById("message").classList.remove("red")
      }, 800);
    } else {
      this.state.array.push(id)
      this.setState({ friends });
      this.setState({ count: this.state.count + 1 });
      this.setState({ message: "You Guessed Correctly" })
      document.getElementById("message").classList.add("green")
      setTimeout(() => {
        document.getElementById("message").classList.remove("green")
      }, 800);

    }



   



  };
  
  scoreFriends = () => {

    this.setState({ count: this.state.count + 1 });

  };

  render() {
    return (

      <div>
        <div id="header">
          <p>Count : {this.state.count}</p>
          <p id="message">{this.state.message}</p> 
          <p>High Score: {this.state.highScore}</p>
        </div>
        <div id="friend-cards" className = "container">
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.key}
            image={friend.image}
            shuffleFriends={this.shuffleFriends}

          />
        ))}
        </div>
      </div>
    )

  }
}

export default App;