import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{
  state = {
    count : 0,
  }
  add = ()=>{
    return count +1;
  }
  minus = ()=>{
    return count-1;
  }
  render(){
    let a = 3;
    return( 
    <>
    <h1>i am class component {a}</h1>
    <button onCLick={this.add}>
      Add
    </button>
    <button onClick={this.minus}>
      minus
    </button>
    </>
    )
  }
}

export default App;
