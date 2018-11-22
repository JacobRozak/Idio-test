import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import fetchJsonp from 'fetch-jsonp'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data : null
    };
    
    
}
componentDidMount(){


   fetchJsonp('https://api.idio.co/1.0/content?key=URN4QXKCG3QD3Y5MS51A&callback=myCallback',{
    jsonpCallbackFunction:'myCallback'
   })
    .then((response)=>{
      return response.json()
   }).then((json)=>{
     console.log(json)
     var res = json
     this.setState({
      data:res.content
    })
  }).catch(function(ex) {
  console.log('parsing failed', ex)
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
            <a href={e.original_url}><img src={'http://'+e.main_image_url.substr(2)} className="pic" /></a>
            <a className="anchor" href={e.original_url}><h1 className="txt"id="text" key={e.id} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>{e.title}</h1></a>
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
