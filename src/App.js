import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Style.css'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      setup: '',
      punchline: ''
    }
  }

  render() {
    let klik = () => {
      let url = `https://safe-falls-22549.herokuapp.com/random_joke`
      axios.get(url)
        .then((info) => {
          this.setState({
            setup: info.data.setup,
            punchline: info.data.punchline
          })
        })
    }

    return (
      <center>
      <div class="card mt-5" style={{width: '30rem', height: '12rem'}}>
        <div class="card-body">
          <h5 class="card-title">{this.state.setup}</h5>
          <p class="card-text">{this.state.punchline}</p>
          <button onClick={klik} href="#" class="btn btn-danger reload">Reload 💫</button>
        </div>
      </div>
      </center>

    )
  }
}

export default App;
