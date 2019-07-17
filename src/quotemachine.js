import React, { Component } from 'react';
import './App.css'


class Quote extends Component {
 constructor(){
     super();
     this.state = {
         quote: {
             content:'',
             title:''
         },
         havingQuote: false
     }
     this.END_POINT = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
 }
 

// here is the function how we get our quote from the API
//We have to fetch it and request some data and implemet API'S Title into our state title,same for content
//Then we have to import it into our Apisbutton button
Apisbutton = event => {
fetch(this.END_POINT, {
    method: "GET",
    dataType: "JSON",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }})
.then(response => response.json())
.then (data =>{
    console.log(data);
    if(data[0].content && data[0].title){
        let{quote} = this.state;
        let quoteData = data[0];
        quote.content = quoteData.content;
        quote.title = quoteData.title;
        this.setState({quote}, () =>{
            if(this.state.havingQuote === false){
                this.setState({havingQuote: true})
            }
        })
    }
    else{
        return console.error('There is no quote dude')
    }
}) 
}
// someRendering section is our output and we have to import it in our quote dive section
    someRendering (){
        const{content, title} = this.state.quote;
        return(
            <div>
               <h1>{title}</h1>
               <h4>{content}</h4> 
            </div>
        )
    }
    // we are creating our twitter share button and we have to import it in our code below this section
    twittershare(){
          
      var shareURL = "http://twitter.com/share?"; 
      
      var object = {
        url: "http://google.com", 
        text: "Babe Ruth was a Home Run king but he was also a strike out king. Always go for the fences, even if it means some designs strike out with clients. That&#8217;s the only way to hit a home run.",
        via: "badzo_web_development",
        hashtags: "jeremicnikola,quotemachine"
      }
      for(var prop in object) shareURL += '&' + prop + '=' + encodeURIComponent(object[prop]);
      window.open(shareURL, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    }

    //Here we are going to render our functions,buttons and our objects which is pulled from API
    render() { 
        const {havingQuote} = this.state;
        return ( 
            <div>
            <div className="container-fluid">
          <div id="quote">
            <h1>Welcome to our quote machine</h1>
            </div>
            <div id="OurQuote">
              <h2 id="Author">{havingQuote === true ? this.someRendering() : 'no quote yet'}</h2>
              
              </div>
              <div id="btn">
              <button id="button" onClick={this.Apisbutton}><h5>
                  Get quote
                  </h5></button>
                  <button id="buttonn" onClick={this.twittershare} text={this.state.content}><h5>
                  <img alt="twitter icon" src="https://banner2.kisspng.com/20180605/vos/kisspng-social-media-computer-icons-social-networking-serv-5b1636f9946f28.454943231528182521608.jpg"/>
                  </h5></button>
              </div>
            
            
          </div>
      
          </div>
         );
    }
}
 
export default Quote;