import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{
  state = {
    count : 0,
  }
  add = ()=>{
    this.setState(current => ({count : current.count+1}))
  }
  minus = ()=>{
    this.setState({count : this.state.count-1})
  }
  render(){//setState를 사용시 렌더시 호출             
    return( 
    <>
    <h1>i am class component {this.state.count}</h1>
    <button onClick={this.add}>
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
