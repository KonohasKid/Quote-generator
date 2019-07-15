import React, { Component } from 'react';
import './App.css'

class Quote extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = { Author : ["Dr. Seuss", "Marilyn Monroe", "Oscar Wilde", "Albert Einstein", "Frank Zappa", "Eric Thomas"],
        Quote: ["Don't cry because it's over, smile because it happened.", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Be yourself; everyone else is already taken.", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "So many books, so little time.", "Avoid being your own enemy."] }
    }
   
handleClick(){
    let randomNumber =(Math.floor(Math.random()* 3));
    let quotes = quotes[randomNumber].Quote;
    this.setState({Quote:quotes})
    let authors = quotes[randomNumber].Author;
    this.setState({Author:authors})
   
}

    render() { 
        
        return ( 
            <div>
            <div className="container-fluid">
          <div id="quote">
            <h1>Welcome to our quote machine</h1>
            </div>
            <div id="OurQuote">
              <h2 id="Author" Author={this.state.Author}></h2>
              <h4 id="Quote" Quote={this.state.Quote}></h4>
              </div>
              <div id="btn">
              <button id="button" onClick={this.handleClick.bind(this)}><h5>Get quote</h5></button>
              </div>
            
            
          </div>
      
          </div>
         );
    }
}
 
export default Quote;