import React, { Component } from 'react';
import './App.css';
import Bar from './comps/Bar.js' ;
import ImageList from './comps/ImageList.js' ;

class App extends Component {
  constructor()
  { super() ;
    this.state = {
        images : [] ,
    }
  }

  onBarSubmit = (input) => {
    const url = 'https://api.unsplash.com/search/photos?per_page=24&query=' + input ;  
    console.log(input) ;
    fetch( url ,{
          method : 'get',
          headers : { 'Content-Type' : 'application/json' ,
                      'Authorization' : 'Client-ID 50ab7217ef6681db6cd9b5b72b5a0c2c9d493c7224489eebfeeaeb2271a37cc0',
                    } ,
        })
    .then( res => {
            if ( res.ok )
              return res.json() ;
            else 
              throw Error(res.statusText)
          } )
    .then( resp => {
            console.log(resp) ;
            this.setState({images : resp.results}) ;
          } )
    .catch( err => console.log(err) ) ;
  }

  render() {
    return (
      <div className="App ui container">
        <h1> Magic Search </h1>
        <Bar onSubmit={this.onBarSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
