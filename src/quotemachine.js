import React, { Component } from 'react';
import './App.css'


class Quote extends Component {
 constructor(){
     super();
     this.state = {
         quote: {
             quotes:'',
             author:''
         },
         havingQuote: false
     }
     this.END_POINT = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
 }
   
handleClick = event => {
fetch(this.END_POINT)
.then(response => response.json())
.then(data => {
    if(data[0].quotes && data[0].author){
        let{quote} = this.state;
        let quoteData = data[0];
        quote.quotes = quoteData.quotes;
        quote.author = quoteData.author;
        this.setState({quote} = () =>{
            if (this.state.havingQuote === false){
                this.setState({havingQuote:true})
            }
        })
    }
    else{
        return console.error('There is no quote dude')
    }
})   
}

    render() { 
        const {havingQuote, quote} = this.state;
        return ( 
            <div>
            <div className="container-fluid">
          <div id="quote">
            <h1>Welcome to our quote machine</h1>
            </div>
            <div id="OurQuote">
              <h2 id="Author">{havingQuote === true ? JSON.stringify(quote) : 'no quote yet'}</h2>
              
              </div>
              <div id="btn">
              <button id="button" onClick={this.handleClick}><h5>
                  Get quote
                  </h5></button>
              </div>
            
            
          </div>
      
          </div>
         );
    }
}
 
export default Quote;