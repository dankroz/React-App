import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import CharCard from './components/CharacterCards';
import characters from './characters.json';

class App extends Component {
  state = {
    characters,
    selectedCharacters: [],
    score: 0,
    highscore: 0
  }

  shuffle() {
    for (let i = 11; i > 0; i--) {
      let j = Math.floor(Math.random() * 10);
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
  }

  clicked = id => {
    const selectedCharacters = this.state.selectedCharacters;
    if (selectedCharacters.includes(id)) {
      alert("Sorry, you lost!")
      this.setState({ score: 0})
      this.setState({ selectedCharacters: [] })
      this.shuffle();
    }
    else {
      selectedCharacters.push(id)
      this.setState({ selectedCharacters: selectedCharacters })
      console.log(selectedCharacters)
      this.setState({ score: this.state.score + 1 });
      if (this.state.highscore <= this.state.score) {
        this.setState({ highscore: this.state.score + 1 });
      }
      this.shuffle();
    }
  };


  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highscore={this.state.highscore} />
        <Jumbotron />
        {this.state.characters.map(character => (
          <CharCard
            clicked={this.clicked}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            selected={character.selected}
          />
        ))}
      </Wrapper>
    )
  }
}
export default App;

