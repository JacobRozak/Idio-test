import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
state ={
    data:null
}
componentDidMount(){
axios.get('https://api.idio.co/1.0/content?key=URN4QXKCG3QD3Y5MS51A')
  .then(res =>{
    const final = res.data.substr(5).slice(0,-6)
    let parsed = JSON.parse(final);
    this.setState({
      data:parsed.content
    })
    })

}

handleMouseOver = (event) => {
  event.target.className="txt2"
}
handleMouseLeave = (event) => {
  event.target.className="txt"
}


  render() {
    const content = this.state.data
    
    const display = (this.state.data !== null)?(
       content.map((e)=>{
          return (
            <div className="card">
            <img src={'http://'+e.main_image_url.substr(2)} className="pic" />
            <h1 className="txt"id="text" key={e.id} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>{e.title}</h1>
            </div>
          )
       })
    ):(
       <h1>Loading ...</h1>
    )
    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;
